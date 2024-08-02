import { NextResponse } from "next/server";
import redis from "@/lib/redis";
import ms from "ms";
import getListeningMood from "@/lib/ai";
import { getSeveralTracksFeatures, getTopTracks } from "@/lib/spotify";
import { pick } from "@/lib/utils";

export async function GET() {
  const mood = await redis.get("mood");
  const timestamp = await redis.get("timestamp");

  const now = Date.now();
  const fiveHoursAgo = now - ms("5h");

  if (mood && timestamp && parseInt(timestamp) > fiveHoursAgo) {
    // Return cached mood if it's less than 5 hours old
    return NextResponse.json({ mood: mood, cached: true });
  }

  const { data } = await getTopTracks();

  const trackIDs = data.items.map((track) => track.id);
  const { data: features } = await getSeveralTracksFeatures(trackIDs);
  const trackDescriptions = stripObjProps(features.audio_features);
  const currentMood = await getListeningMood(
    trackDescriptions.map((obj) => JSON.stringify(obj)).join(",")
  );

  // Cache the new mood and timestamp
  await redis.set("mood", currentMood);
  await redis.set("timestamp", now.toString());

  return NextResponse.json({ mood: currentMood, cached: false });
}

function stripObjProps(arr) {
  return arr.map((item) =>
    pick(item, [
      "danceability",
      "energy",
      "loudness",
      "speechiness",
      "acousticness",
      "instrumentalness",
      "liveness",
      "valence",
      "tempo",
    ])
  );
}
