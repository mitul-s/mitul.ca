import Note from "@/components/visitors/note";
import { cn } from "@/lib/utils";
import { sql } from "@vercel/postgres";
import styles from "./visitors-all.module.css";
import LinkPrimitive from "@/components/link-primitive";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="relative">
      <div className="fixed top-8 left-8 text-gray-2 z-10 isolate flex gap-x-4">
        <LinkPrimitive
          href="/visitors"
          variant="route"
          className="rounded-full text-gray-12 px-3 shadow-md font-medium"
        >
          return to the visitor's log
        </LinkPrimitive>
        <LinkPrimitive
          href="/"
          variant="route"
          className="rounded-full text-gray-12 px-3 shadow-md font-medium"
        >
          return home
        </LinkPrimitive>
      </div>
      <Suspense fallback={<p>Loading entries...</p>}>
        <EntriesList />
      </Suspense>
    </div>
  );
}

async function EntriesList() {
  const entries = await getGuestbookEntries();

  if (!entries.length) {
    return <p>No entries found.</p>;
  }

  return (
    <div
      className={cn(
        "flex flex-wrap gap-x-8 gap-y-8 [&>*]:!relative [&>*]:!rotate-0 py-12",
        styles.container
      )}
    >
      {entries.map((entry) => (
        <Note
          key={entry.id}
          name={entry.created_by}
          content={entry.body}
          signature={entry.signature}
        />
      ))}
    </div>
  );
}

async function getGuestbookEntries() {
  try {
    const { rows } = await sql`
      SELECT * FROM guestbook
      WHERE approved = true
        ORDER BY last_modified DESC    
    `;
    return rows;
  } catch (error) {
    console.error("Failed to fetch guestbook entries:", error);
    return [];
  }
}
