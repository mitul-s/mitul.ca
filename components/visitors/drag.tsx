"use client";

import { useState } from "react";
import useMaxZIndex from "@/hooks/useMaxZIndex";
import { cn, getRandomRotation, seededRandom } from "@/lib/utils";
import { motion, type PanInfo, useAnimation } from "motion/react";
import React from "react";

const Drag = React.memo(
  ({
    children,
    className,
    initialX,
    initialY,
    seed,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    initialX?: number;
    initialY?: number;
    seed?: string;
  }) => {
    const [zIndex, updateZIndex] = useMaxZIndex();
    const controls = useAnimation();
    const [initial] = useState(() => ({
      rotate: seed
        ? Math.floor(seededRandom(seed, 0) * 120) - 60
        : getRandomRotation(),
      x:
        initialX ??
        Math.floor((seed ? seededRandom(seed, 1) : Math.random()) * 1300),
      y:
        initialY ??
        Math.floor((seed ? seededRandom(seed, 2) : Math.random()) * 900),
    }));

    const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
      const direction = info.offset.x > 0 ? 1 : -1;
      const velocity = Math.min(Math.abs(info.velocity.x), 1);
      controls.start({
        rotate: Math.floor(initial.rotate + velocity * 20 * direction),
        transition: {
          type: "spring",
          duration: 1,
          stiffness: 50,
          damping: 30,
          mass: 1,
          restDelta: 0.001,
        },
      });
    };

    return (
      <motion.div
        drag
        dragElastic={0.2}
        className={cn(
          "select-none w-fit h-fit drag-elements absolute",
          className
        )}
        dragTransition={{ power: 0.2, timeConstant: 200 }}
        onMouseDown={updateZIndex}
        onTouchStart={updateZIndex}
        onDragEnd={handleDragEnd}
        animate={controls}
        initial={{
          rotate: initial.rotate,
          x: initial.x,
          y: initial.y,
        }}
        style={{
          zIndex,
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

export default Drag;
