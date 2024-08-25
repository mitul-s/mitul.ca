"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

function extractLocations(data) {
  if (!data.trips || !Array.isArray(data.trips)) {
    console.error("Invalid data structure: 'trips' array not found");
    return [];
  }

  return data.trips.map((trip) => ({
    place: trip.place,
    latitude: trip.latitude,
    longitude: trip.longitude,
  }));
}

function generateMarkers(locations) {
  return locations.map((location) => ({
    location: [location.latitude, location.longitude],
    size: 0.02, // You can adjust this value or make it dynamic based on some criteria
  }));
}

const Globe = ({ data }) => {
  const locations = extractLocations(data);

  console.log(locations);

  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const rotationValue = useMotionValue(0);
  const springRotation = useSpring(rotationValue, {
    damping: 20,
    stiffness: 100,
  });

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: generateMarkers(locations),
      onRender: (state) => {
        state.phi = springRotation.get();
      },
      //   onRender: (state) => {
      //     // Called on every animation frame.
      //     // `state` will be an empty object, return updated params.
      //     state.phi = phi;
      //     phi += 0.01;
      //   },
    });

    return () => {
      globe.destroy();
    };
  }, [springRotation]);
  return (
    <div>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            rotationValue.set(delta / 200);
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            rotationValue.set(delta / 100);
          }
        }}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
};

export default Globe;
