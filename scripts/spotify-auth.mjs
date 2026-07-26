/**
 * Mints a new SPOTIFY_REFRESH_TOKEN.
 *
 * Spotify refresh tokens expire 6 months after authorization and refreshing
 * does not extend that window, so this needs re-running roughly twice a year
 * (and any time the token is revoked by a password change or secret rotation).
 *
 *   node --env-file=.env.local scripts/spotify-auth.mjs
 *
 * Requires http://127.0.0.1:8888/callback in the app's Redirect URI allowlist:
 * https://developer.spotify.com/dashboard -> your app -> Settings -> Edit
 *
 * Note `localhost` is rejected by Spotify as of the Nov 2025 migration; it has
 * to be the literal loopback IP.
 */
import { createServer } from "node:http";
import { randomBytes } from "node:crypto";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const PORT = 8888;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;

// Only what lib/spotify.ts actually calls. user-top-read covers getTopTracks,
// which is currently unused but still exported.
const SCOPES = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
].join(" ");

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error(
    "Missing SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET.\n" +
      "Run with: node --env-file=.env.local scripts/spotify-auth.mjs"
  );
  process.exit(1);
}

const state = randomBytes(16).toString("hex");

const authorizeUrl =
  "https://accounts.spotify.com/authorize?" +
  new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    state,
    scope: SCOPES,
    // Force the consent screen so it's obvious the flow actually ran.
    show_dialog: "true",
  });

const exchange = async (code) => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      // Validation only, but must match the authorize call byte for byte.
      redirect_uri: REDIRECT_URI,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      `${response.status} ${data.error ?? ""} ${data.error_description ?? ""}`
    );
  }
  return data;
};

const verify = async (refreshToken) => {
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });
  const refreshed = await tokenRes.json();
  if (!tokenRes.ok) {
    throw new Error(`refresh check failed: ${refreshed.error_description}`);
  }
  console.log("  refresh          -> ok");

  // The exact call music-player.tsx depends on.
  const played = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    { headers: { Authorization: `Bearer ${refreshed.access_token}` } }
  );
  if (!played.ok) {
    throw new Error(`recently-played check failed: ${played.status}`);
  }
  const { items } = await played.json();
  const track = items?.[0]?.track;
  console.log(
    "  recently-played  -> ok" +
      (track ? ` (${track.name} — ${track.artists[0].name})` : " (no history)")
  );

  if (refreshed.refresh_token && refreshed.refresh_token !== refreshToken) {
    console.log("\n  note: Spotify rotated the refresh token, use this one:");
    console.log("  " + refreshed.refresh_token);
  }
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  if (url.pathname !== "/callback") {
    res.writeHead(404).end();
    return;
  }

  const done = (msg) => {
    res.writeHead(200, { "Content-Type": "text/plain" }).end(msg);
    server.close();
  };

  const error = url.searchParams.get("error");
  if (error) {
    console.error(`\nAuthorization denied: ${error}`);
    done("Denied. Check your terminal.");
    process.exitCode = 1;
    return;
  }

  if (url.searchParams.get("state") !== state) {
    console.error("\nState mismatch, aborting.");
    done("State mismatch. Check your terminal.");
    process.exitCode = 1;
    return;
  }

  try {
    const tokens = await exchange(url.searchParams.get("code"));
    console.log("\nGranted scopes:", tokens.scope);

    // Prove the refresh token round-trips before it goes anywhere near prod.
    await verify(tokens.refresh_token);

    console.log("\nSPOTIFY_REFRESH_TOKEN=" + tokens.refresh_token);
    console.log(
      "\nPut that in .env.local, then:\n" +
        "  vercel env rm SPOTIFY_REFRESH_TOKEN production\n" +
        "  vercel env add SPOTIFY_REFRESH_TOKEN production\n" +
        "…and redeploy so the new value is picked up.\n"
    );
    done("Done. Copy the refresh token from your terminal.");
  } catch (err) {
    console.error(`\nToken exchange failed: ${err.message}`);
    done("Exchange failed. Check your terminal.");
    process.exitCode = 1;
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("Open this and approve:\n\n" + authorizeUrl + "\n");
  console.log(`Waiting for the redirect on ${REDIRECT_URI} …`);
});
