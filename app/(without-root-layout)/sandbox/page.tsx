"use client";
import React, { useMemo } from "react";
import { ComposableMap, Geographies } from "react-simple-maps";
import { geoContains } from "d3-geo";
import geoUrl from "./countries.geo.json";

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
    const pixels: Array<{
      x: number;
      y: number;
      lon: number;
      lat: number;
    }> = [];

    const pixelWidth = MAP_WIDTH / GRID_COLS;
    const pixelHeight = MAP_HEIGHT / GRID_ROWS;

    // Generate grid cells
    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        // Calculate center of grid cell in screen space
        const x = col * pixelWidth + pixelWidth / 2;
        const y = row * pixelHeight + pixelHeight / 2;

        // Convert screen coordinates to geographic coordinates
        const coords = projection.invert?.([x, y]);

        if (coords) {
          const [lon, lat] = coords;

          // Only render pixels within valid world bounds (prevent repeating)
          if (lon < -180 || lon > 180) continue;

          // Check if this point is within any land geometry
          const isLand = geographies.some((geo) =>
            geoContains(geo, [lon, lat])
          );

          if (isLand) {
            pixels.push({ x, y, lon, lat });
          }
        }
      }
    }

    return { pixels, pixelWidth, pixelHeight };
  }, [geographies, projection]);

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
          fill="#FFFFFF"
          stroke="none"
        />
      ))}
    </>
  );
}

export default function MapChart() {
  return (
    <div className="w-full h-full bg-[black]">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 100,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies, projection }) => (
            <PixelGrid geographies={geographies} projection={projection} />
          )}
        </Geographies>
      </ComposableMap>
    </div>
  );
}
