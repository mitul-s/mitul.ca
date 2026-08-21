"use client";

import useSound from "use-sound";
import type { ReactNode } from "react";

const Honk = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [play] = useSound("/sounds/honk.mp3", {
    volume: 0.6,
    interrupt: true,
  });

  return (
    <button
      type="button"
      onClick={() => play()}
      aria-label="Honk"
      className={`pointer-events-auto cursor-pointer transition active:scale-95 ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Honk;
