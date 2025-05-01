import Filter from "bad-words";
import getLastPlayed from "@/lib/spotify";
import Image from "next/image";
import { getShelves } from "@/lib/literal";

const MusicPlayer = async () => {
  const { data: song } = await getLastPlayed();
  const { reading } = await getShelves();
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

  console.log(track);
  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 my-4">
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

// const Currently = async () => {
//   noStore();
//   const { reading } = await getShelves();
//   const { data: song } = await getLastPlayed();
//   const filter = new Filter();

//   const recent = song.is_playing ? song.item : song.items[0].track;
//   const track = {
//     title: filter.clean(recent.name),
//     artist: recent.artists
//       .map((_artist: { name: string }) => _artist.name)
//       .shift(),
//     songUrl: recent.external_urls.spotify,
//     coverArt: recent.album.images[0].url,
//     previewUrl: recent.preview_url,
//   };

//   return (
//     <>
//       <p className="first-letter:uppercase">
//         Listening to{" "}
//         <MusicCard {...track}>
//           <LinkPrimitive href={track.songUrl} external popover>
//             {track.title}
//           </LinkPrimitive>
//         </MusicCard>{" "}
//         by {track.artist} and slowly reading{" "}
//         <ReadingCard {...reading}>
//           <LinkPrimitive
//             href={`https://literal.club/ms/book/${reading.slug}`}
//             external
//             popover
//           >
//             {reading.title}
//           </LinkPrimitive>
//         </ReadingCard>{" "}
//         by {reading.author}.
//       </p>
//     </>
//   );
// };
