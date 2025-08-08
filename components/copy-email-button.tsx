"use client";

import { CopySimple } from "@phosphor-icons/react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";

//@ts-ignore
import useSound from "use-sound";

const motionVariants: Variants = {
  initial: { y: 5, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -5, opacity: 0 },
};

export const CopyEmailButton = () => {
  const [play] = useSound("/sounds/copy.mp3");
  const [copied, setCopied] = useState(false);
  const handleCopy = (text: string) => {
    play();
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <button
      type="button"
      onClick={() => handleCopy("mitulxshah@gmail.com")}
      className="bg-accent hover:bg-accent/80 transition text-gray-1 py-0.5 pl-1 pr-1.5 rounded-[2px] cursor-pointer text-sm w-[56px]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="flex gap-x-1.5 items-center justify-center"
          variants={motionVariants}
          key={copied ? "Copied!" : "Copy"}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.05 }}
        >
          {copied ? (
            "Copied!"
          ) : (
            <>
              <CopySimple className="shrink-0" size={12} aria-hidden={true} />
              Copy
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export const CopyEmailButtonAlt = () => {
  const [play] = useSound("/sounds/copy.mp3");
  const [copied, setCopied] = useState(false);
  const handleCopy = (text: string) => {
    play();
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <button
      type="button"
      className="flex gap-x-1.5 items-center bg-accent hover:bg-accent/80 transition text-gray-1 py-0.5 pl-1.5 pr-1.5 rounded-[2px] cursor-pointer"
      onClick={() => handleCopy("mitulxshah@gmail.com")}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          variants={motionVariants}
          key={copied ? "Copied!" : "Copy"}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.05 }}
        >
          {copied ? "Copied!" : "Email"}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
