export const TILE_SIZE = 48;
export const CANVAS_WIDTH = 1024;
export const CANVAS_HEIGHT = 576;
export const MAP_WIDTH = 70;
export const PLAYER_SPEED = 3;
export const COLLISION_OFFSET = -8;

export const IMAGE_URLS = {
  background:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/background.png",
  foreground:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/foreground.png",
  villager:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/villager.png",
  oldMan:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/oldMan.png",
  playerDown:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerDown.png",
  playerUp:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerUp.png",
  playerLeft:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerLeft.png",
  playerRight:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerRight.png",
};

// Game configuration
export const GAME_CONFIG = {
  mapOffset: { x: -735, y: -650 },
  playerStartPosition: {
    x: CANVAS_WIDTH / 2 - 192 / 4 / 2,
    y: CANVAS_HEIGHT / 2 - 68 / 2,
  },
  collisionSymbol: 1025,
  villagerSymbol: 1026,
  oldManSymbol: 1031,
  mapWidth: 70, // tiles per row
};

export const COLLISION_OFFSETS = {
  up: { x: 0, y: 3 },
  left: { x: 3, y: 0 },
  down: { x: 0, y: -3 },
  right: { x: -3, y: 0 },
} as const;
