import { NextResponse } from "next/server";
import { getLatestHeartRate } from "@/lib/ghealth";

export async function GET() {
  const reading = await getLatestHeartRate();
  return NextResponse.json(reading, {
    headers: { "Cache-Control": "no-store" },
  });
}
