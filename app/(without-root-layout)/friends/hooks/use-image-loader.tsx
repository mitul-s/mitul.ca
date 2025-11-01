"use client";

import { useEffect, useState } from "react";

export function useImageLoader(src: string | null) {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!src) {
      setImage(null);
      return;
    }

    setLoading(true);
    setError(null);

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      setImage(img);
      setLoading(false);
    };

    img.onerror = () => {
      setError(new Error("Failed to load image"));
      setLoading(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { image, loading, error };
}
