"use client";

import { useEffect, useState, useMemo } from "react";

export function useGameAssets<T extends Record<string, string>>(
  urls: T
): {
  assets: Record<keyof T, HTMLImageElement | null>;
  loading: boolean;
  error: Error | null;
  allImagesLoaded: boolean;
} {
  const urlKeys = useMemo(() => Object.keys(urls) as (keyof T)[], [urls]);
  const urlValues = useMemo(() => Object.values(urls), [urls]);

  const [assets, setAssets] = useState<Record<keyof T, HTMLImageElement | null>>(
    () => {
      const initial: Record<string, HTMLImageElement | null> = {};
      urlKeys.forEach((key) => {
        initial[key as string] = null;
      });
      return initial as Record<keyof T, HTMLImageElement | null>;
    }
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
          if (!cancelled) {
            resolve(img);
          }
        };

        img.onerror = () => {
          if (!cancelled) {
            reject(new Error(`Failed to load image: ${src}`));
          }
        };

        img.src = src;
      });
    };

    const loadAllImages = async () => {
      try {
        const images = await Promise.all(urlValues.map((url) => loadImage(url)));

        if (!cancelled) {
          const loadedAssets: Record<string, HTMLImageElement | null> = {};
          urlKeys.forEach((key, index) => {
            loadedAssets[key as string] = images[index];
          });
          setAssets(loadedAssets as Record<keyof T, HTMLImageElement | null>);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err : new Error("Failed to load game assets")
          );
          setLoading(false);
        }
      }
    };

    loadAllImages();

    return () => {
      cancelled = true;
    };
  }, [urlKeys, urlValues]);

  const allImagesLoaded =
    !loading &&
    urlKeys.every((key) => assets[key] !== null);

  return {
    assets,
    loading,
    error,
    allImagesLoaded,
  };
}

