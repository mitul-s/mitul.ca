"use client";

import { useEffect, useRef, useCallback } from "react";

export function useGameLoop(
  callback: (deltaTime: number) => void,
  active = true,
) {
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);

  const animate = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        callback(deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [callback],
  );

  useEffect(() => {
    if (active) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [active, animate]);
}
