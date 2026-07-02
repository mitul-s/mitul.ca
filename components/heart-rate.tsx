"use client";

import useSWR from "swr";
import { Heart } from "@phosphor-icons/react";

interface HeartRateReading {
  bpm: number;
  time: string;
  source: string;
  stale: boolean;
}

const fetcher = (url: string) =>
  fetch(url, { cache: "no-store" }).then((r) => r.json());

export default function HeartRate() {
  const { data } = useSWR<HeartRateReading | null>(
    "/api/heart-rate",
    fetcher,
    { refreshInterval: 10_000, revalidateOnFocus: true }
  );

  if (!data?.bpm) {
    return (
      <div className="flex flex-row items-center gap-x-1.5 w-fit">
        <div className="rounded-md border border-gray-6 h-16 w-16 aspect-square flex items-center justify-center text-gray-9">
          <Heart aria-hidden={true} size={20} weight="regular" />
        </div>
        <div className="flex flex-col gap-y-1 justify-center leading-none">
          <span className="font-medium text-accent">—</span>
          <span className="text-sm">no hr data</span>
        </div>
      </div>
    );
  }

  const beatDuration = `${(60 / data.bpm).toFixed(3)}s`;

  return (
    <div
      className="flex flex-row items-center gap-x-1.5 w-fit"
      title={`${data.bpm} bpm · ${data.source}${data.stale ? " · stale" : ""}`}
    >
      <div className="rounded-md border border-gray-6 h-16 w-16 aspect-square flex items-center justify-center bg-accent/5">
        <Heart
          aria-hidden={true}
          size={24}
          weight="fill"
          className="text-accent animate-heartbeat"
          style={{ animationDuration: beatDuration }}
        />
      </div>
      <div className="flex flex-col gap-y-1 justify-center leading-none">
        <span className="font-medium text-accent tabular-nums">
          {data.bpm} bpm
        </span>
        <span className="text-sm">
          {data.stale ? "last" : "live"}
        </span>
      </div>
    </div>
  );
}
