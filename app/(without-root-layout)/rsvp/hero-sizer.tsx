"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// Debug tool: open /rsvp?debug on any screen size, drag the sliders until the
// hero feels right, hit copy, paste the class back into page.tsx.
const HeroSizer = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [debug, setDebug] = useState(false);
  const [cap, setCap] = useState(480);
  const [reserve, setReserve] = useState(200);
  const [viewport, setViewport] = useState("");
  const [heroWidth, setHeroWidth] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!new URLSearchParams(window.location.search).has("debug")) return;
    setDebug(true);
    const measure = () => {
      setViewport(`${window.innerWidth}×${window.innerHeight}`);
      if (ref.current)
        setHeroWidth(Math.round(ref.current.getBoundingClientRect().width));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // re-measure after slider-driven layout changes
  useEffect(() => {
    if (debug && ref.current)
      setHeroWidth(Math.round(ref.current.getBoundingClientRect().width));
  }, [cap, reserve, debug]);

  const width = `min(100%, calc((100cqh - ${reserve}px) * 603 / 510.689), ${cap}px)`;
  const utility = `w-[min(100%,calc((100cqh-${reserve}px)*603/510.689),${cap}px)]`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(utility);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable; select manually from readout
    }
  };

  return (
    <>
      <div
        ref={ref}
        className="flex w-[min(100%,calc((100cqh-200px)*603/510.689),480px)] flex-col [container-type:inline-size]"
        style={debug ? { width } : undefined}
      >
        {children}
      </div>
      {debug && (
        <div className="fixed bottom-24 left-4 z-50 flex w-64 flex-col gap-3 rounded-xl bg-black/90 p-4 font-mono text-[11px] text-white shadow-xl">
          <div className="flex justify-between">
            <span className="text-white/60">viewport</span>
            <span>{viewport}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">hero width</span>
            <span>{heroWidth}px</span>
          </div>
          <label className="flex flex-col gap-1">
            <span>max cap: {cap}px</span>
            <input
              type="range"
              min={280}
              max={720}
              step={10}
              value={cap}
              onChange={(e) => setCap(Number(e.target.value))}
              className="w-full accent-[#ed1717]"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>height reserve: {reserve}px</span>
            <input
              type="range"
              min={120}
              max={320}
              step={10}
              value={reserve}
              onChange={(e) => setReserve(Number(e.target.value))}
              className="w-full accent-[#ed1717]"
            />
          </label>
          <button
            type="button"
            onClick={copy}
            className="rounded-md bg-[#ed1717] py-1.5 text-center text-white transition active:scale-[0.98]"
          >
            {copied ? "copied!" : "copy tailwind class"}
          </button>
        </div>
      )}
    </>
  );
};

export default HeroSizer;
