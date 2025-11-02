import { Sprite, Character } from "../lib/classes/sprite";
import { Boundary } from "../lib/classes/boundary";
import { PLAYER_SPEED, COLLISION_OFFSETS } from "../lib/constants";
import { checkForCharacterCollision, rectangularCollision } from "../lib/utils";

type Direction = "up" | "left" | "down" | "right";

interface MovementConfig {
  direction: Direction;
  keys: boolean;
  sprite: HTMLImageElement;
  characterOffset: { x: number; y: number };
  boundaryOffset: { x: number; y: number };
  movableOffset: { x: number; y: number };
}

interface UsePlayerMovementParams {
  player: Sprite | null;
  boundaries: Boundary[];
  characters: Character[];
  movables: (Sprite | Boundary)[];
  keys: Record<string, boolean>;
}

/**
 * Check if the player can move in the given direction without hitting boundaries
 */
const canMove = (
  player: Sprite,
  boundaries: Boundary[],
  boundaryOffset: { x: number; y: number }
): boolean => {
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
            x: boundary.position.x + boundaryOffset.x,
            y: boundary.position.y + boundaryOffset.y,
          },
        },
      })
    ) {
      return false;
    }
  }
  return true;
};

export const usePlayerMovement = ({
  player,
  boundaries,
  characters,
  movables,
  keys,
}: UsePlayerMovementParams) => {
  if (!player) return;

  player.animate = false;

  const movementConfigs: MovementConfig[] = [
    {
      direction: "up",
      keys: keys.w || keys.ArrowUp,
      sprite: player.sprites!.up,
      characterOffset: COLLISION_OFFSETS.up,
      boundaryOffset: { x: 0, y: PLAYER_SPEED },
      movableOffset: { x: 0, y: PLAYER_SPEED },
    },
    {
      direction: "left",
      keys: keys.a || keys.ArrowLeft,
      sprite: player.sprites!.left,
      characterOffset: COLLISION_OFFSETS.left,
      boundaryOffset: { x: PLAYER_SPEED, y: 0 },
      movableOffset: { x: PLAYER_SPEED, y: 0 },
    },
    {
      direction: "down",
      keys: keys.s || keys.ArrowDown,
      sprite: player.sprites!.down,
      characterOffset: COLLISION_OFFSETS.down,
      boundaryOffset: { x: 0, y: -PLAYER_SPEED },
      movableOffset: { x: 0, y: -PLAYER_SPEED },
    },
    {
      direction: "right",
      keys: keys.d || keys.ArrowRight,
      sprite: player.sprites!.right,
      characterOffset: COLLISION_OFFSETS.right,
      boundaryOffset: { x: -PLAYER_SPEED, y: 0 },
      movableOffset: { x: -PLAYER_SPEED, y: 0 },
    },
  ];

  for (const config of movementConfigs) {
    if (!config.keys) continue;

    player.animate = true;
    player.image = config.sprite;

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: config.characterOffset,
    });

    if (canMove(player, boundaries, config.boundaryOffset)) {
      movables.forEach((movable) => {
        movable.position.x += config.movableOffset.x;
        movable.position.y += config.movableOffset.y;
      });
    }

    break;
  }
};
