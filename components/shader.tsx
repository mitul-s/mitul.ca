"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

// --- WebGL helpers -----------------------------------------------------------
function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("Shader compile failed: " + info);
  }
  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vsSource: string,
  fsSource: string
) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  const program = gl.createProgram()!;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error("Program link failed: " + info);
  }
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  return program;
}

// --- Shaders -----------------------------------------------------------------
const VERT = `
attribute vec2 aPos;
varying vec2 vUV;
void main() {
  // Single big triangle coordinates -> UV in [0,1]
  vUV = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

// Cover mapping shader with center rotation and transparent dot overlay
const FRAG = `
precision highp float;

varying vec2 vUV;
uniform sampler2D uTex;
uniform vec2 uResolution;
uniform vec2 uVideoSize;
uniform float uDotSize;
uniform float uAngle;
uniform vec3 uInkColor;

// Object-cover mapping with cropping and no stretching.
vec2 coverMap(vec2 uv, vec2 canvasSize, vec2 contentSize) {
  vec2 pos = (uv - 0.5) * canvasSize;
  float s = max(canvasSize.x / contentSize.x, canvasSize.y / contentSize.y);
  vec2 src = pos / s + 0.5 * contentSize;
  return src / contentSize;
}

vec2 rotate2D(vec2 p, float a) {
  float s = sin(a), c = cos(a);
  return mat2(c, -s, s, c) * p;
}

void main() {
  vec2 uv = coverMap(vUV, uResolution, uVideoSize);
  vec3 vid = texture2D(uTex, uv).rgb;

  float lum = dot(vid, vec3(0.299, 0.587, 0.114));

  vec2 p = gl_FragCoord.xy - 0.5 * uResolution;
  p = rotate2D(p, uAngle);
  p += 0.5 * uResolution;

  vec2 g = p / max(uDotSize, 1.0);
  vec2 cell = fract(g) - 0.5;

  float radius = (1.0 - lum) * 0.5;
  float dist = length(cell);

  float feather = 0.35 / max(uDotSize, 1.0);
  float dotMask = 1.0 - smoothstep(radius, radius + feather, dist);

  gl_FragColor = vec4(uInkColor, dotMask);
}
`;

// Fixed color (no per-frame getComputedStyle).
const INK_COLOR: [number, number, number] = [2 / 255, 16 / 255, 147 / 255];

// --- Component ---------------------------------------------------------------
export default function DitherShaderCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [fallback, setFallback] = useState(false);

  // Tunables focused on keeping machines cool
  const DOT_SIZE = 9; // visual size
  const ANGLE_DEG = 68; // visual angle
  const RES_SCALE = 0.75; // internal resolution scale (0.5–1.0)
  const FPS_CAP_NO_RVFC = 30; // cap when requestVideoFrameCallback isn't available

  // GL refs
  const rafRef = useRef<number | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const bufRef = useRef<WebGLBuffer | null>(null);
  const textureRef = useRef<WebGLTexture | null>(null);

  const uTexRef = useRef<WebGLUniformLocation | null>(null);
  const uResolutionRef = useRef<WebGLUniformLocation | null>(null);
  const uVideoSizeRef = useRef<WebGLUniformLocation | null>(null);
  const uDotSizeRef = useRef<WebGLUniformLocation | null>(null);
  const uAngleRef = useRef<WebGLUniformLocation | null>(null);
  const uInkColorRef = useRef<WebGLUniformLocation | null>(null);

  // Render gating
  const hasRVFCRef = useRef(false);
  const needsUploadRef = useRef(false);
  const drawPendingRef = useRef(false);
  const lastTimeRef = useRef(-1); // for fallback frame detection
  const lastDrawMsRef = useRef(0);

  // Active when visible and tab not hidden
  const isVisibleRef = useRef(true);
  const isDocVisibleRef = useRef(
    typeof document !== "undefined" ? !document.hidden : true
  );
  const isActive = () => isVisibleRef.current && isDocVisibleRef.current;

  // Schedule a single RAF when needed (no endless loop)
  const scheduleRender = () => {
    if (drawPendingRef.current) return;
    drawPendingRef.current = true;
    rafRef.current = requestAnimationFrame(drawOnce);
  };

  // Size/viewport
  const setSize = () => {
    const canvas = canvasRef.current;
    const gl = glRef.current;
    if (!canvas || !gl) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const scale = RES_SCALE;
    const w = Math.max(1, Math.floor(canvas.clientWidth * dpr * scale));
    const h = Math.max(1, Math.floor(canvas.clientHeight * dpr * scale));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      scheduleRender();
    }
  };

  // One-shot draw when something actually changed
  const drawOnce = () => {
    drawPendingRef.current = false;
    const gl = glRef.current;
    const v = videoRef.current;
    const program = programRef.current;
    const canvas = canvasRef.current;
    if (!gl || !program || !v || !canvas) return;
    if (!isActive()) return;

    // If no RVFC, cap fps while polling frames
    if (!hasRVFCRef.current) {
      const now = performance.now();
      const minDelta = 1000 / FPS_CAP_NO_RVFC;
      if (now - lastDrawMsRef.current < minDelta) {
        // delay a bit more to respect cap
        drawPendingRef.current = true;
        rafRef.current = requestAnimationFrame(drawOnce);
        return;
      }
      lastDrawMsRef.current = now;
    }

    gl.useProgram(program);

    // Uniforms that can change
    if (uResolutionRef.current)
      gl.uniform2f(uResolutionRef.current, canvas.width, canvas.height);
    const vw = v.videoWidth || 1920;
    const vh = v.videoHeight || 1080;
    if (uVideoSizeRef.current) gl.uniform2f(uVideoSizeRef.current, vw, vh);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (uDotSizeRef.current)
      gl.uniform1f(uDotSizeRef.current, Math.max(1, DOT_SIZE) * dpr);
    if (uAngleRef.current)
      gl.uniform1f(uAngleRef.current, (ANGLE_DEG * Math.PI) / 180.0);

    // Upload new frame only when it actually changed
    if (!hasRVFCRef.current && v.readyState >= 2) {
      const t = v.currentTime;
      if (t !== lastTimeRef.current) {
        needsUploadRef.current = true;
        lastTimeRef.current = t;
      }
    }

    if (needsUploadRef.current && v.readyState >= 2) {
      const texture = textureRef.current!;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, v);
        needsUploadRef.current = false;
      } catch {
        setFallback(true); // likely CORS or lost context
        return;
      }
    }

    // Draw
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // If no RVFC, keep a gentle loop; otherwise, we draw again only when scheduled by RVFC/resize/etc.
    if (!hasRVFCRef.current && isActive()) {
      drawPendingRef.current = true;
      rafRef.current = requestAnimationFrame(drawOnce);
    }
  };

  // Init video (muted/autoplay and first upload)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;

    const tryPlay = () => v.play().catch(() => {});
    tryPlay();

    if (v.readyState >= 2) {
      needsUploadRef.current = true;
      scheduleRender();
    } else {
      const onLoadedData = () => {
        needsUploadRef.current = true;
        tryPlay();
        scheduleRender();
      };
      v.addEventListener("loadeddata", onLoadedData, { once: true });
      return () => v.removeEventListener("loadeddata", onLoadedData);
    }
  }, []);

  // Main GL setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      desynchronized: true, // hint; ignored if unsupported
      powerPreference: "low-power",
    });
    if (!gl) {
      setFallback(true);
      return;
    }
    glRef.current = gl;

    // Keep pipeline minimal
    gl.disable(gl.DITHER);
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.SCISSOR_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const program = createProgram(gl, VERT, FRAG);
    programRef.current = program;
    gl.useProgram(program);

    // Single full-screen triangle (less vertex work than strip)
    const tri = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buf = gl.createBuffer();
    bufRef.current = buf;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, tri, gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    uTexRef.current = gl.getUniformLocation(program, "uTex");
    uResolutionRef.current = gl.getUniformLocation(program, "uResolution");
    uVideoSizeRef.current = gl.getUniformLocation(program, "uVideoSize");
    uDotSizeRef.current = gl.getUniformLocation(program, "uDotSize");
    uAngleRef.current = gl.getUniformLocation(program, "uAngle");
    uInkColorRef.current = gl.getUniformLocation(program, "uInkColor");

    // Texture
    const texture = gl.createTexture();
    textureRef.current = texture;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    if (uTexRef.current) gl.uniform1i(uTexRef.current, 0);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // set once

    // Seed texture
    const pixel = new Uint8Array([0, 0, 0, 0]);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixel
    );

    // Set static uniforms
    if (uInkColorRef.current)
      gl.uniform3f(
        uInkColorRef.current,
        INK_COLOR[0],
        INK_COLOR[1],
        INK_COLOR[2]
      );

    // Resize handling
    setSize();
    const onResize = () => setSize();
    window.addEventListener("resize", onResize, { passive: true });

    // Video frame callbacks (prefer this over an endless RAF)
    const setupRVFC = () => {
      const vv: any = video;
      if (vv && typeof vv.requestVideoFrameCallback === "function") {
        hasRVFCRef.current = true;
        let id: any;
        const onFrame = () => {
          if (!isActive()) return; // if inactive, skip uploads until resumed
          needsUploadRef.current = true;
          scheduleRender();
          id = vv.requestVideoFrameCallback(onFrame);
        };
        id = vv.requestVideoFrameCallback(onFrame);
        return () => vv.cancelVideoFrameCallback?.(id);
      }
      hasRVFCRef.current = false;
      // If no RVFC, we’ll gently loop in drawOnce() with an FPS cap.
      scheduleRender();
      return () => {};
    };
    const cancelRVFC = setupRVFC();

    // Ensure first upload after canplay
    const onCanPlay = () => {
      needsUploadRef.current = true;
      video.play().catch(() => {});
      scheduleRender();
    };
    video.addEventListener("canplay", onCanPlay, { once: true });

    // WebGL context loss -> fallback to plain video
    const onLost = (e: Event) => {
      e.preventDefault();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setFallback(true);
    };
    canvas.addEventListener("webglcontextlost", onLost as any, {
      passive: false,
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      video.removeEventListener("canplay", onCanPlay);
      canvas.removeEventListener("webglcontextlost", onLost as any);
      cancelRVFC();

      const gl2 = glRef.current;
      const program2 = programRef.current;
      const buf2 = bufRef.current;
      const texture2 = textureRef.current;
      if (gl2) {
        if (texture2) gl2.deleteTexture(texture2);
        if (buf2) gl2.deleteBuffer(buf2);
        if (program2) gl2.deleteProgram(program2);
      }
      glRef.current = null;
      programRef.current = null;
      bufRef.current = null;
      textureRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pause when off-screen to save power
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisibleRef.current = !!entry?.isIntersecting;
        const v = videoRef.current;
        if (isActive()) {
          v?.play().catch(() => {});
          scheduleRender();
        } else {
          v?.pause();
        }
      },
      { root: null, threshold: 0.01 }
    );
    obs.observe(root);
    return () => obs.disconnect();
  }, []);

  // Pause when tab is hidden
  useEffect(() => {
    const onVis = () => {
      isDocVisibleRef.current = !document.hidden;
      const v = videoRef.current;
      if (isActive()) {
        v?.play().catch(() => {});
        scheduleRender();
      } else {
        v?.pause();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
    >
      {/* Hidden video (shown when falling back) */}
      <video
        ref={videoRef}
        src={
          "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/main/Flowers%20Blowing%20Video.mp4"
        }
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className={
          fallback
            ? "absolute inset-0 w-full h-full object-cover z-10"
            : "pointer-events-none absolute -left-[9999px] -top-[9999px] w-[1px] h-[1px]"
        }
        crossOrigin="anonymous"
      />

      {/* Shader canvas */}
      <canvas
        ref={canvasRef}
        className={
          fallback
            ? "hidden"
            : "absolute inset-0 w-full h-full block pointer-events-none"
        }
      />
    </div>
  );
}
