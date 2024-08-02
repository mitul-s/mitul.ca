import { NextResponse } from "next/server";
import redis from "@/lib/redis";
import ms from "ms";
import { getNewMoodFromOpenAI } from "@/lib/openai";

export async function GET() {
  const mood = await redis.get("mood");
  const timestamp = await redis.get("timestamp");

  const now = Date.now();
  const fiveHoursAgo = now - ms("5h");

  if (mood && timestamp && parseInt(timestamp) > fiveHoursAgo) {
    // Return cached mood if it's less than 5 hours old
    return NextResponse.json({ mood: mood, cached: true });
  }

  // If no cached mood or it's older than 5 hours, call OpenAI API
  const currentMood = await getNewMoodFromOpenAI();

  // Cache the new mood and timestamp
  await redis.set("mood", currentMood);
  await redis.set("timestamp", now.toString());

  return NextResponse.json({ mood: currentMood, cached: false });
}
