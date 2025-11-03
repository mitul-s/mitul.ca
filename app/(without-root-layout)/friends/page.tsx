"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Character, Sprite } from "../friends/lib/classes/sprite";
import { useGameAssets } from "./hooks/use-game-assets";
import { useGameLoop } from "./hooks/use-game-load";
import { useKeyboard } from "./hooks/use-keyboard";
import { usePlayerMovement } from "./hooks/use-player-movement";
import { Boundary } from "./lib/classes/boundary";
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  IMAGE_URLS,
  TILE_SIZE,
} from "./lib/constants";
import { charactersMapData } from "./lib/data/characters";
import { collisions } from "./lib/data/collisions";

const Page = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const keys = useKeyboard();

  const {
    assets,
    loading: imagesLoading,
    error: imageError,
    allImagesLoaded,
  } = useGameAssets(IMAGE_URLS);
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
            }),
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
              image: assets.villager!,
              frames: {
                max: 4,
                hold: 60,
              },
              scale: 3,
              animate: true,
              dialogue: ["...", "Hey mister, have you seen my Doggochu?"],
            }),
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
              image: assets.oldMan!,
              frames: {
                max: 4,
                hold: 60,
              },
              scale: 3,
              dialogue: ["My bones hurt."],
            }),
          );
        }

        if (symbol !== 0) {
          boundaries.push(
            new Boundary({
              position: {
                x: j * TILE_SIZE + offset.x,
                y: i * TILE_SIZE + offset.y,
              },
            }),
          );
        }
      });
    });

    const player = new Sprite({
      position: {
        x: CANVAS_WIDTH / 2 - 192 / 4 / 2,
        y: CANVAS_HEIGHT / 2 - 68 / 2,
      },
      image: assets.playerDown!,
      frames: {
        max: 4,
        hold: 10,
      },
      sprites: {
        up: assets.playerUp!,
        left: assets.playerLeft!,
        right: assets.playerRight!,
        down: assets.playerDown!,
      },
    });

    const background = new Sprite({
      position: {
        x: offset.x,
        y: offset.y,
      },
      image: assets.background!,
    });

    const foreground = new Sprite({
      position: {
        x: offset.x,
        y: offset.y,
      },
      image: assets.foreground!,
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
    assets.background,
    assets.foreground,
    assets.villager,
    assets.oldMan,
    assets.playerDown,
    assets.playerUp,
    assets.playerLeft,
    assets.playerRight,
  ]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas || !isInitialized) return;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

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
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw background
    background.draw(ctx);

    // Draw characters
    for (const character of characters) {
      character.draw(ctx);
    }

    // Draw player
    player.draw(ctx);

    // Draw foreground
    foreground.draw(ctx);

    // Handle player movement
    usePlayerMovement({
      player,
      boundaries,
      characters,
      movables,
      keys,
    });
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
