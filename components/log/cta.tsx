"use client";

import React, { useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { cn } from "@/lib/utils";
import useClickOutside from "@/hooks/useClickOutside";

const transition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.25,
};

export default function ToolbarExpandable() {
  const [contentRef, { height: heightContent }] = useMeasure();

  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <MotionConfig transition={transition}>
      <div className="absolute bottom-8 z-10" ref={ref}>
        <div
          className={cn(
            "h-full w-full rounded-[6px] border border-gray-2 transition-colors",
            isOpen ? "bg-gray-1 shadow-md" : "bg-[green]"
          )}
        >
          <div className="overflow-hidden">
            <AnimatePresence initial={false} mode="sync">
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0 }}
                  animate={{ height: heightContent || 0 }}
                  exit={{ height: 0 }}
                  className="w-full"
                >
                  <div ref={contentRef} className="p-2">
                    <motion.div
                      key={"notes"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isOpen ? 1 : 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <div
                        className={cn(
                          "px-2 pt-2 text-sm",
                          isOpen ? "block" : "hidden"
                        )}
                      >
                        <div className="flex flex-col space-y-4">
                          <div className="text-zinc-700">
                            You have 3 new messages.
                          </div>
                          <button
                            className="relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
                            type="button"
                          >
                            View more
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div className="flex space-x-2 p-2">
            <button
              aria-label={"notes"}
              className={cn(
                "relative flex h-9 w-96 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
              )}
              type="button"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Write a note
            </button>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
