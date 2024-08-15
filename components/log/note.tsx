"use client";

import { cn } from "@/lib/utils";
import styles from "./log.module.css";
import Image from "next/image";
import Drag from "./drag";
import React from "react";

const Note = React.memo(
  ({
    name,
    content,
    signature,
  }: {
    name: string;
    content: string;
    signature: string;
  }) => {
    return (
      <Drag
        className={cn(
          "bg-gray-1 text-gray-12 w-fit !max-w-[160px] px-1.5 pt-1.5 pb-2 absolute",
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
              alt=""
            />
          </div>
        ) : null}
        <div className="w-full text-sm break-words mt-1.5">
          <span className="text-gray-11 text-[14px] mr-1 font-semibold">
            {name}
          </span>
          <div className="text-[16px] font-medium leading-tight">{content}</div>
        </div>
      </Drag>
    );
  }
);

export default Note;
