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
  console.log(props);
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
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        {children}
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content className="w-40 h-fit bg-[#0f0f0f] shadow-sm text-gray-12 rounded-[4px] pt-1 pb-1.5 px-1 border border-gray-12">
          <div className="aspect-square border rounded-[3px] overflow-hidden relative">
            <Image
              src={coverArt ?? ""}
              fill
              className="object-cover object-center "
              alt="Song cover"
            />
          </div>
          <div className="text-gray-1 mt-1">
            <span className="font-medium leading-none block">{title}</span>
            <span className="text-sm text-gray-10">{artist}</span>
          </div>
          <div className="flex gap-x-0.5 items-center">
            <button
              className="bg-[#1DB954] text-gray-1 py-1 flex items-center justify-center rounded-sm w-1/4 self-stretch"
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

          {/* <audio controls>
            <source src={previewUrl} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio> */}
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  );
};

export default HoverCard;
