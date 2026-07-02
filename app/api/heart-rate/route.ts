import { NextResponse } from "next/server";
import { getLatestHeartRate } from "@/lib/ghealth";

export async function GET() {
  const reading = await getLatestHeartRate();
  return NextResponse.json(reading, {
    headers: {
      "Cache-Control": "public, s-maxage=10, stale-while-revalidate=30",
    },
  });
}
