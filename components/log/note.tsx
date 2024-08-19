"use client";

import { cn } from "@/lib/utils";
import styles from "./log.module.css";
import Image from "next/image";
import Drag from "./drag";
import React from "react";
import { motion } from "framer-motion";

const Note = React.memo(
  ({
    name,
    content,
    signature,
    initialX,
    initialY,
  }: {
    name: string;
    content: string;
    signature: string;
    initialX?: number;
    initialY?: number;
  }) => {
    return (
      <Drag
        className={cn("z-10 max-w-[200px]")}
        initialX={initialX}
        initialY={initialY}
      >
        <motion.div
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "bg-gray-1 text-gray-12 w-fit max-w-[165px] !scale-75 px-1.5 pt-1.5 pb-2 transition-shadow duration-300 ease-out hover:shadow-md",
            styles.note
          )}
        >
          {signature ? (
            <div
              className={cn(
                "border border-gray-6 bg-gray-3 rounded-[4px] flex items-center justify-center overflow-hidden relative"
              )}
            >
              <div
                className="object-contain z-10"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                dangerouslySetInnerHTML={{ __html: signature }}
              />
              <Image
                src="/images/33.jpeg"
                className="absolute object-cover"
                fill
                draggable={false}
                quality={25}
                alt=""
              />
            </div>
          ) : null}
          <div className="w-full text-sm break-words mt-1.5">
            <span className="text-gray-11 text-[14px] mr-1 font-semibold">
              {name}
            </span>
            <div className="text-[16px] font-medium leading-tight">
              {content}
            </div>
          </div>
        </motion.div>
      </Drag>
    );
  }
);

export default Note;
