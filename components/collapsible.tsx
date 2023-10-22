"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const AccordionItem = ({
  role,
  company,
  description,
  range,
}: {
  role: string;
  company: string;
  description: string;
  range: string;
}) => {
  return (
    <AccordionPrimitive.Item value={company}>
      <AccordionPrimitive.Trigger className="py-1 grid grid-cols-3 px-2 focus-visible:bg-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-transparent focus-visible:ring-accent/20 focus-visible:text-gray-12 hover:bg-accent hover:text-gray-12 rounded-sm w-full justify-items-start items-center group transition duration-100 data-[state=open]:bg-accent/20 data-[state=open]:text-gray-1">
        <span>{role}</span>
        <span>{company}</span>
        <span className="block ml-auto text-gray-10 text-sm group-hover:text-gray-12 group-focus-visible:text-gray-12 transition duraiton-100 group-data-[state=open]:text-gray-1">
          {range}
        </span>
      </AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <p className="px-2 py-2">{description}</p>
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
