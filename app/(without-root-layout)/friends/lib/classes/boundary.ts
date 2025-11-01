import type { Position } from "../types";
import { TILE_SIZE } from "../constants";

export class Boundary {
  position: Position;
  width: number;
  height: number;

  constructor({ position }: { position: Position }) {
    this.position = position;
    this.width = TILE_SIZE;
    this.height = TILE_SIZE;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(255, 0, 0, 0)";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
