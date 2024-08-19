"use client";
import { useState, useCallback } from "react";

const useMaxZIndex = () => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = useCallback(() => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      const zIndex = Number.parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!Number.isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    }

    setZIndex(maxZIndex + 1);
  }, []);

  return [zIndex, updateZIndex] as const;
};

export default useMaxZIndex;
