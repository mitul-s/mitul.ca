"use client";
import { Pause, Play, SpotifyLogo } from "@phosphor-icons/react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import React from "react";

const HoverCard = ({
  children,
  song,
  ...props
}: {
  children: React.ReactNode;
  song?: string;
}) => {
  const {
    title,
    artist,
    coverArt,
    previewUrl,
    songUrl,
  }: {
    title?: string;
    artist?: string;
    coverArt?: string;
    previewUrl?: string;
    songUrl?: string;
  } = props;
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null);
  React.useEffect(() => {
    const audio = new Audio(previewUrl);
    setAudio(audio);
  }, [previewUrl]);

  const handlePlay = () => {
    if (isPlaying) {
      audio?.pause();
      setIsPlaying(false);
    } else {
      audio?.play();
      setIsPlaying(true);
    }
  };

  return (
    <HoverCardPrimitive.Root openDelay={400}>
      <HoverCardPrimitive.Trigger asChild>
        {children}
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content className="w-40 h-fit bg-[#0f0f0f] shadow-sm text-gray-12 rounded-[4px] pt-1 pb-1.5 px-1 border border-gray-12 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
          <div className="aspect-square border rounded-[3px] overflow-hidden relative">
            <Image
              src={coverArt ?? ""}
              fill
              className="object-cover object-center"
              alt="Song cover"
            />
          </div>
          <div className="text-gray-1 mt-2 mb-1">
            <span className="font-medium leading-none block truncate">
              {title}
            </span>
            <span className="text-sm text-gray-10">by {artist}</span>
          </div>
          <div className="flex gap-x-0.5 items-center">
            <button
              className="bg-[#1DB954] hover:bg-[#1DB954]/80 transition text-gray-1 py-1 flex items-center justify-center rounded-sm w-1/4 self-stretch"
              onClick={handlePlay}
            >
              {isPlaying ? (
                <Pause className="shrink-0" size={12} weight="fill" />
              ) : (
                <Play className="shrink-0" size={12} weight="fill" />
              )}
            </button>

            <a
              href={songUrl}
              target="_blank"
              className="flex items-center gap-x-1 text-sm bg-gray-12 justify-center w-full text-gray-5 py-1 rounded-sm font-medium hover:bg-gray-11 transition-colors duration-100 whitespace-nowrap"
            >
              <SpotifyLogo className="shrink-0" />
              Listen on Spotify
            </a>
          </div>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  );
};
export default HoverCard;
