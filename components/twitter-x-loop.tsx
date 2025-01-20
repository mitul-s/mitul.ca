"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";

const motionVariants: Variants = {
  initial: { y: 10, opacity: 0, filter: "blur(2px)" },
  animate: { y: 0, opacity: 1, filter: "blur(0px)" },
  exit: { y: -10, opacity: 0, filter: "blur(2px)" },
};

export default function TwitterXMotion({ className }: { className: string }) {
  const [isX, setIsX] = useState(false);

  const handleMouseEnter = () => {
    setIsX(true);
  };

  const handleMouseLeave = () => {
    setIsX(false);
  };

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="w-12 font-medium"
          key={isX ? "X" : "Twitter"}
          variants={motionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.16 }}
        >
          {isX ? "X 🫨" : "Twitter"}
        </motion.div>
      </AnimatePresence>
      <Link href="https://twitter.com/typicalmitul">@typicalmitul</Link>
    </div>
  );
}
