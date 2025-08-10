"use client";

import { useState } from "react";

const GenerateVideoForm = ({
  setVideoUrl,
}: {
  setVideoUrl: (url: string) => void;
}) => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [genError, setGenError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);
    setGenError(null);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) {
        throw new Error("Failed to generate video");
      }
      const data = await response.json();
      console.log("VIDEO URL", data);
      setVideoUrl(data.url);
    } catch (error) {
      setGenError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsGenerating(false);
    }
  };

  console.log("IS GENERATING", isGenerating);
  console.log("GEN ERROR", genError);
  console.log("PROMPT", prompt);

  return (
    <form
      onSubmit={handleGenerate}
      className="absolute left-4 top-4 pointer-events-auto bg-black/50 backdrop-blur rounded-md p-3 flex items-center gap-2"
    >
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe a video to generate..."
        className="w-64 md:w-96 px-3 py-2 rounded bg-white/90 text-black placeholder:text-black/60 focus:outline-none"
        aria-label="Video prompt"
      />
      <button
        type="submit"
        disabled={isGenerating || !prompt.trim()}
        className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isGenerating ? "Generating..." : "Generate"}
      </button>
      {genError ? (
        <span className="text-red-300 text-sm">{genError}</span>
      ) : null}
    </form>
  );
};

export default GenerateVideoForm;
