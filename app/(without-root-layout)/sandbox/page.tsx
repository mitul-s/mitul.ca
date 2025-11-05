"use client";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "./countries.geo.json";

export default function MapChart() {
  // Pixel size - adjust these for different detail levels
  const pixelSize = 4; // Size of each pixel square
  const pixelGap = 1; // Gap between pixels

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
        <defs>
          <pattern
            id="pixel-pattern"
            width={pixelSize}
            height={pixelSize}
            patternUnits="userSpaceOnUse"
            x={0}
            y={0}
          >
            <rect
              fill="#FFFFFF"
              width={pixelSize - pixelGap}
              height={pixelSize - pixelGap}
              x={pixelGap / 2}
              y={pixelGap / 2}
            />
          </pattern>
        </defs>

        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill='url("#pixel-pattern")'
                stroke="transparent"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
