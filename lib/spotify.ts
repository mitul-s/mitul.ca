const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getSpotifyAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token ?? "",
    }).toString(),
  });

  return response.json();
};

const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

export const getRecentTracks = async () => {
  const { access_token } = await getSpotifyAccessToken();

  const response = fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response) throw new Error("Something went wrong");

  const songs = await response.then((res) => res.json());
  console.log(songs);

  const mostRecentSong = songs.items[0];
  const coverArt = mostRecentSong.track.album.images[0].url;
  const previewUrl = mostRecentSong.track.preview_url;
  const title = mostRecentSong.track.name;
  const artist = mostRecentSong.track.artists
    .map(
      (_artist: { name: string; external_urls: { spotify: string } }) =>
        _artist.name
    )
    .shift();
  const songUrl = mostRecentSong.track.external_urls.spotify;

  const track = {
    previewUrl,
    title,
    artist,
    songUrl,
    coverArt,
  };

  return track;
};
