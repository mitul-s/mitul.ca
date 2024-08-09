"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function saveGuestbookEntry(formData: FormData) {
  const created_by = formData.get("created_by")?.toString() || "";
  const entry = formData.get("entry")?.toString() || "";
  const body = entry.slice(0, 500);

  await sql`INSERT INTO "guestbook" (created_by, body, last_modified) VALUES (${created_by}, ${body}, ${new Date().toISOString()});`;

  revalidatePath("/");
}
