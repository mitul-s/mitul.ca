"use server";

import { z } from "zod";
import moderateText from "@/lib/openai";
import { saveGuestbookEntry } from "@/app/actions";
import { sql } from "@vercel/postgres";

const GuestbookEntrySchema = z.object({
  created_by: z
    .string()
    .min(1, "pls fill out all fields")
    .max(50, "ur name is too long"),
  entry: z
    .string()
    .min(1, "pls fill out all fields")
    .max(200, "love ur long entry, but can u make it shorter?"),

  signature: z.string().optional(),
  local_entry_id: z.string().optional(),
  hasCreatedEntryBefore: z.string().optional(),
  local_created_by_id: z.string().optional(),
});

export async function validateAndSaveEntry(
  formData: FormData,
  validateOnly = false
) {
  try {
    const data = GuestbookEntrySchema.parse(Object.fromEntries(formData));

    const isModerated = await moderateText(data.entry);
    if (!isModerated) {
      return { success: false, errors: { entry: ["let's keep it clean"] } };
    }

    if (validateOnly) {
      return { success: true };
    }

    await saveGuestbookEntry("", formData);

    try {
      const response = await fetch("https://mitul.ca/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ entry: Object.fromEntries(formData) }),
      });

      if (!response.ok) {
        console.error("Failed to send email:", await response.text());
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return {
      success: false,
      errors: { form: ["An unexpected error occurred"] },
    };
  }
}

export const getGuestbookEntries = async () => {
  const { rows } = await sql`
    SELECT * FROM "guestbook"
    TABLESAMPLE BERNOULLI (100)
    WHERE approved = true
    ORDER BY RANDOM()
    LIMIT 25;
  `;

  return rows;
};
