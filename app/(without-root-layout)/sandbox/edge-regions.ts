// Edge region directions - defines which direction the trail should travel
// toward the edge of the map from each city
export type EdgeRegionConfig = {
  direction: [number, number];
  distance: number;
};

export const EDGE_REGIONS: Record<string, EdgeRegionConfig> = {
  // Asia Pacific
  hnd1: { direction: [1, 0.5], distance: 100 }, // East-Northeast
  kix1: { direction: [1, 0], distance: 100 }, // East
  sin1: { direction: [0.5, -1], distance: 100 }, // Southeast
  hkg1: { direction: [1, 0], distance: 100 }, // East
  icn1: { direction: [1, 0.5], distance: 100 }, // East-Northeast
  bom1: { direction: [-1, 0], distance: 100 }, // West
  syd1: { direction: [1, -0.5], distance: 100 }, // East-Southeast

  // Americas
  iad1: { direction: [1, 0], distance: 100 }, // East
  sfo1: { direction: [-1, 0], distance: 100 }, // West
  cle1: { direction: [1, 0.5], distance: 100 }, // East-Northeast
  pdx1: { direction: [-1, 0.5], distance: 100 }, // West-Northwest
  gru1: { direction: [1, -0.5], distance: 100 }, // East-Southeast

  // Europe
  lhr1: { direction: [-1, 0], distance: 100 }, // West
  cdg1: { direction: [-0.5, 0], distance: 100 }, // West
  fra1: { direction: [1, 0], distance: 100 }, // East
  arn1: { direction: [0, 1], distance: 100 }, // North
  dub1: { direction: [-1, 0], distance: 100 }, // West

  // Africa
  cpt1: { direction: [0, -1], distance: 100 }, // South
};

