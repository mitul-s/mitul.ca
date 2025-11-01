"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Character, Sprite } from "../friends/lib/classes/sprite";
// import { Position } from "./lib/types";
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  PLAYER_SPEED,
  TILE_SIZE,
} from "./lib/constants";
import { collisions } from "./lib/data/collisions";
import { charactersMapData } from "./lib/data/characters";
import { useImageLoader } from "./hooks/use-image-loader";
import { useGameLoop } from "./hooks/use-game-load";
import { useKeyboard } from "./hooks/use-keyboard";
import { checkForCharacterCollision, rectangularCollision } from "./lib/utils";
import { Boundary } from "./lib/classes/boundary";

const BACKGROUND_URL =
  "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/background.png";
const FOREGROUND_URL =
  "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/foreground.png";

// CHARACTER IMAGES
const VILLAGER_URL =
  "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/villager.png";
const OLD_MAN_URL =
  "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/oldMan.png";

// PLAYER IMAGES
const PLAYER_DOWN_URL =
  "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerDown.png";
const PLAYER_UP_URL =
  "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerUp.png";
const PLAYER_LEFT_URL =
  "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerLeft.png";
const PLAYER_RIGHT_URL =
  "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/friends/playerRight.png";

const Page = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const keys = useKeyboard();

  const {
    image: mapImage,
    loading: mapLoading,
    error: mapError,
  } = useImageLoader(BACKGROUND_URL);

  const {
    image: foregroundImage,
    loading: foregroundLoading,
    error: foregroundError,
  } = useImageLoader(FOREGROUND_URL);

  // CHARACTER IMAGES
  const {
    image: villagerImage,
    loading: villagerLoading,
    error: villagerError,
  } = useImageLoader(VILLAGER_URL);
  const {
    image: oldManImage,
    loading: oldManLoading,
    error: oldManError,
  } = useImageLoader(OLD_MAN_URL);

  // PLAYER IMAGES
  const {
    image: playerDownImage,
    loading: playerDownLoading,
    error: playerDownError,
  } = useImageLoader(PLAYER_DOWN_URL);

  const {
    image: playerUpImage,
    loading: playerUpLoading,
    error: playerUpError,
  } = useImageLoader(PLAYER_UP_URL);

  const {
    image: playerLeftImage,
    loading: playerLeftLoading,
    error: playerLeftError,
  } = useImageLoader(PLAYER_LEFT_URL);

  const {
    image: playerRightImage,
    loading: playerRightLoading,
    error: playerRightError,
  } = useImageLoader(PLAYER_RIGHT_URL);

  const allImagesLoaded =
    !mapLoading &&
    !foregroundLoading &&
    !playerDownLoading &&
    !playerUpLoading &&
    !playerLeftLoading &&
    !playerRightLoading &&
    !villagerLoading &&
    !oldManLoading;

  const hasImageError =
    mapError ||
    foregroundError ||
    playerDownError ||
    playerUpError ||
    playerLeftError ||
    playerRightError ||
    villagerError ||
    oldManError;
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
    if (
      !allImagesLoaded ||
      !mapImage ||
      !foregroundImage ||
      !playerDownImage ||
      !playerUpImage ||
      !playerLeftImage ||
      !playerRightImage ||
      !villagerImage ||
      !oldManImage
    ) {
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
              image: villagerImage,
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
              image: oldManImage,
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
      image: playerDownImage,
      frames: {
        max: 4,
        hold: 10,
      },
      sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage,
      },
    });

    const background = new Sprite({
      position: {
        x: offset.x,
        y: offset.y,
      },
      image: mapImage,
    });

    const foreground = new Sprite({
      position: {
        x: offset.x,
        y: offset.y,
      },
      image: foregroundImage,
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
  }, [allImagesLoaded, mapImage]);

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

  // function animate() {
  //   const animationId = window.requestAnimationFrame(animate);
  //   renderables.forEach((renderable) => {
  //     renderable.draw();
  //   });

  //   let moving = true;
  //   player.animate = false;

  //   if (battle.initiated) return;

  //   // activate a battle
  //   if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
  //     for (let i = 0; i < battleZones.length; i++) {
  //       const battleZone = battleZones[i];
  //       const overlappingArea =
  //         (Math.min(
  //           player.position.x + player.width,
  //           battleZone.position.x + battleZone.width,
  //         ) -
  //           Math.max(player.position.x, battleZone.position.x)) *
  //         (Math.min(
  //           player.position.y + player.height,
  //           battleZone.position.y + battleZone.height,
  //         ) -
  //           Math.max(player.position.y, battleZone.position.y));
  //       if (
  //         rectangularCollision({
  //           rectangle1: player,
  //           rectangle2: battleZone,
  //         }) &&
  //         overlappingArea > (player.width * player.height) / 2 &&
  //         Math.random() < 0.01
  //       ) {
  //         // deactivate current animation loop
  //         window.cancelAnimationFrame(animationId);

  //         audio.Map.stop();
  //         audio.initBattle.play();
  //         audio.battle.play();

  //         battle.initiated = true;
  //         gsap.to("#overlappingDiv", {
  //           opacity: 1,
  //           repeat: 3,
  //           yoyo: true,
  //           duration: 0.4,
  //           onComplete() {
  //             gsap.to("#overlappingDiv", {
  //               opacity: 1,
  //               duration: 0.4,
  //               onComplete() {
  //                 // activate a new animation loop
  //                 initBattle();
  //                 animateBattle();
  //                 gsap.to("#overlappingDiv", {
  //                   opacity: 0,
  //                   duration: 0.4,
  //                 });
  //               },
  //             });
  //           },
  //         });
  //         break;
  //       }
  //     }
  //   }

  //   if (keys.w.pressed && lastKey === "w") {
  //     player.animate = true;
  //     player.image = player.sprites.up;

  //     checkForCharacterCollision({
  //       characters,
  //       player,
  //       characterOffset: { x: 0, y: 3 },
  //     });

  //     for (let i = 0; i < boundaries.length; i++) {
  //       const boundary = boundaries[i];
  //       if (
  //         rectangularCollision({
  //           rectangle1: player,
  //           rectangle2: {
  //             ...boundary,
  //             position: {
  //               x: boundary.position.x,
  //               y: boundary.position.y + 3,
  //             },
  //           },
  //         })
  //       ) {
  //         moving = false;
  //         break;
  //       }
  //     }

  //     if (moving)
  //       movables.forEach((movable) => {
  //         movable.position.y += 3;
  //       });
  //   } else if (keys.a.pressed && lastKey === "a") {
  //     player.animate = true;
  //     player.image = player.sprites.left;

  //     checkForCharacterCollision({
  //       characters,
  //       player,
  //       characterOffset: { x: 3, y: 0 },
  //     });

  //     for (let i = 0; i < boundaries.length; i++) {
  //       const boundary = boundaries[i];
  //       if (
  //         rectangularCollision({
  //           rectangle1: player,
  //           rectangle2: {
  //             ...boundary,
  //             position: {
  //               x: boundary.position.x + 3,
  //               y: boundary.position.y,
  //             },
  //           },
  //         })
  //       ) {
  //         moving = false;
  //         break;
  //       }
  //     }

  //     if (moving)
  //       movables.forEach((movable) => {
  //         movable.position.x += 3;
  //       });
  //   } else if (keys.s.pressed && lastKey === "s") {
  //     player.animate = true;
  //     player.image = player.sprites.down;

  //     checkForCharacterCollision({
  //       characters,
  //       player,
  //       characterOffset: { x: 0, y: -3 },
  //     });

  //     for (let i = 0; i < boundaries.length; i++) {
  //       const boundary = boundaries[i];
  //       if (
  //         rectangularCollision({
  //           rectangle1: player,
  //           rectangle2: {
  //             ...boundary,
  //             position: {
  //               x: boundary.position.x,
  //               y: boundary.position.y - 3,
  //             },
  //           },
  //         })
  //       ) {
  //         moving = false;
  //         break;
  //       }
  //     }

  //     if (moving)
  //       movables.forEach((movable) => {
  //         movable.position.y -= 3;
  //       });
  //   } else if (keys.d.pressed && lastKey === "d") {
  //     player.animate = true;
  //     player.image = player.sprites.right;

  //     checkForCharacterCollision({
  //       characters,
  //       player,
  //       characterOffset: { x: -3, y: 0 },
  //     });

  //     for (let i = 0; i < boundaries.length; i++) {
  //       const boundary = boundaries[i];
  //       if (
  //         rectangularCollision({
  //           rectangle1: player,
  //           rectangle2: {
  //             ...boundary,
  //             position: {
  //               x: boundary.position.x - 3,
  //               y: boundary.position.y,
  //             },
  //           },
  //         })
  //       ) {
  //         moving = false;
  //         break;
  //       }
  //     }

  //     if (moving)
  //       movables.forEach((movable) => {
  //         movable.position.x -= 3;
  //       });
  //   }
  // }

  if (!allImagesLoaded) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
      >
        <div className="text-white text-xl">Loading game assets...</div>
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
