"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

interface TrailBox {
  x: number;
  y: number;
  id: number;
}

interface GridCell {
  x: number;
  y: number;
  opacity: number;
  id: string;
}

const GRID_SIZE = 20; // Size of each grid cell in pixels
const TRAIL_LENGTH = 5; // Number of boxes in the trail
const GRID_FADE_DURATION = 1500; // Duration of grid cell fade in milliseconds
const MAX_GRID_CELLS = 100; // Maximum number of grid cells to render
const INACTIVITY_TIMEOUT = 1000; // Time in ms before everything disappears

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailBox[]>([]);
  const [gridCells, setGridCells] = useState<GridCell[]>([]);
  const lastMoveTimestamp = useRef(Date.now());
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const createGridCell = useCallback(
    (x: number, y: number, opacity: number): GridCell => {
      return { x, y, opacity, id: `${x}-${y}-${Date.now()}-${Math.random()}` };
    },
    []
  );

  const clearEverything = useCallback(() => {
    setTrail([]);
    setGridCells([]);
  }, []);

  const resetInactivityTimeout = useCallback(() => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = setTimeout(
      clearEverything,
      INACTIVITY_TIMEOUT
    );
  }, [clearEverything]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastMoveTimestamp.current = Date.now();
      resetInactivityTimeout();

      const centerX = Math.floor(e.clientX / GRID_SIZE) * GRID_SIZE;
      const centerY = Math.floor(e.clientY / GRID_SIZE) * GRID_SIZE;

      // Update trail
      setTrail((prevTrail) => {
        const newBox = { x: centerX, y: centerY, id: Date.now() };
        if (
          prevTrail.length === 0 ||
          prevTrail[0].x !== centerX ||
          prevTrail[0].y !== centerY
        ) {
          return [newBox, ...prevTrail.slice(0, TRAIL_LENGTH - 1)];
        }
        return prevTrail;
      });

      // Update grid cells
      setGridCells((prevCells) => {
        const newCells: GridCell[] = [];
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const x = centerX + i * GRID_SIZE;
            const y = centerY + j * GRID_SIZE;
            const distance = Math.sqrt(i * i + j * j);
            const opacity = Math.max(0, 1 - distance * 0.7); // Increased fade for edges
            newCells.push(createGridCell(x, y, opacity));
          }
        }
        return [...newCells, ...prevCells].slice(0, MAX_GRID_CELLS);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [createGridCell, resetInactivityTimeout]);

  // Fade out grid cells
  useEffect(() => {
    const fadeInterval = setInterval(() => {
      const now = Date.now();
      setGridCells(
        (prevCells) =>
          prevCells
            .map((cell) => ({
              ...cell,
              opacity: Math.max(0, cell.opacity - 50 / GRID_FADE_DURATION),
            }))
            .filter(
              (cell) =>
                cell.opacity > 0.05 &&
                now - Number.parseInt(cell.id.split("-")[2]) <
                  GRID_FADE_DURATION
            ) // Increased threshold for removal
      );
    }, 50); // Update every 50ms for smooth fading

    return () => clearInterval(fadeInterval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Grid cells */}
      {gridCells.map((cell) => (
        <div
          key={cell.id}
          className="absolute border transition-opacity duration-200"
          style={{
            left: `${cell.x}px`,
            top: `${cell.y}px`,
            width: `${GRID_SIZE}px`,
            height: `${GRID_SIZE}px`,
            opacity: cell.opacity,
            // borderColor: `rgba(0, 255, 0, ${cell.opacity * 0.5})`, // Green border with dynamic opacity
            borderColor: `rgba(226, 243, 227, ${cell.opacity * 0.5})`,
            // borderColor: `rgba(19,50,18, ${cell.opacity * 0.5})`,
          }}
        />
      ))}
      {/* Trail boxes */}
      {trail.map((box, index) => (
        <div
          key={box.id}
          className="absolute bg-light-green transition-all duration-150"
          style={{
            left: `${box.x}px`,
            top: `${box.y}px`,
            width: `${GRID_SIZE - 2}px`,
            height: `${GRID_SIZE - 2}px`,
            opacity: 1 - index * (1 / TRAIL_LENGTH),
            transform: `scale(${1 - index * (0.8 / TRAIL_LENGTH)})`,
          }}
        />
      ))}
    </div>
  );
}
