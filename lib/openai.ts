"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function moderateText(text: string) {
  const moderation = await openai.moderations.create({
    model: "omni-moderation-latest",
    input: text,
  });

  const safe = moderation.results[0].flagged === false;
  if (!safe) {
    console.log("Moderation failed");
  }

  return safe;
}

export default moderateText;
