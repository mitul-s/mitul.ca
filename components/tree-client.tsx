"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";

const P5AsciiTree = dynamic(() => import("@/components/tree"), {
  ssr: false,
  loading: () => <div className="w-[900px] h-[720px]" />,
});

const TreeClient = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Small delay to ensure smooth loading
          setTimeout(() => setShouldLoad(true), 100);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px' // Start loading 100px before it comes into view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-[900px] h-[720px]">
      {shouldLoad ? <P5AsciiTree /> : null}
    </div>
  );
};

export default TreeClient;
