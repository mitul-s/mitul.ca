"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import moderateText from "@/lib/openai";

export async function saveGuestbookEntry(state: any, formData: FormData) {
  // console.log(formData);
  const created_by = formData.get("created_by")?.toString() || "";
  const signature = formData.get("signature")?.toString() || "";
  const entry = formData.get("entry")?.toString() || "";
  const body = entry.slice(0, 500);

  const valid = await moderateText(body);

  if (!valid) {
    throw new Error("Entry contains inappropriate");
  }

  // console.log(signature);

  await sql`
    INSERT INTO "guestbook" (created_by, body, last_modified, signature) 
    VALUES (${created_by}, ${body}, ${new Date().toISOString()}, ${signature});
  `;

  revalidatePath("/");
}

export async function approveGuestbookEntry(id: string) {
  await sql`
    UPDATE "guestbook" SET approved = true WHERE id = ${id};
  `;

  revalidatePath("/");
}

export async function declineGuestbookEntry(id: string) {
  await sql`
    DELETE FROM "guestbook" WHERE id = ${id};
  `;

  revalidatePath("/");
}
