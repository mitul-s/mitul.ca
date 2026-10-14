"use server";

import { updateTag } from "next/cache";
import { isAdmin } from "@/lib/admin-auth";
import { SALES_TAG, readSold, writeSold } from "@/lib/print-sales";
import { isCatalogId } from "../catalog";

export type SoldResult = { ok: true; sold: string[] } | { ok: false; error: string };

// Server actions are public endpoints, so this checks the cookie itself
// rather than trusting that the caller came from the admin page.
export async function setSold(id: string, sold: boolean): Promise<SoldResult> {
  if (!(await isAdmin())) return { ok: false, error: "Signed out. Reload and sign in again." };
  if (typeof id !== "string" || !isCatalogId(id)) return { ok: false, error: "Unknown print." };
  try {
    await writeSold(id, sold === true);
    updateTag(SALES_TAG);
    return { ok: true, sold: await readSold() };
  } catch (error) {
    console.error("print_sales write failed", error);
    return { ok: false, error: "Couldn't save. Try again." };
  }
}
