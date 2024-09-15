"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import Note from "@/components/log/note";
import {
  allEntriesAtom,
  localEntriesAtom,
  serverEntriesAtom,
} from "@/atoms/guestbook";
import { getGuestbookEntries } from "@/app/(without-root-layout)/visitors/actions";

function GuestbookEntries() {
  const [allEntries] = useAtom(allEntriesAtom);
  const [, setServerEntries] = useAtom(serverEntriesAtom);
  const [, setLocalEntries] = useAtom(localEntriesAtom);

  useEffect(() => {
    const fetchEntries = async () => {
      const entries = await getGuestbookEntries();
      // @ts-ignore
      setServerEntries(entries);

      // if entries contains an approved entry that matches an entry in localEntries, remove it
      setLocalEntries((prev) =>
        prev.filter(
          (localEntry) =>
            !entries.some(
              (entry) =>
                (entry.local_entry_id === localEntry.local_entry_id &&
                  entry.approved) ||
                (entry.signature === localEntry.signature && entry.approved)
            )
        )
      );
    };

    fetchEntries();
  }, [setServerEntries, setLocalEntries]);

  return allEntries.map((entry) => (
    <Note
      key={entry.id}
      name={entry.created_by}
      content={entry.body}
      signature={entry.signature}
      initialX={entry.initialX}
      initialY={entry.initialY}
    />
  ));
}

export default GuestbookEntries;
