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
import { EDGE_REGIONS } from "./edge-regions";

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

interface Trail {
  id: string;
  cityPixelIdx: number;
  edgePixelIdx: number;
  pathPixels: number[];
  currentStep: number;
  createdAt: number;
  cityData: any;
}

interface PixelGridProps {
  geographies: any[];
  projection: any;
  activePixels: Map<number, any>; // Map of pixel index to city data
  activeTrails: Trail[];
}

function PixelGrid({
  geographies,
  projection,
  activePixels,
  activeTrails,
}: PixelGridProps) {
  const pixelGrid = useMemo(() => {
    const pixelWidth = MAP_WIDTH / GRID_COLS;
    const pixelHeight = MAP_HEIGHT / GRID_ROWS;

    // Create a map of trail pixels for quick lookup
    const trailPixelMap = new Map<
      number,
      { opacity: number; position: number }
    >();

    activeTrails.forEach((trail) => {
      const visibleLength = Math.min(trail.currentStep, 15); // Show last 15 pixels
      const startIdx = Math.max(0, trail.currentStep - visibleLength);

      for (
        let i = startIdx;
        i <= trail.currentStep && i < trail.pathPixels.length;
        i++
      ) {
        const pixelIdx = trail.pathPixels[i];
        const distanceFromHead = trail.currentStep - i;
        const opacity = Math.max(0.2, 1 - distanceFromHead / visibleLength);

        // Keep the strongest opacity if multiple trails share a pixel
        const existing = trailPixelMap.get(pixelIdx);
        if (!existing || existing.opacity < opacity) {
          trailPixelMap.set(pixelIdx, {
            opacity,
            position: i / trail.pathPixels.length,
          });
        }
      }
    });

    // Use precomputed land pixels with lon/lat coordinates
    // Project them using the current projection to make the map responsive to projection changes
    const pixels = PRECOMPUTED_LAND_PIXELS.map((pixel, idx) => {
      const [x, y] = projection([pixel.lon, pixel.lat]);

      // Check if THIS specific pixel index is active
      const cityMatch = activePixels.get(idx) || null;
      const trailData = trailPixelMap.get(idx) || null;

      return { x, y, idx, cityMatch, trailData };
    });

    return { pixels, pixelWidth, pixelHeight };
  }, [projection, activePixels, activeTrails]);

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
          trailData={pixel.trailData}
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
  trailData,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  gap: number;
  cityMatch: any;
  trailData: { opacity: number; position: number } | null;
}) {
  const delay = Math.random();

  // Trail pixel (blue) - render if there's trail data and no city match
  if (trailData && !cityMatch) {
    return (
      <motion.rect
        animate={{
          opacity: trailData.opacity,
        }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
        x={x - width / 2 + gap}
        y={y - height / 2 + gap}
        width={width - gap * 2}
        height={height - gap * 2}
        fill="#06F"
        stroke="none"
      />
    );
  }

  if (!cityMatch && !trailData) {
    // Regular white pixel
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
  const [activeTrails, setActiveTrails] = useState<Trail[]>([]);

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

  // Pathfinding algorithm: Random walk with directional bias toward target
  const findPath = useMemo(() => {
    return (startIdx: number, endIdx: number): number[] => {
      const path: number[] = [startIdx];
      let currentIdx = startIdx;
      const maxSteps = 500; // Prevent infinite loops
      const visited = new Set<number>([startIdx]);

      const startPixel = PRECOMPUTED_LAND_PIXELS[startIdx];
      const endPixel = PRECOMPUTED_LAND_PIXELS[endIdx];

      for (let step = 0; step < maxSteps; step++) {
        // Check if we've reached the destination
        if (currentIdx === endIdx) break;

        const currentPixel = PRECOMPUTED_LAND_PIXELS[currentIdx];

        // Find neighboring pixels
        const neighbors: { idx: number; score: number }[] = [];

        for (let i = 0; i < PRECOMPUTED_LAND_PIXELS.length; i++) {
          if (visited.has(i)) continue;

          const neighbor = PRECOMPUTED_LAND_PIXELS[i];
          const lonDiff = Math.abs(neighbor.lon - currentPixel.lon);
          const latDiff = Math.abs(neighbor.lat - currentPixel.lat);

          // Check if this pixel is adjacent (within small distance)
          const isAdjacent =
            lonDiff < 2 && latDiff < 2 && lonDiff + latDiff > 0;

          if (isAdjacent) {
            // Calculate distance to target
            const toTargetDist = Math.sqrt(
              Math.pow(neighbor.lon - endPixel.lon, 2) +
                Math.pow(neighbor.lat - endPixel.lat, 2)
            );

            // Score: lower is better (closer to target)
            // Add randomness for the "random walk" effect
            const randomFactor = Math.random() * 0.3;
            const score = toTargetDist * (1 + randomFactor);

            neighbors.push({ idx: i, score });
          }
        }

        // If no neighbors found, try to find any nearby unvisited pixel
        if (neighbors.length === 0) {
          for (let i = 0; i < PRECOMPUTED_LAND_PIXELS.length; i++) {
            if (visited.has(i)) continue;

            const neighbor = PRECOMPUTED_LAND_PIXELS[i];
            const lonDiff = Math.abs(neighbor.lon - currentPixel.lon);
            const latDiff = Math.abs(neighbor.lat - currentPixel.lat);

            if (lonDiff < 3 && latDiff < 3) {
              const toTargetDist = Math.sqrt(
                Math.pow(neighbor.lon - endPixel.lon, 2) +
                  Math.pow(neighbor.lat - endPixel.lat, 2)
              );
              neighbors.push({ idx: i, score: toTargetDist });
            }
          }
        }

        // If still no neighbors, break (stuck)
        if (neighbors.length === 0) break;

        // Sort by score and pick from top 3 randomly for more natural movement
        neighbors.sort((a, b) => a.score - b.score);
        const topNeighbors = neighbors.slice(0, Math.min(3, neighbors.length));
        const chosen =
          topNeighbors[Math.floor(Math.random() * topNeighbors.length)];

        currentIdx = chosen.idx;
        path.push(currentIdx);
        visited.add(currentIdx);
      }

      return path;
    };
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

  // Trail spawning and animation system
  useEffect(() => {
    let isMounted = true;
    const trailTimeouts: NodeJS.Timeout[] = [];
    const animationIntervals: NodeJS.Timeout[] = [];

    // Get cities that have edge regions defined
    const citiesWithEdgeRegions = cityPixelMap.filter(
      (mapping) =>
        mapping.city.edgeRegion && EDGE_REGIONS[mapping.city.edgeRegion]
    );

    if (citiesWithEdgeRegions.length === 0) {
      return;
    }

    const spawnTrail = () => {
      if (!isMounted) return;

      // Pick a random city with edge region
      const randomMapping =
        citiesWithEdgeRegions[
          Math.floor(Math.random() * citiesWithEdgeRegions.length)
        ];

      // @ts-ignore - TypeScript cache issue with updated EDGE_REGIONS type
      const edgeRegionConfig = EDGE_REGIONS[randomMapping.city.edgeRegion];

      // Calculate target location based on direction
      const startPixel = PRECOMPUTED_LAND_PIXELS[randomMapping.pixelIdx];
      // @ts-ignore
      const targetLon =
        startPixel.lon +
        edgeRegionConfig.direction[0] * edgeRegionConfig.distance;
      // @ts-ignore
      const targetLat =
        startPixel.lat +
        edgeRegionConfig.direction[1] * edgeRegionConfig.distance;

      // Find closest pixel to target location
      let edgePixelIdx = 0;
      let minDistance = Infinity;
      for (let i = 0; i < PRECOMPUTED_LAND_PIXELS.length; i++) {
        const pixel = PRECOMPUTED_LAND_PIXELS[i];
        const dx = pixel.lon - targetLon;
        const dy = pixel.lat - targetLat;
        const distance = dx * dx + dy * dy;

        if (distance < minDistance) {
          minDistance = distance;
          edgePixelIdx = i;
        }
      }

      // Generate path
      const path = findPath(randomMapping.pixelIdx, edgePixelIdx);

      if (path.length < 10) {
        return; // Skip if path is too short
      }

      // Create new trail
      const trailId = `trail-${Date.now()}-${Math.random()}`;
      const newTrail: Trail = {
        id: trailId,
        cityPixelIdx: randomMapping.pixelIdx,
        edgePixelIdx,
        pathPixels: path,
        currentStep: 0,
        createdAt: Date.now(),
        cityData: randomMapping.city,
      };

      setActiveTrails((prev) => [...prev, newTrail]);

      // Animate the trail progression
      let step = 0;
      const animationInterval = setInterval(() => {
        if (!isMounted) {
          clearInterval(animationInterval);
          return;
        }

        step++;

        if (step >= path.length) {
          clearInterval(animationInterval);

          // Fade out trail after completion
          const fadeTimeout = setTimeout(() => {
            if (!isMounted) return;
            setActiveTrails((prev) => prev.filter((t) => t.id !== trailId));
          }, 800);

          trailTimeouts.push(fadeTimeout);
        } else {
          setActiveTrails((prev) =>
            prev.map((t) =>
              t.id === trailId ? { ...t, currentStep: step } : t
            )
          );
        }
      }, 80); // 80ms per step for smooth animation

      animationIntervals.push(animationInterval);
    };

    // Schedule trail spawning
    const scheduleNextTrail = () => {
      if (!isMounted) return;

      // Random delay between 2-4 seconds
      const delay = Math.random() * 2000 + 2000;

      const timeout = setTimeout(() => {
        if (!isMounted) return;

        // Spawn trail (it will add itself to state)
        spawnTrail();

        scheduleNextTrail();
      }, delay);

      trailTimeouts.push(timeout);
    };

    // Start with 2 initial trails
    setTimeout(() => spawnTrail(), 500);
    setTimeout(() => spawnTrail(), 1500);

    // Schedule ongoing trails
    scheduleNextTrail();

    return () => {
      isMounted = false;
      trailTimeouts.forEach((timeout) => clearTimeout(timeout));
      animationIntervals.forEach((interval) => clearInterval(interval));
    };
  }, [cityPixelMap, findPath]);

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
                activeTrails={activeTrails}
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
