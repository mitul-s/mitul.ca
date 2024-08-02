import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const getListeningMood = async (tracks) => {
  const { text } = await generateText({
    model: openai("gpt-4"),
    system:
      "You are a mood definer based off someone's music taste. You will get an array of objects that includes information on each track, based on all the information, you will share a short, funny, phrase to describe someone's mood",
    prompt: tracks,
  });

  return text;
};

export default getListeningMood;
