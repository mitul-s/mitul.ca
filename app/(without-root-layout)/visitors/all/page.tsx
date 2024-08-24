import Note from "@/components/log/note";
import { cn } from "@/lib/utils";
import { sql } from "@vercel/postgres";
import styles from "./visitors-all.module.css";
import Link from "next/link";

export default async function Page() {
  const entries = await getGuestbookEntries();

  if (!entries.length) {
    return <p>No entries found.</p>;
  }

  return (
    <div className="text-gray-10">
      <Link href="/visitors">Return to the visitor's log</Link>
      <Link href="/">Return home</Link>
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
