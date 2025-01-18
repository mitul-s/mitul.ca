"use client";

import { CaretDown } from "@phosphor-icons/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

//@ts-ignore
import useSound from "use-sound";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import Link from "next/link";
import { motion } from "framer-motion";

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

  const MotionLink = motion(Link);

  return (
    <AccordionPrimitive.Item value={company}>
      <AccordionPrimitive.Trigger
        onClick={play}
        className="grid grid-cols-[120px_1fr_1fr] text-left w-full px-4 py-2 hover:bg-accent hover:text-[white] data-[state=open]:bg-accent/10 transition-all duration-150 hover:data-[state=open]:text-accent cursor-pointer group"
      >
        <div className="flex items-center gap-x-1">
          <span className="font-medium">{company}</span>
          {link && (
            <MotionLink
              className="cursor-pointer text-sm z-[2]"
              whileHover={{ scale: 1.8 }}
              transition={{ type: "spring", stiffness: 500, damping: 12 }}
              href={link}
              target="_blank"
              rel="noopener"
              aria-label={`Link to ${company} website`}
            >
              <span
                className="w-3.5 h-3.5 p-0.5 flex items-center justify-center rounded-sm border border-[transparent] hover:border-gray-1 group-data-[state=open]:bg-accent"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-1" />
              </span>
            </MotionLink>
          )}
        </div>
        <span>{role}</span>
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

      {/* <AccordionPrimitive.Trigger
          className="py-1 grid grid-cols-4 px-2 focus-visible:bg-accent focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-offset-transparent focus-visible:ring-accent/20 focus-visible:text-gray-12 hover:bg-accent hover:text-gray-12 rounded-sm w-full justify-items-start items-center group data-[state=open]:bg-accent/20 data-[state=open]:text-gray-1 whitespace-nowrap accordion-grid-cols"
          onClick={play}
        >
          <CaretDown
            size={11}
            className="text-gray-10 group-data-[state=open]:-rotate-90 transition-transform duration-150 mr-2 group-hover:text-gray-12 group-focus-visible:text-gray-12 group-data-[state=open]:text-gray-1 -translate-y-px"
            aria-hidden={true}
          />

          <span>{role}</span>
          <span>{company}</span>
          <span className="hidden sm:block ml-auto text-gray-10 text-sm group-hover:text-gray-12 group-focus-visible:text-gray-12 group-data-[state=open]:text-gray-1">
            {range}
          </span>
          <span className="sm:hidden ml-auto text-gray-10 text-sm group-hover:text-gray-12 group-focus-visible:text-gray-12 group-data-[state=open]:text-gray-1">
            {shortRange}
          </span>
          {link && (
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm ml-2"
              href={link}
              target="_blank"
              rel="noopener"
              aria-label={`Link to ${company} website`}
            >
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm border border-[transparent] hover:border-gray-12"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          )}
        </AccordionPrimitive.Trigger> */}

      {/* <AccordionPrimitive.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="flex flex-col px-2 py-3 gap-y-2">
          <p>{description}</p>
          <div className="flex gap-x-1.5">
            {skills?.map((skill) => {
              return (
                <div
                  className="rounded-sm text-gray-10 text-sm py-0.5"
                  key={skill}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </AccordionPrimitive.Content> */}
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
    <AccordionPrimitive.Root
      className={className}
      type="single"
      collapsible
      defaultValue="Composer"
    >
      {children}
    </AccordionPrimitive.Root>
  );
};

export { Accordion, AccordionItem };
