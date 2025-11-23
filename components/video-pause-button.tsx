"use client";

import { Pause, Play } from "@phosphor-icons/react";
import { useState } from "react";

export default function VideoPauseButton() {
  const [isVideoPaused, setIsVideoPaused] = useState(false);

  const handleToggleVideo = () => {
    setIsVideoPaused(!isVideoPaused);
    const video = document.querySelector(
      'video[src*="shader-vid.mp4"]'
    ) as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <button
      onClick={handleToggleVideo}
      className="flex gap-x-1.5 items-center bg-accent hover:bg-accent/80 transition text-gray-1 py-0.5 pl-1.5 pr-1.5 rounded-[2px] cursor-pointer font-medium"
      aria-label="Toggle background video playback"
    >
      {isVideoPaused ? (
        <Play weight="fill" size={12} aria-hidden={true} />
      ) : (
        <Pause weight="fill" size={12} aria-hidden={true} />
      )}
    </button>
  );
}
