"use client";

import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { cn } from "@/lib/utils";
import useClickOutside from "@/hooks/useClickOutside";
import Signature, { type SignatureRef } from "@uiw/react-signature";
import styles from "./log.module.css";
import { ArrowClockwise } from "@phosphor-icons/react";
import { validateAndSaveEntry } from "@/app/(without-root-layout)/visitors/actions";
import Field from "./field";
import { useAtom, useSetAtom } from "jotai";
import {
  hasCreatedEntryBeforeAtom,
  localCreatedByIdAtom,
  localEntriesAtom,
} from "@/atoms/guestbook";

const transition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.25,
};

export default function WriteNoteCTA() {
  const [step, setStep] = useState<number>(0);
  const [contentRef, { height: heightContent }] = useMeasure();
  const [menuRef, { width: widthContainer }] = useMeasure();
  const [maxWidth, setMaxWidth] = useState(0);
  const [formInfo, setFormInfo] = useState({
    created_by: "",
    entry: "",
    signature: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null);

  const setLocalEntries = useSetAtom(localEntriesAtom);
  const [hasCreatedEntryBefore, setHasCreatedEntryBefore] = useAtom(
    hasCreatedEntryBeforeAtom
  );
  const [localCreatedById, setLocalCreatedById] = useAtom(localCreatedByIdAtom);

  const buttonText = ["Write me a note", "Next", "Submit", "Thanks!"][step];

  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const $svg = useRef<SignatureRef>(null);
  const { pending } = useFormStatus();
  const [loading, setLoading] = useState(false);

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
    return svgelm.outerHTML;
  };

  const stepConent = (step: number, svgRef: React.RefObject<SignatureRef>) => {
    switch (step) {
      case 1:
        return (
          <fieldset className="flex flex-col gap-y-4 p-2">
            <Field
              label="ur name, handle, something"
              value={formInfo.created_by}
              name="created_by"
              placeholder="uncle ben"
              onChange={handleCreatedByChange}
            />
            <Field
              label="a sweet likkle note"
              value={formInfo.entry}
              name="entry"
              placeholder="with great power..."
              onChange={handleEntryChange}
            />
          </fieldset>
        );
      case 2:
        return (
          <div className="rounded-6 overflow-hidden bg-gray-1 p-0.5 flex flex-col relative h-36">
            <Signature
              ref={svgRef}
              options={{
                size: 10,
                thinning: 0.25,
              }}
            />
            <input type="hidden" value={formInfo.signature} />
            <button
              aria-label="clear signature"
              className="rounded-[4px] text-gray-11 font-medium self-end absolute bottom-1 left-1 bg-gray-6 p-1 group hover:bg-gray-8 hover:text-gray-12 transition duration-200"
              type="button"
              onClick={() => svgRef.current?.clear()}
            >
              <ArrowClockwise className="group-hover:rotate-180 transition duration-200 " />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const validateStep = async (currentStep: number) => {
    setLoading(true);
    if (currentStep === 1) {
      const formData = new FormData();
      formData.append("created_by", formInfo.created_by);
      formData.append("entry", formInfo.entry);

      const result = await validateAndSaveEntry(formData, true);

      if (!result.success) {
        //@ts-ignore
        setErrors(result.errors);
        setLoading(false);
        return false;
      }
      setErrors(null);
      setLoading(false);
      return true;
    }
    setLoading(false);
    return true;
  };

  const handleClick = async () => {
    if (!localCreatedById) setLocalCreatedById(crypto.randomUUID());
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

    if (step === 1) {
      const isValid = await validateStep(step);
      if (!isValid) return;
    }

    if (step === 2) {
      setLoading(true);
      const s = handleSVGCapture();
      if (!s) {
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("local_entry_id", crypto.randomUUID());
      formData.append("created_by", formInfo.created_by);
      formData.append("entry", formInfo.entry);
      formData.append("signature", s);
      formData.append(
        "hasCreatedEntryBefore",
        hasCreatedEntryBefore.toString()
      );
      formData.append("local_created_by_id", localCreatedById);
      await handleSubmit(formData);
      return;
    }

    setStep((prev) => prev + 1);
  };

  const getRandomPosition = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const handleSubmit = async (formData: FormData) => {
    const result = await validateAndSaveEntry(formData);
    if (!result.success) {
      //@ts-ignore
      setErrors(result.errors);
      setLoading(false);
      return;
    }

    const newEntry = {
      id: crypto.randomUUID(),
      local_entry_id: formData.get("local_entry_id") as string,
      created_by: formData.get("created_by") as string,
      body: formData.get("entry") as string,
      signature: formData.get("signature") as string,
      initialX: getRandomPosition(100, window.innerWidth - 100),
      initialY: getRandomPosition(100, window.innerHeight - 100),
    };
    setLocalEntries((prev) => [newEntry, ...prev]);

    setStep(3);
    setIsOpen(false);
    setLoading(false);
    formRef.current?.reset();
    setHasCreatedEntryBefore(true);
  };

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (!widthContainer || maxWidth > 0) return;
    setMaxWidth(widthContainer);
  }, [widthContainer, maxWidth]);

  return (
    <div className="bottom-10 left-1/2 -translate-x-1/2 absolute z-[300]">
      <div
        className={cn(
          "rounded-6 bg-[#F04F1F] transition text-[1.5rem] flex gap-x-1.5 items-center justify-center text-gray-1 font-semibold h-fit w-72",
          styles.homeBtn
        )}
      >
        <MotionConfig transition={transition}>
          <div className="h-full w-full" ref={ref}>
            <form ref={formRef}>
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
                                  className={cn(
                                    "absolute -top-[4.5rem] w-full left-0 bg-[#101B1D] text-[1rem] rounded-6 shadow-lg px-4 py-2 font-medium text-center transition",
                                    errors
                                      ? "ring-2 ring-[red]/60"
                                      : "text-gray-1"
                                  )}
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
                                  transition={{
                                    type: "spring",
                                    duration: 0.05,
                                    friction: 20,
                                    bounce: 0.02,
                                    restDelta: "0.01",
                                  }}
                                >
                                  <AnimatePresence mode="wait" initial={false}>
                                    <motion.p
                                      key={
                                        errors?.created_by || errors?.entry
                                          ? "error"
                                          : "default"
                                      }
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 10 }}
                                      transition={{ duration: 0.05 }}
                                    >
                                      {errors?.created_by || errors?.entry
                                        ? errors?.created_by || errors?.entry
                                        : `tnx for visiting! leave ur name and a note if u
                                want... <3`}
                                    </motion.p>
                                  </AnimatePresence>
                                </motion.div>
                              )}
                              {step === 2 && (
                                <motion.div
                                  className="absolute -top-[4.5rem] w-full left-0 bg-[#101B1D] text-[1rem] rounded-6 shadow-lg px-4 py-2 font-medium text-center transition"
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
                                  why not a little drawing as well!{" "}
                                  <span>be creative!!</span>
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
                  "relative flex py-4 w-full shrink-0 scale-100 select-none appearance-none items-center justify-center transition focus-visible:ring-2 active:scale-[0.98] lowercase",
                  loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                )}
                type="button"
                disabled={pending || loading}
                onClick={handleClick}
              >
                {isOpen || step === 3 ? buttonText : "write me a note"}
              </button>
            </form>
          </div>
        </MotionConfig>
      </div>
    </div>
  );
}
