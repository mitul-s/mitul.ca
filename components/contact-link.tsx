"use client";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import Item from "./item";
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Copy } from "@phosphor-icons/react/dist/ssr/Copy";
import { cx } from "class-variance-authority";

const ContactCopyItem = ({ title, copy }: { title: string; copy: string }) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = (text: string) => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <button onClick={() => handleCopy(copy)}>
      {copied ? "Copied to clipboard!" : title}
    </button>
  );
};

export const ContactItem = ({
  icon,
  children,
  className,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cx("group relative text-gray-11 hover:text-gray-1", className)}
    >
      <Slot>{children}</Slot>
      <div className="group-hover:opacity-100 opacity-0 absolute -right-4 bottom-[5px] rounded-sm bg-accent shrink-0 block w-3 h-3 text-[black]">
        {icon}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <Item>
      <div className="flex flex-wrap md:flex-col md:gap-y-0 gap-y-2 gap-x-6 md:items-end mt-12 md:mt-0">
        <ContactItem icon={<Copy />}>
          <ContactCopyItem title="Email" copy="mitulxshah@gmail.com" />
        </ContactItem>

        <ContactItem icon={<ArrowUpRight />}>
          <a href="https://twitter.com/typicalmitul" target="_blank">
            Twitter
          </a>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <a href="https://instagram.com/typicalmitul" target="_blank">
            Instagram
          </a>
        </ContactItem>
        <ContactItem icon={<Copy />}>
          <ContactCopyItem title="Discord" copy="@typicalmitul" />
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <a href="https://github.com/mitul-s" target="_blank">
            GitHub
          </a>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <a href="https://read.cv/mitul" target="_blank">
            CV
          </a>
        </ContactItem>
      </div>
    </Item>
  );
};

export default Contact;
