"use client";

import { Globe, Terminal } from "@phosphor-icons/react";
import { track } from "@vercel/analytics";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  hrefs: {
    live?: string;
    code?: string;
  };
}

const Project = ({
  title,
  description,
  hrefs: { live, code },
}: ProjectProps) => {
  return (
    <div className="px-4 pt-4 pb-5 flex flex-col gap-y-1">
      <h3 className="font-medium">{title}</h3>
      <p>{description}</p>
      <div className="flex items-center mt-2 gap-x-2">
        {live ? (
          <Link
            className="flex gap-x-1.5 items-center bg-accent hover:bg-accent/80 transition text-gray-1 py-0.5 pl-1 pr-1.5 rounded-[2px] cursor-pointer text-sm"
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("project_live_link_clicked", { title })}
          >
            <Globe
              aria-hidden={true}
              size={12}
              className="shrink-0 text-gray-1"
            />
            Live{" "}
          </Link>
        ) : null}
        {code ? (
          <Link
            className="flex gap-x-1.5 items-center bg-accent hover:bg-accent/80 transition text-gray-1 py-0.5 pl-1 pr-1.5 rounded-[2px] cursor-pointer text-sm"
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("project_code_link_clicked", { title })}
          >
            <Terminal
              aria-hidden={true}
              size={12}
              className="shrink-0 text-gray-1"
            />
            Code{" "}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export { Project };
