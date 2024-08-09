"use client";

import React, { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { saveGuestbookEntry } from "@/app/actions";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { cn } from "@/lib/utils";
import useClickOutside from "@/hooks/useClickOutside";
import Form from "./form";
import Signature from "@uiw/react-signature";

const transition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.25,
};

const stepConent = (step: number) => {
  switch (step) {
    case 1:
      return <>inputs</>;
    case 2:
      return <Signature />;
    default:
      return null;
  }
};

export default function ToolbarExpandable({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [step, setStep] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [contentRef, { height: heightContent }] = useMeasure();
  const [menuRef, { width: widthContainer }] = useMeasure();
  const [maxWidth, setMaxWidth] = useState(0);
  const buttonText = ["Write me a note", "Next", "Submit", "Close"][step];

  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (active === 1) {
      formRef.current?.requestSubmit();
    }

    if (active === 2) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setActive((prev) => (prev === null ? 0 : prev + 1));
    }
  };

  useClickOutside(ref, () => {
    setIsOpen(false);
    setActive(active);
  });

  useEffect(() => {
    if (!widthContainer || maxWidth > 0) return;

    setMaxWidth(widthContainer);
  }, [widthContainer, maxWidth]);

  return (
    <MotionConfig transition={transition}>
      <div className="h-full w-full" ref={ref}>
        <form
          // style={{ opacity: !pending ? 1 : 0.7 }}
          ref={formRef}
          action={async (formData) => {
            await saveGuestbookEntry(formData);
            console.log("submitted");

            formRef.current?.reset();
          }}
        >
          <div className="overflow-hidden w-full">
            <AnimatePresence initial={false} mode="sync">
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0 }}
                  animate={{ height: heightContent || 0 }}
                  exit={{ height: 0 }}
                  style={{
                    width: maxWidth,
                  }}
                >
                  <div ref={contentRef} className="w-full">
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
                        {stepConent(active)}
                        {active === 0 && (
                          <div>
                            <input
                              type="text"
                              name="created_by"
                              placeholder="peterparker"
                              required
                              className="px-2 py-1.5 w-full bg-gray-3 rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block border-neutral-300 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                            />
                            <input
                              aria-label="Your message"
                              placeholder="Your message..."
                              disabled={pending}
                              name="entry"
                              type="text"
                              required
                              className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                            />
                          </div>
                        )}
                        {active === 1 && (
                          <div>
                            <Signature />
                          </div>
                        )}
                        {active === 2 && (
                          <div>
                            <div>Thanks</div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <button
            ref={menuRef}
            aria-label={"notes"}
            className={cn(
              "relative flex h-6 w-full shrink-0 scale-100 select-none appearance-none items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] lowercase"
            )}
            type="submit"
            disabled={pending}
            onClick={(e) => {
              e.preventDefault();
              if (active === 1) {
                formRef.current?.requestSubmit();
              }

              if (active === 2) {
                setIsOpen(false);
              } else {
                setIsOpen(true);
                setActive((prev) => (prev === null ? 0 : prev + 1));
              }
            }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </MotionConfig>
  );
}
