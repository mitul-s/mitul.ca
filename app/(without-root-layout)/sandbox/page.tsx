"use client";
import React, { useMemo } from "react";
import { ComposableMap, Geographies } from "react-simple-maps";
import geoUrl from "./countries.geo.json";
// @ts-ignore - TypeScript cache issue, file exists and is valid
import PRECOMPUTED_LAND_PIXELS from "./pixels.js";

// Grid dimensions - high detail for fine pixel art
const GRID_COLS = 200;
const GRID_ROWS = 100;
const MAP_WIDTH = 800;
const MAP_HEIGHT = 400;

interface PixelGridProps {
  geographies: any[];
  projection: any;
}

function PixelGrid({ geographies, projection }: PixelGridProps) {
  const pixelGrid = useMemo(() => {
    const pixelWidth = MAP_WIDTH / GRID_COLS;
    const pixelHeight = MAP_HEIGHT / GRID_ROWS;

    // Use precomputed land pixels with lon/lat coordinates
    // Project them using the current projection to make the map responsive to projection changes
    const pixels = PRECOMPUTED_LAND_PIXELS.map((pixel) => {
      const [x, y] = projection([pixel.lon, pixel.lat]);
      return { x, y };
    });

    return { pixels, pixelWidth, pixelHeight };
  }, [projection]);

  // Render pixel grid with 1px gaps
  const gap = 1;
  return (
    <>
      {pixelGrid.pixels.map((pixel, idx) => (
        <rect
          key={`pixel-${idx}`}
          x={pixel.x - pixelGrid.pixelWidth / 2 + gap}
          y={pixel.y - pixelGrid.pixelHeight / 2 + gap}
          width={pixelGrid.pixelWidth - gap * 2}
          height={pixelGrid.pixelHeight - gap * 2}
          fill="black"
          stroke="none"
        />
      ))}
    </>
  );
}

export default function MapChart() {
  return (
    <>
      <div
        className="h-screen w-screen absolute inset-0"
        style={{
          // backgroundColor: "#e5e5f7",
          opacity: 0.8,
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(gray 1px, transparent 1px), linear-gradient(to right, gray 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>
      {/* Noise overlay */}
      <div
        className="h-screen w-screen absolute inset-0 pointer-events-none z-[1000] isolate"
        style={{
          background: "url(/noise.svg)",
          // opacity: 0.4,
          // backgroundColor: "red",
          mixBlendMode: "overlay",
        }}
      ></div>

      <div className="w-full h-full relative">
        <ComposableMap
          projection="geoMercator"
          // projection="geoEqualEarth"
          projectionConfig={{
            center: [0, 40],
            scale: 80,
          }}
          style={{
            zIndex: 100,
            position: "relative",
          }}
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
        >
          <Geographies geography={geoUrl}>
            {({ geographies, projection }) => (
              <PixelGrid geographies={geographies} projection={projection} />
            )}
          </Geographies>
        </ComposableMap>
      </div>
    </>
  );
}
