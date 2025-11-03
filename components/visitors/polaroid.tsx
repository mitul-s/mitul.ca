"use client";

import { cn } from "@/lib/utils";
import styles from "./visitors.module.css";
import React from "react";
import Drag from "./drag";
import Image from "next/image";

const Polaroid = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Drag
      className={cn(
        "p-1 pb-6 bg-gray-1 rounded-[8px] transition-all duration-300 ease-out hover:shadow-md",
        styles.polaroid
      )}
    >
      <div className="h-full overflow-hidden relative">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 20vw, 35vw"
          className="max-w-full h-fit object-contain"
          draggable={false}
          quality={5}
        />
      </div>
    </Drag>
  );
};

export default Polaroid;
