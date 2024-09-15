"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface Journal {
  id: number;
  title: string;
}

function JournalSelectorInner({ journals }: { journals: Journal[] }) {
  const searchParams = useSearchParams();
  const selectedJournal = searchParams.get("journal") || "movies";

  return (
    <div className="flex flex-col items-start gap-x-1.5">
      {journals.map((journal) => (
        <Link
          key={journal.id}
          href={`/os/trackers/${journal.title.toLowerCase()}`}
          className={`hover:bg-gray-2 w-full text-left transition duration-75 rounded-md py-0.5 px-2 ${
            selectedJournal === journal.title ? "font-bold" : ""
          }`}
        >
          {journal.title}
        </Link>
      ))}
    </div>
  );
}

export default function JournalSelector({ journals }: { journals: Journal[] }) {
  return (
    <Suspense fallback={<div>Loading journals...</div>}>
      <JournalSelectorInner journals={journals} />
    </Suspense>
  );
}
