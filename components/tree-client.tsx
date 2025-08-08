"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const P5AsciiTree = dynamic(() => import("@/components/tree"), {
  ssr: false,
  loading: () => <div className="w-[900px] h-[720px]" />,
});

const TreeClient = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Delay loading until after initial page render
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) {
    return <div className="w-[900px] h-[720px]" />;
  }

  return <P5AsciiTree />;
};

export default TreeClient;
