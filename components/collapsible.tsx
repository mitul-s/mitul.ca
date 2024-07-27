"use client";
import { CaretDown } from "@phosphor-icons/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

//@ts-ignore
import useSound from "use-sound";
import LinkPrimitive from "./link-primitive";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

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
      <div className="flex items-center justify-center gap-x-2">
        <AccordionPrimitive.Trigger
          className="py-1 grid grid-cols-4 px-2 focus-visible:bg-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-transparent focus-visible:ring-accent/20 focus-visible:text-gray-12 hover:bg-accent hover:text-gray-12 rounded-sm w-full justify-items-start items-center group data-[state=open]:bg-accent/20 data-[state=open]:text-gray-1 whitespace-nowrap accordion-grid-cols"
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
            >
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm border border-[transparent] hover:border-gray-12 "
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          )}
        </AccordionPrimitive.Trigger>
      </div>
      <AccordionPrimitive.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
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
