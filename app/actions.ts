"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { unstable_cache } from "next/cache";

export async function saveGuestbookEntry(state: unknown, formData: FormData) {
  const local_entry_id = formData.get("local_entry_id")?.toString();
  const created_by = formData.get("created_by")?.toString() || "";
  const signature = formData.get("signature")?.toString() || "";
  const hasCreatedEntryBefore = formData
    .get("hasCreatedEntryBefore")
    ?.toString();
  const local_created_by_id = formData.get("local_created_by_id")?.toString();
  const entry = formData.get("entry")?.toString() || "";
  const body = entry.slice(0, 500);

  await sql`
    INSERT INTO "guestbook" (created_by, body, last_modified, signature, hasCreatedEntryBefore, local_created_by_id, local_entry_id) 
    VALUES (${created_by}, ${body}, ${new Date().toISOString()}, ${signature}, ${hasCreatedEntryBefore}, ${local_created_by_id}, ${local_entry_id});
  `;

  revalidatePath("/visitors");
}

export async function approveGuestbookEntry(id: string) {
  await sql`
    UPDATE "guestbook" SET approved = true WHERE id = ${id};
  `;

  revalidatePath("/visitors");
}

export async function declineGuestbookEntry(id: string) {
  await sql`
    DELETE FROM "guestbook" WHERE id = ${id};
  `;

  revalidatePath("/visitors");
}

// GARDEN

const formSchema = z.object({
  content: z.string().min(1, "Content is required"),
});

export async function createJournalEntry(
  journalName: string,
  formData: FormData
) {
  const validatedFields = formSchema.safeParse({
    content: formData.get("content"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { content } = validatedFields.data;

  try {
    // First, get the journal ID
    const { rows: journalRows } = await sql`
      SELECT id FROM garden_journals WHERE title = ${journalName}
    `;

    if (journalRows.length === 0) {
      return {
        message: "Journal not found.",
      };
    }

    const journalId = journalRows[0].id;

    // Now insert the entry
    await sql`
      INSERT INTO garden_entries (journal_id, content, created_at)
      VALUES (
        ${journalId}, 
        ${content}, 
        CURRENT_TIMESTAMP AT TIME ZONE 'UTC'
      )
      RETURNING id, content, created_at
    `;
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "Database Error: Failed to create entry.",
    };
  }

  revalidatePath("/garden");
  // redirect(`/journals/${encodeURIComponent(journalName)}`);
}

export interface JournalEntry {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export async function getJournalEntries(
  journalTitle: string
): Promise<JournalEntry[]> {
  const getEntries = unstable_cache(
    async () => {
      try {
        const { rows } = await sql<JournalEntry>`
          SELECT e.id, e.content, e.created_at, e.updated_at
          FROM garden_entries e
          JOIN garden_journals j ON e.journal_id = j.id
          WHERE j.title = ${journalTitle}
          ORDER BY e.created_at DESC
          LIMIT 50
        `;
        return rows;
      } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch journal entries.");
      }
    },
    [`journal-entries-${journalTitle}`],
    {
      revalidate: 60, // Cache for 60 seconds
      tags: [`journal-${journalTitle}`],
    }
  );

  return getEntries();
}

export async function getJournalEntry(id: string): Promise<JournalEntry> {
  const { rows } = await sql<JournalEntry>`
    SELECT e.id, e.content, e.created_at, e.updated_at
    FROM garden_entries e
    WHERE e.id = ${id}
  `;

  if (rows.length === 0) {
    throw new Error("Entry not found.");
  }

  return rows[0];
}
