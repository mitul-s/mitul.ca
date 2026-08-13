"use client";

import useSWR from "swr";
import { Heart } from "@phosphor-icons/react";
import * as HoverCard from "@radix-ui/react-hover-card";
import NumberFlow from "@number-flow/react";

interface HeartRateReading {
  bpm: number;
  time: string;
  source: string;
  stale: boolean;
}

const fetcher = (url: string) =>
  fetch(url, { cache: "no-store" }).then((r) => r.json());

export default function HeartRate({
  initial,
}: {
  initial?: HeartRateReading | null;
}) {
  const { data } = useSWR<HeartRateReading | null>(
    "/api/heart-rate",
    fetcher,
    {
      refreshInterval: 10_000,
      revalidateOnFocus: true,
      fallbackData: initial,
    }
  );

  if (!data?.bpm) {
    return (
      <HoverCard.Root openDelay={75} closeDelay={150}>
        <HoverCard.Trigger asChild>
          <div className="flex flex-row items-center gap-x-1.5 w-fit">
            <div className="rounded-md border border-gray-6 h-16 w-16 aspect-square flex items-center justify-center bg-accent/5">
              <Heart
                aria-hidden={true}
                size={24}
                weight="fill"
                className="text-accent"
              />
            </div>
            <div className="flex flex-col gap-y-1 justify-center leading-none">
              <NumberFlow
                value={0}
                className="font-medium text-accent tabular-nums"
                format={{ useGrouping: false }}
              />
              <span className="text-sm">bpm</span>
            </div>
          </div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content
            className="rounded-md bg-gray-12 px-2.5 py-1.5 text-sm text-gray-1 shadow-md z-50 animate-tooltip-in"
            sideOffset={6}
            align="center"
            side="top"
          >
            not dead, just forgot to wear my fitbit
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    );
  }

  const beatDuration = `${(60 / data.bpm).toFixed(3)}s`;

  return (
    <div className="flex flex-row items-center gap-x-1.5 w-fit">
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
        <NumberFlow
          value={data.bpm}
          className="font-medium text-accent tabular-nums"
          format={{ useGrouping: false }}
        />
        <span className="text-sm">bpm</span>
      </div>
    </div>
  );
}
