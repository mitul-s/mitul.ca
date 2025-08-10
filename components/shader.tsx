"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

// WebGL helpers
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

const VERT = `
attribute vec2 aPos;
varying vec2 vUV;
void main() {
  vUV = aPos * 0.5 + 0.5; // [-1,1] -> [0,1]
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

// Helper function to get current accent color from CSS variables
function getCurrentAccentColor(): string {
  if (typeof document === "undefined") return "#021093"; // fallback for SSR

  return getComputedStyle(document.documentElement)
    .getPropertyValue("--color-accent-hex")
    .trim();
}

function getCurrentAccentColorRGB(): [number, number, number] {
  if (typeof document === "undefined") return [2 / 255, 16 / 255, 147 / 255]; // fallback for SSR

  const colorString = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-accent-rgb")
    .trim();

  const colorValues = colorString
    .split(",")
    .map((str) => Number.parseInt(str.trim(), 10));

  if (colorValues.length === 3 && !colorValues.some(isNaN)) {
    const [r, g, b] = colorValues;
    return [r / 255, g / 255, b / 255];
  }

  return [2 / 255, 16 / 255, 147 / 255]; // fallback
}

export default function DitherShaderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [fallback, setFallback] = useState(false);

  // Settings that the shader actually uses
  const [dotSize, setDotSize] = useState(9);
  const [angleDeg, setAngleDeg] = useState(68);

  const [panelOpen, setPanelOpen] = useState(true);

  // GL refs/state
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

  // Frame upload gating
  const needsUploadRef = useRef(false);
  const hasRVFCRef = useRef(false);
  const lastTimeRef = useRef(-1);

  // Fast param access per-frame
  const paramsRef = useRef({
    dotSize,
    angleDeg,
  });
  useEffect(() => {
    paramsRef.current = {
      dotSize,
      angleDeg,
    };
  }, [dotSize, angleDeg]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Ensure autoplay policy passes
    v.muted = true;
    v.defaultMuted = true;

    const tryPlay = () => v.play().catch(() => {});

    // First attempts
    tryPlay();
    if (v.readyState >= 2) {
      needsUploadRef.current = true;
    } else {
      const onLoadedData = () => {
        needsUploadRef.current = true;
        tryPlay();
      };
      v.addEventListener("loadeddata", onLoadedData, { once: true });
      return () => v.removeEventListener("loadeddata", onLoadedData);
    }
  }, []);
  // Main GL setup + loop
  const setupGL = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
    });
    if (!gl) {
      setFallback(true);
      return;
    }
    glRef.current = gl;

    gl.disable(gl.DITHER);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const program = createProgram(gl, VERT, FRAG);
    programRef.current = program;

    // Fullscreen quad
    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    bufRef.current = buf;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
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

    // Seed a valid texture
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

    // Resize
    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.floor(canvas.clientWidth * dpr);
      const h = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    setSize();
    const onResize = () => setSize();
    window.addEventListener("resize", onResize);

    // Upload frames when they change
    const setupRVFC = () => {
      const v: any = video;
      if (v && typeof v.requestVideoFrameCallback === "function") {
        hasRVFCRef.current = true;
        let id: any;
        const onFrame = () => {
          needsUploadRef.current = true;
          id = v.requestVideoFrameCallback(onFrame);
        };
        id = v.requestVideoFrameCallback(onFrame);
        return () => v.cancelVideoFrameCallback?.(id);
      }
      hasRVFCRef.current = false;
      return () => {};
    };
    const cancelRVFC = setupRVFC();

    // Ensure first upload after canplay
    const onCanPlay = () => {
      needsUploadRef.current = true;
      video.play().catch(() => {});
    };
    video.addEventListener("canplay", onCanPlay, { once: true });

    // Context loss
    const onLost = (e: Event) => {
      e.preventDefault();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setFallback(true);
    };
    canvas.addEventListener("webglcontextlost", onLost as any, {
      passive: false,
    });

    // Render loop
    const render = () => {
      rafRef.current = requestAnimationFrame(render);
      const gl = glRef.current;
      const v = videoRef.current;
      const program = programRef.current;
      if (!gl || !program || !v) return;

      gl.useProgram(program); // IMPORTANT: bind each frame before uniforms/draw

      const uResolution = uResolutionRef.current;
      const uVideoSize = uVideoSizeRef.current;
      const uDotSize = uDotSizeRef.current;
      const uAngle = uAngleRef.current;
      const uInkColor = uInkColorRef.current;
      const texture = textureRef.current;
      if (
        !uResolution ||
        !uVideoSize ||
        !uDotSize ||
        !uAngle ||
        !uInkColor ||
        !texture
      )
        return;

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      const vw = v.videoWidth || 1920;
      const vh = v.videoHeight || 1080;
      gl.uniform2f(uVideoSize, vw, vh);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      gl.uniform1f(uDotSize, Math.max(1, paramsRef.current.dotSize) * dpr);
      gl.uniform1f(uAngle, (paramsRef.current.angleDeg * Math.PI) / 180);

      // Get the current color directly in the render loop
      const [r, g, b] = getCurrentAccentColorRGB();
      gl.uniform3f(uInkColor, r, g, b);

      // Fallback frame-change detection if RVFC is not available
      if (!hasRVFCRef.current && v.readyState >= 2) {
        const t = v.currentTime;
        if (t !== lastTimeRef.current) {
          needsUploadRef.current = true;
          lastTimeRef.current = t;
        }
      }

      if (needsUploadRef.current && v.readyState >= 2) {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        try {
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            v
          );
          needsUploadRef.current = false;
        } catch {
          setFallback(true); // likely CORS
        }
      }

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    render();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      video.removeEventListener("canplay", onCanPlay);
      canvas.removeEventListener("webglcontextlost", onLost as any);
      cancelRVFC();

      const gl = glRef.current;
      const program = programRef.current;
      const buf = bufRef.current;
      const texture = textureRef.current;
      if (gl) {
        if (texture) gl.deleteTexture(texture);
        if (buf) gl.deleteBuffer(buf);
        if (program) gl.deleteProgram(program);
      }
      glRef.current = null;
      programRef.current = null;
      bufRef.current = null;
      textureRef.current = null;
    };
  };

  useEffect(() => {
    setupGL();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
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
