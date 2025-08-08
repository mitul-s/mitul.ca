import getListeningMood from "@/lib/ai";
import redis from "@/lib/redis";
import { getSeveralTracksFeatures, getTopTracks } from "@/lib/spotify";
import { pick } from "@/lib/utils";
import ms from "ms";

async function getMood() {
  const mood = await redis.get("mood");
  const timestamp = await redis.get("timestamp");

  const now = Date.now();
  const fiveHoursAgo = now - ms("5h");

  if (mood && timestamp && Number.parseInt(timestamp) > fiveHoursAgo) {
    return { mood: mood, cached: true };
  }

  const { data } = await getTopTracks();
  const trackIDs = data.items.map((track: { id: string }) => track.id);
  const { data: features } = await getSeveralTracksFeatures(trackIDs);
  const trackDescriptions = stripObjProps(features.audio_features);

  const currentMood = await getListeningMood(
    trackDescriptions.map((obj) => JSON.stringify(obj)).join(",")
  );

  // Cache the new mood and timestamp
  await redis.set("mood", currentMood);
  await redis.set("timestamp", now.toString());

  return { mood: currentMood, cached: false };
}

// Spotify API deprecated the endpoint for getting multiple tracks' features
// had to kill this, wack af
export const Mood = async () => {
  const { mood } = await getMood();
  return <span>{mood}</span>;
};

interface TrackFeatures {
  danceability: number;
  energy: number;
  loudness: number;
  speechiness: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  valence: number;
  tempo: number;
}

function stripObjProps(arr: TrackFeatures[]) {
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
