"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      drag
      dragElastic={0.1}
      className={cn("select-none w-fit h-fit", className)}
      style={{
        rotate: animate.rotate,
        top: animate.y,
        left: animate.x,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Drag;
