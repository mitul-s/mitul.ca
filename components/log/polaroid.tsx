"use client";
import { cn } from "@/lib/utils";
import styles from "./log.module.css";
import { motion } from "framer-motion";
import React from "react";
import Drag from "./drag";

const Polaroid = () => {
  return (
    <Drag
      animate={{
        rotate: `${Math.floor(Math.random() * 100)}deg`,
        x: `${Math.floor(Math.random() * 100)}%`,
        y: `${Math.floor(Math.random() * 100)}%`,
      }}
      className={cn(
        "p-1 pb-8 bg-white shadow-sm rounded-md transition-all duration-300 hover:scale-110 hover:rotate-3 ease-out hover:shadow-md absolute z-10",
        styles.polaroid
      )}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/en/b/bf/Tobey_Maguire_as_Spider-Man.jpg"
        className="max-w-full h-auto"
        draggable={false}
      />
    </Drag>
  );
};

export default Polaroid;
