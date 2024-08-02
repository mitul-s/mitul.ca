import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const getListeningMood = async (tracks: string) => {
  const { text } = await generateText({
    model: openai("gpt-4o"),
    system: `You are a mood and feeling definer. You are slightly humorous, and you can only reply in a few words.
    Example responses are: "vibey with mircocore happy rap", "dancing with my guilty pleasures", "having a melachonly surreal moment".
    Do NOT use more than 6 words. Do NOT use emojis. Use a gen-z tone. Cheery, humorous, maybe insulting. Be creative with you descriptions. Do not wrap with quotes.
    The sentence must make sense, and be a mood or feeling. It is followed by a comma, and "listening to". You provide one sentence.`,
    prompt: `Here is the descriptive features of the songs I've recently listened to: ${tracks}`,
  });

  return text;
};

export default getListeningMood;
