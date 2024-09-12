"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
export async function createEntry(journal: string, formData: FormData) {
  const entry = formData.get("entry");

  if (typeof entry !== "string" || entry.length === 0) {
    throw new Error("Invalid entry");
  }

  await sql`
    INSERT INTO "garden" (journal, created_by, body, last_modified) 
    VALUES (${journal}, 'mitul', ${entry}, ${new Date().toISOString()});
  `;

  revalidatePath("/garden");
  redirect("/garden");
}

export async function getEntries(journal: string) {
  try {
    const { rows } = await sql`
      SELECT * FROM "garden"
      WHERE journal = ${journal}
      ORDER BY last_modified DESC
      LIMIT 10
    `;
    return rows;
  } catch (error) {
    console.error("Failed to fetch entries:", error);
    throw new Error("Failed to fetch entries");
  }
}
