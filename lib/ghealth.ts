const CLIENT_ID = process.env.GHEALTH_CLIENT_ID;
const CLIENT_SECRET = process.env.GHEALTH_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GHEALTH_REFRESH_TOKEN;

const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const HR_ENDPOINT =
  "https://health.googleapis.com/v4/users/me/dataTypes/heart-rate/dataPoints";

export interface HeartRateReading {
  bpm: number;
  time: string;
  source: string;
  stale: boolean;
}

interface GhealthDataPoint {
  heartRate?: {
    beatsPerMinute?: string;
    sampleTime?: {
      physicalTime?: string;
    };
  };
  dataSource?: {
    platform?: string;
  };
}

interface GhealthResponse {
  dataPoints?: GhealthDataPoint[];
}

let cached: { ts: number; value: HeartRateReading | null } = {
  ts: 0,
  value: null,
};
const CACHE_MS = 5_000;
const STALE_MS = 5 * 60 * 1000;

const getAccessToken = async (): Promise<string | null> => {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    console.warn("[ghealth] missing GHEALTH_* env vars; skipping fetch");
    return null;
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    console.warn("[ghealth] token refresh failed", response.status);
    return null;
  }
  const data = await response.json();
  return data.access_token as string;
};

export async function getLatestHeartRate(): Promise<HeartRateReading | null> {
  const now = Date.now();
  if (now - cached.ts < CACHE_MS) {
    return cached.value;
  }

  const accessToken = await getAccessToken();
  if (!accessToken) {
    cached = { ts: now, value: null };
    return null;
  }

  const since = new Date(now - 60 * 60 * 1000)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
  const filter = `heart_rate.sample_time.physical_time >= "${since}"`;

  try {
    const response = await fetch(
      `${HR_ENDPOINT}?filter=${encodeURIComponent(filter)}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.warn("[ghealth] heart rate request failed", response.status);
      cached = { ts: now, value: null };
      return null;
    }

    const parsed: GhealthResponse = await response.json();
    const point = parsed.dataPoints?.[0];
    const bpm = point?.heartRate?.beatsPerMinute;
    const time = point?.heartRate?.sampleTime?.physicalTime;
    if (!bpm || !time) {
      console.warn("[ghealth] no heart rate data points in the last hour");
      cached = { ts: now, value: null };
      return null;
    }

    const reading: HeartRateReading = {
      bpm: Number(bpm),
      time,
      source: point?.dataSource?.platform ?? "unknown",
      stale: now - Date.parse(time) > STALE_MS,
    };

    cached = { ts: now, value: reading };
    return reading;
  } catch (error) {
    console.error("[ghealth] heart rate fetch threw", error);
    cached = { ts: now, value: null };
    return null;
  }
}
