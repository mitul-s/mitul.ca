"use client";

import useSWR from "swr";
import Image from "next/image";
import Filter from "bad-words";

const fetcher = (url: string) =>
  fetch(url, { cache: "no-store" }).then((r) => r.json());

// Shown when Spotify is unreachable, rate limiting, or the refresh token has
// expired. Same shape as a live track so the widget looks identical either way.
// To swap it, grab any track's cover from https://i.scdn.co/image/<hash> — the
// 00001e02 prefix is the 300px variant, which is plenty at 64x64.
const FALLBACK_TRACK = {
  title: "Feel No Ways",
  artist: "Drake",
  songUrl: "https://open.spotify.com/track/3cjF2OFRmip8spwZYQRKxP",
  coverArt:
    "https://i.scdn.co/image/ab67616d00001e029416ed64daf84936d89e671c",
};

export default function NowPlayingClient({ initial }: { initial: any }) {
  const { data } = useSWR("/api/spotify", fetcher, {
    refreshInterval: 60000,
    fallbackData: initial,
    revalidateOnFocus: true,
  });

  const song = data?.data || initial;
  const recent = song?.is_playing ? song.item : song?.items?.[0]?.track;

  // Gate on the cover URL specifically, since that is what <Image> needs and a
  // partial payload can satisfy the rest.
  const filter = new Filter();
  const track = recent?.album?.images?.[0]?.url
    ? {
        title: filter.clean(recent.name ?? ""),
        artist: (recent.artists ?? [])
          .map((_artist: { name: string }) => _artist.name)
          .shift(),
        songUrl: recent.external_urls?.spotify,
        coverArt: recent.album.images[0].url,
      }
    : FALLBACK_TRACK;

  return (
    <div className="flex flex-row items-center gap-x-1.5 w-fit overflow-hidden">
      <div className="rounded-md border border-gray-6 h-16 w-16 aspect-square relative">
        <Image
          src={track.coverArt}
          fill
          alt="Album cover"
          className="object-cover"
          quality={40}
        />
      </div>
      <div className="flex flex-col gap-y-1 justify-center leading-none">
        <span className="font-medium text-accent">{track.title}</span>
        <span className="text-sm">{track.artist}</span>
      </div>
    </div>
  );
}
