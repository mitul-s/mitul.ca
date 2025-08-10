import { type NextRequest, NextResponse } from "next/server";
import { fal } from "@fal-ai/client";

// Configure credentials once on the server. If missing, we return a fallback below.
fal.config({ credentials: process.env.FAL_KEY as string });

// Pick a text-to-video model available on Fal.
// Note: You can swap MODEL_ID to another Fal text-to-video endpoint you’ve enabled.
const MODEL_ID = "fal-ai/kling-video/v1.6/standard/text-to-video"; // Updated model ID

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt || typeof prompt !== "string") {
      console.log("PROMPT IS REQUIRED");
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // If Fal isn't configured, return your default video as a graceful fallback.
    if (!process.env.FAL_KEY) {
      return NextResponse.json({
        url: "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/main/Flowers%20Blowing%20Video.mp4",
      });
    }

    // Submit the job to the queue and get a request ID
    const result = await fal.subscribe(MODEL_ID, {
      input: {
        prompt,
        // Optional Veo3 parameters
        // duration: 5, // 5-8 seconds supported
        // aspect_ratio: "16:9", // or "9:16" for portrait
        // resolution: "720p", // default resolution
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          update.logs.map((log) => log.message).forEach(console.log);
        }
      },

      // Optional webhook URL for async results
      // webhookUrl: "https://your-app.com/api/webhook/fal",
    });

    console.log("RESULT", result);
    console.log(result.data);
    console.log(result.requestId);

    if (!result) {
      throw new Error("Generation timed out after 5 minutes");
    }

    const url = result.data.video.url;

    if (!url) {
      // If the model changes its payload shape, fail gracefully.
      console.log("NO URL FOUND");
      return NextResponse.json(
        { error: "Generation succeeded but no video URL returned from model." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url });
  } catch (err: any) {
    // Graceful fallback to your default video on error, so UX remains functional
    console.log("GENERATION FAILED", err.message);
    return NextResponse.json(
      {
        url: "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/main/Flowers%20Blowing%20Video.mp4",
        error: err?.message || "Generation failed; returning fallback video.",
      },
      { status: 200 }
    );
  }
}
