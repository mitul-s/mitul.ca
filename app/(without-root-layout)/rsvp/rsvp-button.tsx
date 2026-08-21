"use client";

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
  fsSource: string,
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
  vUV = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

// Halftone pulse: cream print dots bloom outward from the center of the
// button in waves — screen-print aesthetic, on-palette (red/cream)
const FRAG = `
precision highp float;

varying vec2 vUV;
uniform vec2 uResolution;
uniform float uTime;

void main() {
  float aspect = uResolution.x / uResolution.y;
  vec2 p = (vUV - 0.5) * vec2(aspect, 1.0);

  // radial pulse field, elliptical to follow the pill shape
  float d = length(p * vec2(1.0, 2.2));
  float pat = 0.5 + 0.5 * sin(d * 9.0 - uTime * 2.4);
  pat *= clamp(1.2 - d, 0.0, 1.0);
  // keep-out behind the text: rings bloom around "RSVP", never over it
  pat *= smoothstep(0.50, 0.72, d);

  // halftone screen (9px dot grid)
  vec2 cell = fract(gl_FragCoord.xy / 9.0) - 0.5;
  float r = clamp(pat, 0.0, 1.0) * 0.62;
  float mask = 1.0 - smoothstep(r, r + 0.15, length(cell));

  vec3 red   = vec3(0.929, 0.090, 0.090); // #ed1717
  vec3 cream = vec3(0.965, 0.917, 0.847);
  vec3 col = mix(red, cream, mask * 0.9);

  gl_FragColor = vec4(col, 1.0);
}
`;

type GLState = {
  gl: WebGLRenderingContext;
  uTime: WebGLUniformLocation | null;
  uResolution: WebGLUniformLocation | null;
};

const RsvpButton = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glRef = useRef<GLState | null>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const [active, setActive] = useState(false);
  const [glOk, setGlOk] = useState(false);

  // One-time GL setup. On failure (or reduced motion) the button stays solid red.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    try {
      const program = createProgram(gl, VERT, FRAG);
      gl.useProgram(program);

      const tri = new Float32Array([-1, -1, 3, -1, -1, 3]);
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, tri, gl.STATIC_DRAW);
      const aPos = gl.getAttribLocation(program, "aPos");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      glRef.current = {
        gl,
        uTime: gl.getUniformLocation(program, "uTime"),
        uResolution: gl.getUniformLocation(program, "uResolution"),
      };
      setGlOk(true);
    } catch {
      // shader failed to build; solid-red fallback
    }

    const onLost = (e: Event) => {
      e.preventDefault();
      glRef.current = null;
      setGlOk(false);
    };
    canvas.addEventListener("webglcontextlost", onLost);
    return () => canvas.removeEventListener("webglcontextlost", onLost);
  }, []);

  // Render loop only while hovered/focused
  useEffect(() => {
    const state = glRef.current;
    const canvas = canvasRef.current;
    if (!active || !state || !canvas) return;

    const { gl } = state;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
    const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
    canvas.width = w;
    canvas.height = h;
    gl.viewport(0, 0, w, h);

    if (!startRef.current) startRef.current = performance.now();

    const tick = (now: number) => {
      gl.uniform2f(state.uResolution, w, h);
      gl.uniform1f(state.uTime, (now - startRef.current) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  return (
    <a
      href="https://partiful.com/e/nfHRrtboDRfOI8NdqCAn"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="relative flex h-11 items-center justify-center overflow-hidden rounded-full bg-[#ed1717] px-8 font-[family-name:var(--font-fraunces)] text-[16px] tracking-[-0.32px] text-white transition hover:bg-[#d41414] active:scale-[0.99] sm:h-12 sm:px-10 sm:text-[18px] sm:tracking-[-0.36px]"
    >
      <canvas
        ref={canvasRef}
        aria-hidden
        className={`pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-300 ${
          active && glOk ? "opacity-100" : "opacity-0"
        }`}
      />
      <span className="relative">RSVP</span>
    </a>
  );
};

export default RsvpButton;
