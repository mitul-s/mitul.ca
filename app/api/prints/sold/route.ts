import { connection } from "next/server";
import { readSold } from "@/lib/print-sales";

/** Polled by open /prints pages so a sale shows up without a reload. */
export async function GET() {
  await connection();
  try {
    return Response.json(
      { sold: await readSold() },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("print_sales poll failed", error);
    return Response.json({ sold: null }, { status: 503 });
  }
}
