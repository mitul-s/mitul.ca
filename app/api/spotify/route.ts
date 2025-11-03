import { NextResponse } from "next/server";
import { getSpotifyData } from "@/lib/spotify";


export async function GET() {
  const data = await getSpotifyData();
  return NextResponse.json(data);
}
