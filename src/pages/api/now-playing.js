import { getRecentTracks } from "@/lib/spotify";

export default async (_, res) => {
    const response = await getRecentTracks();

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const songs = await response.json();

    if (songs.item === null) {
      return res.status(200).json({ isPlaying: false });
    }

    
    const mostRecentSong = songs.items[0];
    const isPlaying = mostRecentSong.is_playing;
    const title = mostRecentSong.track.name;
    const artist = mostRecentSong.track.artists.map((_artist) => _artist.name).join(", ");
    const songUrl = mostRecentSong.track.external_urls.spotify;


    res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=30"
    );

  return res.status(200).json({ isPlaying, title, artist, songUrl });
};
