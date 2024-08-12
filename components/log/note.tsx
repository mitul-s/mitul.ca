"use client";

import { cn } from "@/lib/utils";
import styles from "./log.module.css";
import { motion } from "framer-motion";

const Note = ({
  name,
  content,
  signature,
}: {
  name: string;
  content: string;
  signature: string;
}) => {
  return (
    <motion.div
      drag
      className={cn(
        "bg-gray-1 text-gray-12 w-fit !max-w-[170px] p-2 absolute",
        styles.note
      )}
      style={{
        rotate: `${Math.floor(Math.random() * 100)}deg`,
        top: `${Math.floor(Math.random() * 100)}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
      }}
    >
      {signature ? (
        <div className="border border-gray-6 bg-gray-3 rounded-[3px] flex items-center justify-center overflow-hidden">
          <div
            className="object-contain"
            dangerouslySetInnerHTML={{ __html: signature }}
          />
        </div>
      ) : null}
      <div className="w-full text-sm break-words mt-1.5">
        <span className="text-gray-11 text-[14px] mr-1 font-semibold">
          {name}
        </span>
        <div className="text-[16px] font-medium leading-tight">{content}</div>
      </div>
    </motion.div>
  );
};

export default Note;
