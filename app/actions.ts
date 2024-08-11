"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function saveGuestbookEntry(state: any, formData: FormData) {
  console.log(formData);
  const created_by = formData.get("created_by")?.toString() || "";
  const signature = formData.get("signature")?.toString() || "";
  const entry = formData.get("entry")?.toString() || "";
  const body = entry.slice(0, 500);
  console.log(signature);

  await sql`
    INSERT INTO "guestbook" (created_by, body, last_modified, signature) 
    VALUES (${created_by}, ${body}, ${new Date().toISOString()}, ${signature});
  `;

  revalidatePath("/");
}
