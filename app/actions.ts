"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import moderateText from "@/lib/openai";

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

  const valid = await moderateText(body);

  if (!valid) {
    throw new Error("Entry contains inappropriate");
  }

  await sql`
    INSERT INTO "guestbook" (created_by, body, last_modified, signature, hasCreatedEntryBefore, local_created_by_id) 
    VALUES (${created_by}, ${body}, ${new Date().toISOString()}, ${signature}, ${hasCreatedEntryBefore}, ${local_created_by_id});
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
