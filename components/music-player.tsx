import getLastPlayed from "@/lib/spotify";
import Image from "next/image";
import { getShelves } from "@/lib/literal";
import NowPlayingClient from "./now-playing-client";

const MusicPlayer = async () => {
  const { data: song } = await getLastPlayed();
  const { reading } = await getShelves();

  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 my-4">
        <NowPlayingClient initial={song} />
        <div className="flex flex-row items-center gap-x-1.5 w-fit overflow-hidden">
          <div className="rounded-md border border-gray-6 h-16 w-16 aspect-square relative">
            <Image
              src={reading.cover}
              fill
              alt="Album cover"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-1 justify-center leading-none">
            <span className="font-medium text-accent truncate max-w-32">
              {reading.title}
            </span>
            <span className="text-sm">{reading.author}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
