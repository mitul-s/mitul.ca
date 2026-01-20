"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

const Callout = ({ children }: { children: React.ReactNode }) => {
    return (
    <Link href="https://fieldnotesbymitul.substack.com/p/annual-review-2025" target="_blank" rel="noopener noreferrer" className="bg-accent text-gray-1 p-4 rounded-md flex items-center justify-between hover:bg-accent/80 transition">
      <p className="text-sm">{children}</p>
      <ArrowUpRight size={14} className="shrink-0" />
    </Link>
  );
};

export default Callout;