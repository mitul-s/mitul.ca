"use server";

import { z } from "zod";
import moderateText from "@/lib/openai";
import { saveGuestbookEntry } from "@/app/actions";
import { sql } from "@vercel/postgres";

const formSchema = z.object({
  created_by: z
    .string()
    .min(1, "pls fill out all fields")
    .max(50, "ur name is too long"),
  entry: z
    .string()
    .min(1, "pls fill out all fields")
    .max(200, "love ur long entry, but can u make it shorter?"),
  signature: z.string().optional(),
});

export async function validateAndSaveEntry(
  formData: FormData,
  validateOnly = false
) {
  let data: {
    created_by: string;
    entry: string;
    signature?: string;
    hasCreatedEntryBefore?: string;
    local_created_by_id?: string;
  };
  if (validateOnly) {
    data = {
      created_by: formData.get("created_by") as string,
      entry: formData.get("entry") as string,
    };
  } else {
    data = {
      created_by: formData.get("created_by") as string,
      entry: formData.get("entry") as string,
      signature: formData.get("signature") as string,
      hasCreatedEntryBefore: formData.get("hasCreatedEntryBefore") as string,
      local_created_by_id: formData.get("local_created_by_id") as string,
    };
  }

  try {
    formSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return {
      success: false,
      errors: { form: ["An unexpected error occurred"] },
    };
  }

  const isModerated = await moderateText(data.entry);
  if (!isModerated) {
    return { success: false, errors: { entry: ["let's keep it clean"] } };
  }

  if (validateOnly) {
    return { success: true };
  }

  await saveGuestbookEntry("", formData);

  return { success: true };
}

export const getGuestbookEntries = async () => {
  const { rows } = await sql`
    SELECT * from "guestbook" WHERE approved = true ORDER BY last_modified DESC;
  `;

  return rows;
};
