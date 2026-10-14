import { sql } from "@vercel/postgres";
import { cacheLife, cacheTag } from "next/cache";

// Which /prints pieces have sold. One row per sold print id; deleting the row
// un-sells it.

export const SALES_TAG = "print-sales";

let table: Promise<unknown> | undefined;

/** Creates the table on first use, so there's no migration to run. */
function ensureTable() {
  table ??= sql`
    CREATE TABLE IF NOT EXISTS print_sales (
      id text PRIMARY KEY,
      sold_at timestamptz NOT NULL DEFAULT now()
    )
  `.catch((error) => {
    table = undefined;
    throw error;
  });
  return table;
}

/** Straight from the database: admin page, actions, and the live poll. */
export async function readSold(): Promise<string[]> {
  await ensureTable();
  const { rows } = await sql<{ id: string }>`SELECT id FROM print_sales ORDER BY sold_at`;
  return rows.map((r) => r.id);
}

/** Cached copy for the public page. Toggling a sale calls updateTag(SALES_TAG). */
export async function cachedSold(): Promise<string[]> {
  "use cache";
  cacheTag(SALES_TAG);
  cacheLife("minutes");
  try {
    return await readSold();
  } catch (error) {
    // Show everything as available rather than taking the page down.
    console.error("print_sales read failed", error);
    return [];
  }
}

export async function writeSold(id: string, sold: boolean) {
  await ensureTable();
  if (sold) {
    await sql`INSERT INTO print_sales (id) VALUES (${id}) ON CONFLICT (id) DO NOTHING`;
  } else {
    await sql`DELETE FROM print_sales WHERE id = ${id}`;
  }
}
