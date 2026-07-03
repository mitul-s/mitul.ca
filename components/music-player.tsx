import getLastPlayed from "@/lib/spotify";
import Image from "next/image";
import { getShelves } from "@/lib/literal";
import { getLatestHeartRate } from "@/lib/ghealth";
import NowPlayingClient from "./now-playing-client";
import HeartRate from "./heart-rate";
import Link from "next/link";
import { cacheLife } from "next/cache";

const MusicPlayer = async () => {
  "use cache";
  cacheLife("minutes");
  const [{ data: song }, { reading }, heartRate] = await Promise.all([
    getLastPlayed(),
    getShelves(),
    getLatestHeartRate(),
  ]);

  return (
    <div className="grid grid-cols-2 min-md:grid-cols-3 gap-x-4 gap-y-4 my-4">
      <NowPlayingClient initial={song} />
      <Link
        href={`https://literal.club/ms/book/${reading.slug}`}
        target="_blank"
        className="flex flex-row items-center gap-x-1.5 w-fit overflow-hidden group"
      >
        <div className="rounded-md border border-gray-6 h-16 w-16 aspect-square relative">
          <Image
            src={reading.cover}
            fill
            alt="Album cover"
            className="object-cover"
            quality={40}
          />
        </div>
        <div className="flex flex-col gap-y-1 justify-center leading-none">
          <span className="font-medium text-accent truncate max-w-20 min-md:max-w-32 group-hover:underline">
            {reading.title}
          </span>
          <span className="text-sm">{reading.author}</span>
        </div>
      </Link>
      <HeartRate initial={heartRate} />
    </div>
  );
};

export default MusicPlayer;
