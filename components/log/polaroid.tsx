"use client";
import { cn, getRandomRotation } from "@/lib/utils";
import styles from "./log.module.css";
import React from "react";
import Drag from "./drag";
import Image from "next/image";

const Polaroid = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Drag
      animate={{
        rotate: `${getRandomRotation()}deg`,
        x: `${Math.floor(Math.random() * 100)}%`,
        y: `${Math.floor(Math.random() * 100)}%`,
      }}
      className={cn(
        "p-1 pb-8 bg-white shadow-sm rounded-md transition-all duration-300 hover:scale-110 hover:rotate-3 ease-out hover:shadow-md absolute z-10",
        styles.polaroid
      )}
    >
      <div className=" mb-8 overflow-hidden relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="max-w-full h-fit object-contain"
          draggable={false}
        />
      </div>
    </Drag>
  );
};

export default Polaroid;
