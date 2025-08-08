// // import { openai } from "@ai-sdk/openai";
// import { anthropic } from "@ai-sdk/anthropic";
// import { generateText } from "ai";

// const getListeningMood = async (tracks: string) => {
//   const { text } = await generateText({
//     model: anthropic("claude-3-5-sonnet-20240620"),
//     system: `Your task is to take the provided list of 20 song descriptions and generate a short sentence to represent a mood. Use psychology principles and common associations to determine the most appropriate feeling for the given songs. Put higher priority on loudness. Do not use the word depressed, lean slightly towards positive mood. Do not use emojis and use a Gen-Z tone. Similar to Spotify's daylist. Do not use more than 6 words. You are funny, slightly insulting, and creative. You are describing the person's current mood. The sentence ends with ", listening to".`,
//     prompt: tracks,
//     temperature: 1,
//   });

//   return text;
// };

// export default getListeningMood;
