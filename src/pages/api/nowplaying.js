/* eslint-disable no-undef */
export default async (_, res) => {
  const username = "mitul-s";
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${process.env.NEXT_PUBLIC_LASTFM_KEY}&format=json`;
  const response = await fetch(url);

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const title = song.recenttracks.track[0].name;
  const caption = song.recenttracks.track[0].artist["#text"];
  const link = song.recenttracks.track[0].url;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({
    title,
    caption,
    link,
  });
};
