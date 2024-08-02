import { getSeveralTracksFeatures, getTopTracks } from "@/lib/spotify";
import { generateText } from "ai";
import { pick } from "@/lib/utils";
import { openai } from "@ai-sdk/openai";

export const Mood = async () => {
  const { data } = await getTopTracks();

  const trackIDs = data.items.map((track) => track.id);
  const { data: features } = await getSeveralTracksFeatures(trackIDs);
  const trackDescriptions = stripObjProps(features.audio_features);

  const { text } = await generateText({
    model: openai("gpt-3.5-turbo-instruct"),
    system:
      "You are a mood definer based off someone's music taste. You will get an array of objects that includes information on each track, based on all the information, you will share a short, funny, phrase to describe someone's mood",
    prompt: trackDescriptions.map((obj) => JSON.stringify(obj)).join(","),
  });

  console.log(text);

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

  return <div>mood</div>;
};
