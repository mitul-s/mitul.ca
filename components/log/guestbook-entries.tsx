"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import Note from "@/components/log/note";
import { allEntriesAtom, serverEntriesAtom } from "@/atoms/guestbook";
import { getGuestbookEntries } from "@/app/(without-root-layout)/visitors/actions";

function GuestbookEntries() {
  //   const entries = await getGuestbookEntries();
  const [allEntries] = useAtom(allEntriesAtom);
  const [, setServerEntries] = useAtom(serverEntriesAtom);
  //   const [, setLocalEntries] = useAtom(localEntriesAtom);
  //   setServerEntries(entries);

  useEffect(() => {
    const fetchEntries = async () => {
      const entries = await getGuestbookEntries();
      // @ts-ignore
      setServerEntries(entries);
    };

    fetchEntries();
  }, [setServerEntries]);

  return allEntries.map((entry) => (
    <Note
      key={entry.id}
      name={entry.created_by}
      content={entry.body}
      signature={entry.signature}
    />
  ));
}

// async function GuestbookEntries() {
//   const { rows } =
//     await sql`SELECT * from "guestbook" WHERE approved = true ORDER BY last_modified DESC;`;

//   return rows.map((entry) => (
//     <Note
//       key={entry.id}
//       name={entry.created_by}
//       content={entry.body}
//       signature={entry.signature}
//     />
//   ));
// }

export default GuestbookEntries;
