"use client";

import { CaretDown } from "@phosphor-icons/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

//@ts-ignore
import useSound from "use-sound";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface ExpandingLinkProps {
  link: string;
  company: string;
}

export const ExpandingLink: React.FC<ExpandingLinkProps> = ({
  link,
  company,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      className="cursor-pointer text-sm z-[2] flex items-center overflow-hidden hover:group-data-[state=open]:bg-accent hover:text-gray-1 transition-colors duration-100 ease-in opacity-0 group-data-[state=open]:opacity-100 group-data-[state=open]:text-accent group-hover:opacity-100 text-gray-1 h-4"
      animate={{ width: isHovered ? "auto" : "20px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.5,
      }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link to ${company} website`}
      onClick={(e) => e.stopPropagation()}
      layout
    >
      <ArrowUpRight
        aria-hidden={true}
        size={12}
        className="shrink-0 ml-0.5 translate-y-[0.5px]"
      />

      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className="ml-1 whitespace-nowrap text-xs mr-1 peer"
          >
            Visit
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

const AccordionItem = ({
  role,
  company,
  description,
  range,
  skills,
  link,
}: {
  role: string;
  company: string;
  description: string;
  range: string;
  skills?: string[];
  link?: string;
}) => {
  // Short range for mobile view - not enough space
  const shortRange = range.includes(" - ")
    ? range.split(" - ")[1].trim()
    : range?.trim() || "";

  const [play] = useSound("/sounds/trigger.mp3");

  return (
    <AccordionPrimitive.Item value={company}>
      <AccordionPrimitive.Trigger
        onClick={play}
        className="flex justify-between items-center text-left w-full px-4 py-2 hover:bg-accent hover:text-white data-[state=open]:bg-accent/10 transition-all duration-150 hover:data-[state=open]:text-accent cursor-pointer group"
      >
        <div className="flex items-center gap-x-1">
          <CaretDown
            size={11}
            className="text-accent group-data-[state=open]:-rotate-90 transition duration-150 mr-1 group-hover:text-gray-1 group-focus-visible:text-gray-12 group-data-[state=open]:text-accent -ml-1"
            aria-hidden={true}
          />
          <span className="font-medium">{company}</span>
          <span className="whitespace-nowrap">{role}</span>
          {link && <ExpandingLink link={link} company={company} />}
        </div>

        <span className="hidden sm:block ml-auto">{range}</span>
        <span className="sm:hidden ml-auto text-gray-10 text-sm group-hover:text-gray-12 group-focus-visible:text-gray-12 group-data-[state=open]:text-gray-1">
          {shortRange}
        </span>
      </AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content className="overflow-clip transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=open]:bg-accent/10">
        <div className="px-4 pb-4">
          <p>{description}</p>
          <div className="flex gap-x-1.5">
            {skills?.map((skill) => {
              return (
                <div
                  className="rounded-sm text-accent/70 text-sm mt-2"
                  key={skill}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
};

const Accordion = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <AccordionPrimitive.Root className={className} type="single" collapsible>
      {children}
    </AccordionPrimitive.Root>
  );
};

export { Accordion, AccordionItem };
