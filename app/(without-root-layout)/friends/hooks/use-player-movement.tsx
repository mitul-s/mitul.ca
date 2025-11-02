import { Sprite, Character } from "../lib/classes/sprite";
import { Boundary } from "../lib/classes/boundary";
import { PLAYER_SPEED } from "../lib/constants";
import { checkForCharacterCollision, rectangularCollision } from "../lib/utils";

interface UsePlayerMovementParams {
  player: Sprite | null;
  boundaries: Boundary[];
  characters: Character[];
  movables: (Sprite | Boundary)[];
  keys: Record<string, boolean>;
}

export const usePlayerMovement = ({
  player,
  boundaries,
  characters,
  movables,
  keys,
}: UsePlayerMovementParams) => {
  if (!player) return;

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

  // Move Up
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
  }
  // Move Left
  else if (keys.a || keys.ArrowLeft) {
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
  }
  // Move Down
  else if (keys.s || keys.ArrowDown) {
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
  }
  // Move Right
  else if (keys.d || keys.ArrowRight) {
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
};

