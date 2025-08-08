import { unstable_cache } from "next/cache";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${BASIC}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN ?? "",
    }),
  });

  const data = await response.json();
  return data.access_token;
};

const fetchSpotifyData = async (endpoint: string) => {
  const accessToken = await getAccessToken();

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 204) {
    return {
      status: response.status,
    };
  }

  try {
    const data = await response.json();
    return { status: response.status, data };
  } catch {
    return { status: response.status };
  }
};

export const getSpotifyData = unstable_cache(
  async () => {
    const nowPlaying = await fetchSpotifyData(NOW_PLAYING_ENDPOINT);
    if (nowPlaying.status === 200 && nowPlaying.data.is_playing) {
      return {
        type: "now-playing",
        data: nowPlaying.data,
      };
    }

    const lastPlayer = await fetchSpotifyData(RECENTLY_PLAYED_ENDPOINT);
    return {
      type: "last-played",
      data: lastPlayer.data,
    };
  },
  ["spotify-data"],
  { revalidate: 30, tags: ["spotify"] }
);

export const getNowPlaying = async () => {
  const result = await getSpotifyData();
  return result;
};

export const getLastPlayed = async () => {
  const result = await getSpotifyData();
  return result.data;
};

// const getNowPlaying = async () => {
//   const accessToken = await getAccessToken();

//   const response = await fetch(NOW_PLAYING_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//     next: {
//       revalidate: 60,
//     },
//   });

//   if (response.status === 204) {
//     return getLastPlayed();
//   }

//   try {
//     const song = await response.json();

//     if (song.is_playing) {
//       return {
//         status: response.status,
//         data: song,
//       };
//     }
//     return getLastPlayed();
//   } catch {
//     return {
//       status: response.status,
//     };
//   }
// };

// const getLastPlayed = async () => {
//   const accessToken = await getAccessToken();

//   const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//     next: {
//       revalidate: 60,
//     },
//   });

//   if (response.status === 204) {
//     return {
//       status: response.status,
//     };
//   }

//   try {
//     const song = await response.json();

//     return {
//       status: response.status,
//       data: song,
//     };
//   } catch {
//     return {
//       status: response.status,
//     };
//   }
// };

export const getTopTracks = async () => {
  const accessToken = await getAccessToken();

  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        revalidate: 60,
      },
    }
  );

  if (response.status === 204) {
    return {
      status: response.status,
    };
  }

  try {
    const song = await response.json();

    return {
      status: response.status,
      data: song,
    };
  } catch {
    return {
      status: response.status,
    };
  }
};

export const getSeveralTracksFeatures = async (trackIDs: string[]) => {
  const accessToken = await getAccessToken();

  const response = await fetch(
    `https://api.spotify.com/v1/audio-features?ids=${trackIDs.join(",")}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        revalidate: 60,
      },
    }
  );

  if (response.status === 204) {
    return {
      status: response.status,
    };
  }

  try {
    const song = await response.json();

    return {
      status: response.status,
      data: song,
    };
  } catch {
    return {
      status: response.status,
    };
  }
};

export default getNowPlaying;
