"use client";

import React, { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { saveGuestbookEntry } from "@/app/actions";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { cn } from "@/lib/utils";
import useClickOutside from "@/hooks/useClickOutside";
import Signature, { SignatureRef } from "@uiw/react-signature";
import styles from "../../app/(without-root-layout)/log/notes.module.css";
// import * as z from "zod";

const transition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.25,
};

// const formSchema = z.object({
//   created_by: z.string().min(1, "Name is required"),
//   entry: z.string().min(1, "Entry is required"),
//   signature: z.string().optional(),
// });

export default function ToolbarExpandable() {
  const [step, setStep] = useState<number>(0);
  const [contentRef, { height: heightContent }] = useMeasure();
  const [menuRef, { width: widthContainer }] = useMeasure();
  const [maxWidth, setMaxWidth] = useState(0);
  const [formInfo, setFormInfo] = useState({
    created_by: "",
    entry: "",
    signature: "",
  });

  const buttonText = ["Write me a note", "Next", "Submit", "Thanks!"][step];

  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const $svg = useRef<SignatureRef>(null);
  const { pending } = useFormStatus();
  const [isOpen, setIsOpen] = useState(false);

  const handleCreatedByChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({
      ...formInfo,
      created_by: e.target.value,
    });
  };

  const handleEntryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({
      ...formInfo,
      entry: e.target.value,
    });
  };

  const handleSVGCapture = () => {
    const svgelm = $svg.current?.svg?.cloneNode(true) as SVGSVGElement;
    const clientWidth = $svg.current?.svg?.clientWidth;
    const clientHeight = $svg.current?.svg?.clientHeight;
    svgelm.removeAttribute("style");
    svgelm.setAttribute("width", `${clientWidth}px`);
    svgelm.setAttribute("height", `${clientHeight}px`);
    svgelm.setAttribute("viewbox", `${clientWidth} ${clientHeight}`);
    setFormInfo((prev) => ({
      ...prev,
      signature: svgelm.outerHTML,
    }));
  };

  // const handleSVGCapture = () => {
  //   if ($svg.current && $svg.current.svg) {
  //     const svgElement = $svg.current.svg.cloneNode(true) as SVGSVGElement;
  //     const clientWidth = $svg.current.svg.clientWidth;
  //     const clientHeight = $svg.current.svg.clientHeight;

  //     svgElement.removeAttribute("style");
  //     svgElement.setAttribute("width", `${clientWidth}px`);
  //     svgElement.setAttribute("height", `${clientHeight}px`);
  //     svgElement.setAttribute("viewBox", `0 0 ${clientWidth} ${clientHeight}`);

  //     const svgString = new XMLSerializer().serializeToString(svgElement);
  //     const svgBlob = new Blob([svgString], {
  //       type: "image/svg+xml;charset=utf-8",
  //     });
  //     const svgUrl = URL.createObjectURL(svgBlob);

  //     setFormInfo({
  //       ...formInfo,
  //       signature: svgUrl,
  //     });
  //   }
  // };

  const handleClearSignature = () => {
    $svg.current?.clear();
    setFormInfo((prev) => ({
      ...prev,
      signature: "",
    }));
  };

  const stepConent = (step: number, svgRef: React.RefObject<SignatureRef>) => {
    switch (step) {
      case 1:
        return (
          <div>
            <fieldset className="flex flex-col gap-y-4 p-2">
              <div className="flex flex-col gap-y-1">
                <label className="font-medium text-[14px]">
                  ur name, handle, something
                </label>
                <input
                  type="text"
                  name="created_by"
                  placeholder="peterparker"
                  required
                  autoComplete="off"
                  autoCorrect="off"
                  autoFocus
                  className="bg-[#101B1D]/30 focus:bg-gray-1 transition-all focus:placeholder:text-gray-9  text-[16px] outline-none text-gray-12 font-normal rounded-[6px] p-3 w-full placeholder:text-gray-9"
                  onChange={handleCreatedByChange}
                  value={formInfo.created_by}
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label className="font-medium text-[14px]">
                  a sweet likkle note
                </label>
                <input
                  aria-label="Your message"
                  placeholder="ur the coolest"
                  name="entry"
                  type="text"
                  required
                  autoComplete="off"
                  autoCorrect="off"
                  className="bg-[#101B1D]/30 focus:bg-gray-1 transition-all focus:placeholder:text-gray-9  text-[16px] outline-none text-gray-12 font-normal rounded-[6px] p-3 w-full placeholder:text-gray-9"
                  onChange={handleEntryChange}
                  value={formInfo.entry}
                />
              </div>
            </fieldset>
          </div>
        );
      case 2:
        return (
          <div>
            <Signature className="rounded-[6px]" ref={svgRef} />
            <input type="hidden" value={formInfo.signature} />
            <button onClick={() => svgRef.current?.clear()}>Clear</button>
          </div>
        );
      default:
        return null;
    }
  };

  const handleClick = () => {
    if (step === 3) {
      return;
    }

    if (!isOpen && step === 0) {
      setIsOpen(true);
      setStep(1);
      return;
    }

    if (!isOpen) {
      setIsOpen(true);
      return;
    }

    if (step === 2) {
      handleSVGCapture();
      setIsOpen(false);
      setStep(3);
      return;
    }

    setStep((prev) => prev + 1);
  };

  // useClickOutside(ref, () => {
  //   setIsOpen(false);
  // });

  useEffect(() => {
    if (!widthContainer || maxWidth > 0) return;

    setMaxWidth(widthContainer);
  }, [widthContainer, maxWidth]);

  return (
    <div
      className={cn(
        "z-50 absolute bottom-10 left-1/2 -translate-x-1/2 rounded-[6px] bg-[#F3622A] transition text-[1.5rem] flex gap-x-1.5 items-center justify-center text-gray-1 font-semibold h-fit w-72",
        styles.homeBtn
      )}
    >
      <MotionConfig transition={transition}>
        <div className="h-full w-full" ref={ref}>
          <form
            // style={{ opacity: !pending ? 1 : 0.7 }}
            ref={formRef}
            action={async (formData) => {
              formData.append("created_by", formInfo.created_by);
              formData.append("entry", formInfo.entry);
              formData.append("signature", formInfo.signature);
              console.log("formdata", formData);

              await saveGuestbookEntry("", formData);
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
                          <AnimatePresence>
                            {step === 1 && (
                              <motion.div
                                className="absolute -top-20  w-full left-0 bg-[#101B1D] text-[1rem] rounded-[6px] shadow-lg px-4 py-2 font-medium text-center transition"
                                style={{
                                  textWrap: "balance",
                                }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{
                                  opacity: 0,
                                  y: -20,
                                  transition: {
                                    duration: 0.1,
                                  },
                                }}
                              >
                                {`tnx for visiting! leave ur name and a note if u
                                want... <3`}
                              </motion.div>
                            )}
                            {step === 2 && (
                              <motion.div
                                className="absolute -top-12 w-full left-0 bg-[#101B1D] text-[1rem] rounded-[6px] shadow-lg px-4 py-2 font-medium text-center transition"
                                style={{
                                  textWrap: "balance",
                                }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{
                                  opacity: 0,
                                  y: -20,
                                  transition: {
                                    duration: 0.1,
                                  },
                                }}
                              >
                                {`why not a little drawing as well!`}
                              </motion.div>
                            )}
                          </AnimatePresence>
                          {stepConent(step, $svg)}
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
                "relative flex py-4 w-full shrink-0 scale-100 select-none appearance-none items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] lowercase"
              )}
              type={step === 3 ? "submit" : "button"}
              disabled={pending}
              onClick={handleClick}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </MotionConfig>
    </div>
  );
}
