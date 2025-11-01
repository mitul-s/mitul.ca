"use client";

import { useEffect, useRef } from "react";

export function WorldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return <canvas ref={canvasRef} width={800} height={600} />;
}
