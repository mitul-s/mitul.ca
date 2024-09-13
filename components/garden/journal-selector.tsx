"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface Journal {
  id: number;
  title: string;
}

function JournalSelectorInner({ journals }: { journals: Journal[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedJournal = searchParams.get("journal") || "movies";

  const handleJournalClick = (journal: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("journal", journal);
    router.push(`/garden?${params.toString()}`);
  };

  return (
    <div className="flex flex-col items-start gap-x-1.5">
      {journals.map((journal) => (
        <button
          type="button"
          key={journal.id}
          onClick={() => handleJournalClick(journal.title)}
          className={`hover:bg-gray-2 w-full text-left transition duration-75 rounded-md py-0.5 px-2 ${
            selectedJournal === journal.title ? "font-bold" : ""
          }`}
        >
          {journal.title}
        </button>
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
