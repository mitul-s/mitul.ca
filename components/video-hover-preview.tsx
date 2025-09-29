"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import LinkPrimitive, { link } from "./link-primitive";
import Link from "next/link";
import Image from "next/image";
import * as HoverCard from "@radix-ui/react-hover-card";
import { track } from "@vercel/analytics/react";

const extractYouTubeId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

const VideoHoverPreview = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  const videoId = extractYouTubeId(href);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;

  return (
    <HoverCard.Root openDelay={75} closeDelay={150}>
      <HoverCard.Trigger asChild>
        <LinkPrimitive
          className={cn(link({ variant: "default", popover: false }))}
          external
          href={href}
          onClick={(e) => {
            e.stopPropagation();
            track("video_hover_preview_clicked");
          }}
        >
          {children}
        </LinkPrimitive>
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content
          className="rounded-[2px] border border-accent overflow-hidden w-30 z-50 transform-gpu origin-center transition-all 
          data-[side=bottom]:animate-blur-and-slide-up data-[side=top]:animate-blur-and-slide-down data-[state=open]:transition-all hover:cursor-pointer hover:-rotate-3"
          sideOffset={8}
          align="center"
          side="top"
        >
          <Link
            href={href}
            className="block relative aspect-video rounded-[2px]"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              track("video_hover_preview_clicked");
            }}
          >
            {thumbnailUrl ? (
              <Image
                src={thumbnailUrl}
                alt={"Thumbnail for Casey Neistat's Doing What I Can't"}
                fill
                className={cn("w-full h-full object-cover")}
                quality={40}
              />
            ) : (
              <div className="w-full h-full bg-gray-3 animate-pulse flex items-center justify-center">
                <div className="text-gray-9 text-sm">Loading thumbnail...</div>
              </div>
            )}
          </Link>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default VideoHoverPreview;
