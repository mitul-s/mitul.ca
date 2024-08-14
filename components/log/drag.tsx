"use client";

import useMaxZIndex from "@/hooks/useMaxZIndex";
import { cn, getRandomRotation } from "@/lib/utils";
import { motion, type PanInfo, useAnimation } from "framer-motion";

const Drag = ({
  children,
  animate = {
    x: 0,
    y: 0,
    rotate: 0,
  },
  className,
  ...props
}: {
  children: React.ReactNode;
  animate?: {
    x: number | string;
    y: number | string;
    rotate: number | string;
  };
  className?: string;
}) => {
  const [zIndex, updateZIndex] = useMaxZIndex();
  const controls = useAnimation();
  const r = getRandomRotation();
  const [x, y] = [
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
  ];

  console.log(x, y);

  const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
    const direction = info.offset.x > 0 ? 1 : -1;
    controls.start({
      rotate: (r * direction) / 3,
      transition: { duration: 1 },
    });
  };

  return (
    <motion.div
      drag
      dragElastic={0.5}
      className={cn("select-none w-fit h-fit drag-elements", className)}
      dragTransition={{ timeConstant: 1000, power: 0.15 }}
      onMouseDown={updateZIndex}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{
        rotate: r,
        x,
        y,
      }}
      style={{
        // rotate: animate.rotate,
        // top: animate.y,
        // left: animate.x,
        zIndex,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Drag;
