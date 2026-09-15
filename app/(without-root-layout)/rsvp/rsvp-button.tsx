"use client";

import { track } from "@vercel/analytics";
import { useEffect, useRef, useState } from "react";

const VERT = `
attribute vec2 aPos;
varying vec2 vUV;
void main() {
  vUV = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

// Taxi checker wipe: a cab-style checker band wipes in on hover and keeps
// scrolling, with a deckled (torn paper) cutout around the label
const FRAG = `
precision highp float;

varying vec2 vUV;
uniform vec2 uResolution;
uniform float uTime;
uniform float uWipe;
uniform vec2 uLabelX; // label x-bounds in device px, padding included

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

void main() {
  float wipe = clamp(uWipe, 0.0, 2.0);
  vec3 red = vec3(0.929, 0.090, 0.090); // #ed1717
  vec3 cream = vec3(0.965, 0.917, 0.847);

  // checker stripe across the middle, scrolling left like a passing cab
  float band = smoothstep(0.30, 0.36, vUV.y) * smoothstep(0.70, 0.64, vUV.y);
  vec2 gpos = floor((gl_FragCoord.xy + vec2(uTime * -60.0, 0.0)) / 10.0);
  float checker = mod(gpos.x + gpos.y, 2.0);
  vec3 cab = mix(vec3(0.98, 0.75, 0.05), vec3(0.07), checker);

  // deckled (torn paper) cutout edges around the label, static per row
  float y = gl_FragCoord.y;
  float tearL = (vnoise(vec2(y * 0.55, 3.7)) - 0.5) * 9.0
              + (vnoise(vec2(y * 2.6, 11.3)) - 0.5) * 3.5;
  float tearR = (vnoise(vec2(y * 0.55, 27.1)) - 0.5) * 9.0
              + (vnoise(vec2(y * 2.6, 41.9)) - 0.5) * 3.5;
  float edgeL = uLabelX.x + tearL;
  float edgeR = uLabelX.y + tearR;

  float gx = gl_FragCoord.x;
  // wipe 0→1 enters L→R, 1→2 exits L→R (band drives off the right edge)
  float printed = step(vUV.x, wipe) * step(wipe - 1.0, vUV.x);
  float labelCut = max(step(gx, edgeL), step(edgeR, gx));
  vec3 col = mix(red, cab, printed * band * labelCut);

  // faint paper-fiber flash along the tear
  float fiber = (1.0 - smoothstep(0.0, 2.5, abs(gx - edgeL)))
              + (1.0 - smoothstep(0.0, 2.5, abs(gx - edgeR)));
  col = mix(col, cream, clamp(fiber, 0.0, 1.0) * band * printed * 0.18);

  gl_FragColor = vec4(col, 1.0);
}
`;

const compile = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("Shader compile failed: " + info);
  }
  return shader;
};

const link = (gl: WebGLRenderingContext, fragSource: string) => {
  const vs = compile(gl, gl.VERTEX_SHADER, VERT);
  const fs = compile(gl, gl.FRAGMENT_SHADER, fragSource);
  const prog = gl.createProgram()!;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(prog);
    gl.deleteProgram(prog);
    throw new Error("Program link failed: " + info);
  }
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  return prog;
};

type GLState = {
  gl: WebGLRenderingContext;
  uTime: WebGLUniformLocation | null;
  uWipe: WebGLUniformLocation | null;
  uResolution: WebGLUniformLocation | null;
  uLabelX: WebGLUniformLocation | null;
};

const RsvpButton = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  // label x-bounds in device px, padding included
  const labelXRef = useRef<[number, number]>([0, 0]);
  const hoveredRef = useRef(false);
  // cab position along its drive-through: 0 rest, 1 fully in, 2 cleared the right edge
  const progressRef = useRef(0);
  const glRef = useRef<GLState | null>(null);
  const rafRef = useRef<number>(0);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);

  const measureLabel = () => {
    const canvas = canvasRef.current;
    const label = labelRef.current;
    if (!canvas || !label) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cr = canvas.getBoundingClientRect();
    const lr = label.getBoundingClientRect();
    const pad = 4 * dpr;
    labelXRef.current = [
      (lr.left - cr.left) * dpr - pad,
      (lr.right - cr.left) * dpr + pad,
    ];
  };

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
      const prog = link(gl, FRAG);
      gl.useProgram(prog);

      const tri = new Float32Array([-1, -1, 3, -1, -1, 3]);
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, tri, gl.STATIC_DRAW);
      const aPos = gl.getAttribLocation(prog, "aPos");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      glRef.current = {
        gl,
        uTime: gl.getUniformLocation(prog, "uTime"),
        uWipe: gl.getUniformLocation(prog, "uWipe"),
        uResolution: gl.getUniformLocation(prog, "uResolution"),
        uLabelX: gl.getUniformLocation(prog, "uLabelX"),
      };
      setReady(true);
    } catch {
      // shader failed to build; solid-red fallback
    }

    const onLost = (e: Event) => {
      e.preventDefault();
      glRef.current = null;
      setReady(false);
    };
    canvas.addEventListener("webglcontextlost", onLost);
    return () => canvas.removeEventListener("webglcontextlost", onLost);
  }, []);

  // Render loop: runs while hovered, and keeps running through the exit wipe
  useEffect(() => {
    const state = glRef.current;
    const canvas = canvasRef.current;
    if (!ready || !state || !canvas) return;

    const { gl } = state;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
    const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
    canvas.width = w;
    canvas.height = h;
    gl.viewport(0, 0, w, h);

    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      // the wipe travels like a cab: hover drives it in L→R (→1), leaving
      // keeps it moving L→R until it clears the right edge (→2); bailing
      // before it's fully in reverses it back out the left (→0)
      const p = progressRef.current;
      const target = hoveredRef.current ? 1 : p >= 1 ? 2 : 0;
      const stepAmt = dt * 2.0;
      const next = p + Math.sign(target - p) * stepAmt;
      progressRef.current = Math.abs(target - p) <= stepAmt ? target : next;
      const done =
        !hoveredRef.current &&
        (progressRef.current === 0 || progressRef.current === 2);
      if (progressRef.current === 2) progressRef.current = 0; // rest state
      gl.uniform2f(state.uResolution, w, h);
      gl.uniform1f(state.uTime, now / 1000);
      gl.uniform1f(state.uWipe, progressRef.current);
      gl.uniform2f(state.uLabelX, labelXRef.current[0], labelXRef.current[1]);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!done) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [ready, active]);

  return (
    <a
      href="https://partiful.com/e/nfHRrtboDRfOI8NdqCAn"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("rsvp_clicked")}
      onMouseEnter={() => {
        measureLabel();
        hoveredRef.current = true;
        setActive(true);
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
        setActive(false);
      }}
      onFocus={() => {
        measureLabel();
        hoveredRef.current = true;
        setActive(true);
      }}
      onBlur={() => {
        hoveredRef.current = false;
        setActive(false);
      }}
      className="relative flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#ed1717] px-10 font-[family-name:var(--font-fraunces)] text-[18px] tracking-[-0.36px] text-white transition active:scale-[0.99]"
    >
      <canvas
        ref={canvasRef}
        aria-hidden
        className={`pointer-events-none absolute inset-0 h-full w-full ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
      <span ref={labelRef} className="relative">
        RSVP
      </span>
    </a>
  );
};

export default RsvpButton;
