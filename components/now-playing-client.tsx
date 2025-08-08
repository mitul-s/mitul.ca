"use client";

import useSWR from "swr";
import Image from "next/image";
import Filter from "bad-words";

const fetcher = (url: string) =>
  fetch(url, { cache: "no-store" }).then((r) => r.json());

export default function NowPlayingClient({ initial }: { initial: any }) {
  const { data } = useSWR("/api/spotify", fetcher, {
    refreshInterval: 60000,
    fallbackData: initial,
    revalidateOnFocus: true,
  });

  if (!data) return null;
  const song = data?.data || initial;

  const filter = new Filter();

  const recent = song.is_playing ? song.item : song.items[0].track;
  const track = {
    title: filter.clean(recent.name),
    artist: recent.artists
      .map((_artist: { name: string }) => _artist.name)
      .shift(),
    songUrl: recent.external_urls.spotify,
    coverArt: recent.album.images[0].url,
    previewUrl: recent.preview_url,
  };

  return (
    <div className="flex flex-row items-center gap-x-1.5 w-fit overflow-hidden">
      <div className="rounded-md border border-gray-6 h-16 w-16 aspect-square relative">
        <Image
          src={track.coverArt}
          fill
          alt="Album cover"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 justify-center leading-none">
        <span className="font-medium text-accent">{track.title}</span>
        <span className="text-sm">{track.artist}</span>
      </div>
    </div>
  );
}
