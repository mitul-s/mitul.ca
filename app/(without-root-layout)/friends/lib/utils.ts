import type { Position } from "./types";

export function rectangularCollision({
  rectangle1,
  rectangle2,
}: {
  rectangle1: { position: Position; width: number; height: number };
  rectangle2: { position: Position; width: number; height: number };
}): boolean {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  );
}

export function checkForCharacterCollision({
  characters,
  player,
  characterOffset = { x: 0, y: 0 },
}: {
  characters: { position: Position; width: number; height: number }[];
  player: {
    position: Position;
    width: number;
    height: number;
    interactionAsset?: {
      position: Position;
      width: number;
      height: number;
    } | null;
  };
  characterOffset?: { x: number; y: number };
}) {
  player.interactionAsset = null;
  // monitor for character collision
  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];

    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: {
          ...character,
          position: {
            x: character.position.x + characterOffset.x,
            y: character.position.y + characterOffset.y,
          },
        },
      })
    ) {
      player.interactionAsset = character;
      break;
    }
  }
}
