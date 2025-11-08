"use client";
import React, { useMemo, useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Graticule,
  Sphere,
} from "react-simple-maps";
import { motion, AnimatePresence } from "motion/react";
import geoUrl from "./countries.geo.json";
import citiesData from "./cities.geo.json";
// @ts-ignore - TypeScript cache issue, file exists and is valid
import PRECOMPUTED_LAND_PIXELS from "./pixels.js";

// Grid dimensions - adjust these to change pixel size (lower = bigger pixels)
const GRID_COLS = 200; // Reduced from 200 for bigger pixels
const GRID_ROWS = 100; // Reduced from 100 for bigger pixels
const MAP_WIDTH = 800;
const MAP_HEIGHT = 400;

// Extract all cities from the cities.geo.json file
const ALL_CITIES = Object.values(citiesData).flatMap((country: any) =>
  country.cities.map((city: any) => ({
    name: city.city,
    coordinates: city.coordinates,
    color: country.color,
    population: city.population,
    edgeRegion: city.edgeRegion,
    country: country.country,
  }))
);

interface PixelGridProps {
  geographies: any[];
  projection: any;
  activePixels: Map<number, any>; // Map of pixel index to city data
}

function PixelGrid({ geographies, projection, activePixels }: PixelGridProps) {
  const pixelGrid = useMemo(() => {
    const pixelWidth = MAP_WIDTH / GRID_COLS;
    const pixelHeight = MAP_HEIGHT / GRID_ROWS;

    // Use precomputed land pixels with lon/lat coordinates
    // Project them using the current projection to make the map responsive to projection changes
    const pixels = PRECOMPUTED_LAND_PIXELS.map((pixel, idx) => {
      const [x, y] = projection([pixel.lon, pixel.lat]);

      // Check if THIS specific pixel index is active
      const cityMatch = activePixels.get(idx) || null;

      return { x, y, idx, cityMatch };
    });

    return { pixels, pixelWidth, pixelHeight };
  }, [projection, activePixels]);

  // Render pixel grid with 1px gaps
  const gap = 1;
  return (
    <>
      {pixelGrid.pixels.map((pixel) => (
        <HighlightedPixel
          key={`pixel-${pixel.idx}`}
          x={pixel.x}
          y={pixel.y}
          width={pixelGrid.pixelWidth}
          height={pixelGrid.pixelHeight}
          gap={gap}
          cityMatch={pixel.cityMatch}
        />
      ))}
    </>
  );
}

function HighlightedPixel({
  x,
  y,
  width,
  height,
  gap,
  cityMatch,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  gap: number;
  cityMatch: any;
}) {
  const delay = Math.random();

  if (!cityMatch) {
    // Regular black pixel
    return (
      <rect
        x={x - width / 2 + gap}
        y={y - height / 2 + gap}
        width={width - gap * 2}
        height={height - gap * 2}
        fill="white"
        stroke="none"
      />
    );
  }

  // City pixel with color (network request) - bigger than map pixels
  return (
    <g>
      {/* Pulsing stroke effect */}
      <motion.rect
        animate={{
          scale: [1, 2.5],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
          delay,
        }}
        x={x - width / 2 + gap}
        y={y - height / 2 + gap}
        width={width - 0.5 * 2}
        height={height - 0.5 * 2}
        fill="none"
        stroke={cityMatch.color}
        strokeWidth="1"
        style={{
          transformOrigin: `${x}px ${y}px`,
        }}
      />

      {/* Main pixel */}
      <motion.rect
        animate={{
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.1,
          ease: "easeOut",
        }}
        x={x - width / 2 + gap}
        y={y - height / 2 + gap}
        width={width - 0.5 * 2}
        height={height - 0.5 * 2}
        fill={cityMatch.color}
        // stroke="white"
        // strokeWidth="0.5"
      />
    </g>
  );
}

export default function MapChart() {
  const [activePixels, setActivePixels] = useState<Map<number, any>>(new Map());

  // Pre-compute the city-to-pixel mapping once (huge performance win!)
  const cityPixelMap = useMemo(() => {
    return ALL_CITIES.map((city) => {
      let closestIdx = 0;
      let minDistance = Infinity;

      for (let i = 0; i < PRECOMPUTED_LAND_PIXELS.length; i++) {
        const pixel = PRECOMPUTED_LAND_PIXELS[i];
        const dx = pixel.lon - city.coordinates[0];
        const dy = pixel.lat - city.coordinates[1];
        const distance = dx * dx + dy * dy; // Skip Math.sqrt for performance

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = i;
        }
      }

      return { city, pixelIdx: closestIdx };
    });
  }, []);

  useEffect(() => {
    const pixelTimeouts = new Map<number, NodeJS.Timeout>();
    let isMounted = true;

    const addRandomPixel = () => {
      const randomMapping =
        cityPixelMap[Math.floor(Math.random() * cityPixelMap.length)];

      setActivePixels((prev) => {
        const newMap = new Map(prev);
        newMap.set(randomMapping.pixelIdx, randomMapping.city);
        return newMap;
      });

      // Schedule removal after 600-1200ms
      const duration = Math.random() * 600 + 600;
      const removeTimeout = setTimeout(() => {
        setActivePixels((prev) => {
          const newMap = new Map(prev);
          newMap.delete(randomMapping.pixelIdx);
          return newMap;
        });
        pixelTimeouts.delete(randomMapping.pixelIdx);
      }, duration);

      pixelTimeouts.set(randomMapping.pixelIdx, removeTimeout);
    };

    const scheduleNext = () => {
      if (!isMounted) return;
      const delay = Math.random() * 150 + 80;
      setTimeout(() => {
        if (!isMounted) return;
        addRandomPixel();
        scheduleNext();
      }, delay);
    };

    // Add initial pixels with staggered timing
    for (let i = 0; i < 8; i++) {
      setTimeout(() => addRandomPixel(), i * 100);
    }

    scheduleNext();

    return () => {
      isMounted = false;
      pixelTimeouts.forEach((timeout) => clearTimeout(timeout));
      pixelTimeouts.clear();
    };
  }, [cityPixelMap]);

  return (
    <>
      {/* <div
        className="h-screen w-screen absolute inset-0 "
        style={{
          // backgroundColor: "#e5e5f7",
          opacity: 0.2,
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div> */}
      {/* Noise overlay */}
      <div
        className="h-screen w-screen absolute inset-0 pointer-events-none z-[1000] isolate "
        style={{
          background: "url(/noise.svg)",
          // opacity: 0.4,
          // backgroundColor: "red",
          mixBlendMode: "overlay",
        }}
      ></div>

      <div className="w-full h-full relative">
        <ComposableMap
          // projection="geoMercator"
          projection="geoEqualEarth"
          projectionConfig={{
            center: [0, 0],
            scale: 120,
            rotate: [-10, 0, 0],
          }}
          style={{
            zIndex: 100,
            position: "relative",
          }}
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
        >
          {/* <Graticule stroke="#fff" /> */}
          <Geographies geography={geoUrl}>
            {({ geographies, projection }) => (
              <PixelGrid
                geographies={geographies}
                projection={projection}
                activePixels={activePixels}
              />
            )}
          </Geographies>

          {/* <Sphere
            stroke="#06F"
            strokeWidth={2}
            id={"sphere"}
            fill={"transparent"}
          /> */}
        </ComposableMap>
      </div>
    </>
  );
}
