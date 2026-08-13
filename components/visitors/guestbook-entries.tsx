"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import Note from "@/components/visitors/note";
import {
  type Entry,
  allEntriesAtom,
  localEntriesAtom,
  serverEntriesAtom,
} from "@/atoms/guestbook";

function GuestbookEntries({ initialEntries }: { initialEntries: Entry[] }) {
  useHydrateAtoms([[serverEntriesAtom, initialEntries]]);
  const [allEntries] = useAtom(allEntriesAtom);
  const [, setLocalEntries] = useAtom(localEntriesAtom);

  useEffect(() => {
    // if initialEntries contains an approved entry that matches an entry in
    // localEntries, remove it
    setLocalEntries((prev) =>
      prev.filter(
        (localEntry) =>
          !initialEntries.some(
            (entry) =>
              (entry.local_entry_id === localEntry.local_entry_id &&
                entry.approved) ||
              (entry.signature === localEntry.signature && entry.approved)
          )
      )
    );
  }, [initialEntries, setLocalEntries]);

  return allEntries.map((entry) => (
    <Note
      key={entry.id}
      name={entry.created_by}
      content={entry.body}
      signature={entry.signature}
      initialX={entry.initialX}
      initialY={entry.initialY}
      seed={String(entry.id)}
    />
  ));
}

export default GuestbookEntries;
