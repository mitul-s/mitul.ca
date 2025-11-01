"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Character, Sprite } from "../friends/lib/classes/sprite";
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  PLAYER_SPEED,
  TILE_SIZE,
} from "./lib/constants";
import { collisions } from "./lib/data/collisions";
import { charactersMapData } from "./lib/data/characters";
import { useGameAssets } from "./hooks/use-game-assets";
import { useGameLoop } from "./hooks/use-game-load";
import { useKeyboard } from "./hooks/use-keyboard";
import { checkForCharacterCollision, rectangularCollision } from "./lib/utils";
import { Boundary } from "./lib/classes/boundary";

const GAME_ASSETS_URLS = {
  mapImage:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/background.png",
  foregroundImage:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/foreground.png",
  villagerImage:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/villager.png",
  oldManImage:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/oldMan.png",
  playerDownImage:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerDown.png",
  playerUpImage:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerUp.png",
  playerLeftImage:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerLeft.png",
  playerRightImage:
    "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerRight.png",
};

const Page = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const keys = useKeyboard();

  const { assets, loading: imagesLoading, error: imageError, allImagesLoaded } =
    useGameAssets(GAME_ASSETS_URLS);
  const gameObjectsRef = useRef<{
    background: Sprite | null;
    foreground: Sprite | null;
    player: Sprite | null;
    movables: (Sprite | Boundary)[];
    renderables: (Sprite | Boundary)[];
    boundaries: Boundary[];
    characters: Character[];
  }>({
    background: null,
    foreground: null,
    player: null,
    movables: [],
    renderables: [],
    boundaries: [],
    characters: [],
  });

  const movablesRef = useRef<Sprite[]>([]);

  useEffect(() => {
    if (!allImagesLoaded) {
      console.log("[v0] Waiting for images to load...");
      return;
    }

    const collisionsMap = [];
    for (let i = 0; i < collisions.length; i += 70) {
      collisionsMap.push(collisions.slice(i, 70 + i));
    }

    const charactersMap: number[][] = [];
    for (let i = 0; i < charactersMapData.length; i += 70) {
      charactersMap.push(charactersMapData.slice(i, 70 + i));
    }

    const boundaries: Boundary[] = [];
    const offset = {
      x: -735,
      y: -650,
    };

    collisionsMap.forEach((row, i) => {
      row.forEach((symbol, j) => {
        if (symbol === 1025)
          boundaries.push(
            new Boundary({
              position: {
                x: j * TILE_SIZE + offset.x,
                y: i * TILE_SIZE + offset.y,
              },
            })
          );
      });
    });

    const characters: Character[] = [];

    charactersMap.forEach((row, i) => {
      row.forEach((symbol, j) => {
        // 1026 === villager
        if (symbol === 1026) {
          characters.push(
            new Character({
              position: {
                x: j * TILE_SIZE + offset.x,
                y: i * TILE_SIZE + offset.y,
              },
              image: assets.villagerImage!,
              frames: {
                max: 4,
                hold: 60,
              },
              scale: 3,
              animate: true,
              dialogue: ["...", "Hey mister, have you seen my Doggochu?"],
            })
          );
        }
        // 1031 === oldMan
        else if (symbol === 1031) {
          characters.push(
            new Character({
              position: {
                x: j * TILE_SIZE + offset.x,
                y: i * TILE_SIZE + offset.y,
              },
              image: assets.oldManImage!,
              frames: {
                max: 4,
                hold: 60,
              },
              scale: 3,
              dialogue: ["My bones hurt."],
            })
          );
        }

        if (symbol !== 0) {
          boundaries.push(
            new Boundary({
              position: {
                x: j * TILE_SIZE + offset.x,
                y: i * TILE_SIZE + offset.y,
              },
            })
          );
        }
      });
    });

    const player = new Sprite({
      position: {
        x: CANVAS_WIDTH / 2 - 192 / 4 / 2,
        y: CANVAS_HEIGHT / 2 - 68 / 2,
      },
      image: assets.playerDownImage!,
      frames: {
        max: 4,
        hold: 10,
      },
      sprites: {
        up: assets.playerUpImage!,
        left: assets.playerLeftImage!,
        right: assets.playerRightImage!,
        down: assets.playerDownImage!,
      },
    });

    const background = new Sprite({
      position: {
        x: offset.x,
        y: offset.y,
      },
      image: assets.mapImage!,
    });

    const foreground = new Sprite({
      position: {
        x: offset.x,
        y: offset.y,
      },
      image: assets.foregroundImage!,
    });

    const movables = [
      background,
      ...boundaries,
      foreground,
      // ...battleZones,
      ...characters,
    ];
    const renderables = [
      background,
      ...boundaries,
      // ...battleZones,
      ...characters,
      player,
      foreground,
    ];

    gameObjectsRef.current = {
      background,
      foreground,
      player,
      renderables,
      movables,
      boundaries,
      characters,
    };

    movablesRef.current = [
      background,
      // ...boundaries,
      // foreground,
      ...characters,
    ];

    setIsInitialized(true);
  }, [
    allImagesLoaded,
    assets.mapImage,
    assets.foregroundImage,
    assets.villagerImage,
    assets.oldManImage,
    assets.playerDownImage,
    assets.playerUpImage,
    assets.playerLeftImage,
    assets.playerRightImage,
  ]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas || !isInitialized) return;

    const c = canvas.getContext("2d");
    if (!c) return;

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    const { background, foreground, player, movables, boundaries, characters } =
      gameObjectsRef.current;
    if (
      !background ||
      !foreground ||
      !player ||
      !movables ||
      !boundaries ||
      !characters
    )
      return;

    // Clear canvas
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw background
    background.draw(c);

    // Draw characters
    characters.forEach((character) => character.draw(c));

    // Draw player
    player.draw(c);

    // Draw foreground
    foreground.draw(c);

    let moving = true;
    player.animate = false;

    const anyKeyPressed =
      keys.w ||
      keys.a ||
      keys.s ||
      keys.d ||
      keys.ArrowUp ||
      keys.ArrowLeft ||
      keys.ArrowDown ||
      keys.ArrowRight;
    if (anyKeyPressed) {
      console.log("[v0] Keys pressed:", keys);
    }

    if (keys.w || keys.ArrowUp) {
      player.animate = true;
      player.image = player.sprites!.up;

      checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: 0, y: 3 },
      });

      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
          rectangularCollision({
            rectangle1: {
              position: player.position,
              width: player.image.width / player.frames.max,
              height: player.image.height,
            },
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x,
                y: boundary.position.y + PLAYER_SPEED,
              },
            },
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving) {
        movables.forEach((movable) => {
          movable.position.y += PLAYER_SPEED;
        });
      }
    } else if (keys.a || keys.ArrowLeft) {
      player.animate = true;
      player.image = player.sprites!.left;

      checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: 3, y: 0 },
      });

      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
          rectangularCollision({
            rectangle1: {
              position: player.position,
              width: player.image.width / player.frames.max,
              height: player.image.height,
            },
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x + PLAYER_SPEED,
                y: boundary.position.y,
              },
            },
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving) {
        movables.forEach((movable) => {
          movable.position.x += PLAYER_SPEED;
        });
      }
    } else if (keys.s || keys.ArrowDown) {
      player.animate = true;
      player.image = player.sprites!.down;

      checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: 0, y: -3 },
      });

      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
          rectangularCollision({
            rectangle1: {
              position: player.position,
              width: player.image.width / player.frames.max,
              height: player.image.height,
            },
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x,
                y: boundary.position.y - PLAYER_SPEED,
              },
            },
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving) {
        movables.forEach((movable) => {
          movable.position.y -= PLAYER_SPEED;
        });
      }
    } else if (keys.d || keys.ArrowRight) {
      player.animate = true;
      player.image = player.sprites!.right;

      checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: -3, y: 0 },
      });

      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
          rectangularCollision({
            rectangle1: {
              position: player.position,
              width: player.image.width / player.frames.max,
              height: player.image.height,
            },
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x - PLAYER_SPEED,
                y: boundary.position.y,
              },
            },
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving) {
        movables.forEach((movable) => {
          movable.position.x -= PLAYER_SPEED;
        });
      }
    }

    if (!anyKeyPressed) {
      player.animate = false;
    }
  }, [keys, isInitialized]);

  useGameLoop(animate, isInitialized);

  if (imagesLoading) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
      >
        <div className="text-white text-xl">Loading game assets...</div>
      </div>
    );
  }

  if (imageError) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
      >
        <div className="text-white text-xl">
          Error loading game assets: {imageError.message}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-[10px] shadow-lg overflow-hidden">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Page;
