import type { Position, Frames } from "../types";

export class Sprite {
  position: Position;
  image: HTMLImageElement;
  frames: Frames;
  sprites?: Record<string, HTMLImageElement>;
  animate: boolean;
  rotation: number;
  scale: number;
  opacity: number;

  constructor(config: {
    position: Position;
    image: HTMLImageElement;
    frames?: Frames;
    sprites?: Record<string, HTMLImageElement>;
    animate?: boolean;
    rotation?: number;
    scale?: number;
  }) {
    this.position = config.position;
    this.image = config.image;
    this.frames = config.frames ?? { max: 1, hold: 10 };
    this.frames.val = 0;
    this.frames.elapsed = 0;
    this.sprites = config.sprites;
    this.animate = config.animate ?? false;
    this.rotation = config.rotation ?? 0;
    this.scale = config.scale ?? 1;
    this.opacity = 1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(
      this.position.x + this.image.width / 2,
      this.position.y + this.image.height / 2
    );
    ctx.rotate(this.rotation);
    ctx.translate(
      -(this.position.x + this.image.width / 2),
      -(this.position.y + this.image.height / 2)
    );
    ctx.globalAlpha = this.opacity;

    const crop = {
      position: {
        x: (this.frames.val ?? 0) * (this.image.width / this.frames.max),
        y: 0,
      },
      width: this.image.width / this.frames.max,
      height: this.image.height,
    };

    const image = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      width: this.image.width / this.frames.max,
      height: this.image.height,
    };

    ctx.drawImage(
      this.image,
      crop.position.x,
      crop.position.y,
      crop.width,
      crop.height,
      image.position.x,
      image.position.y,
      image.width * this.scale,
      image.height * this.scale
    );

    ctx.restore();

    if (!this.animate) return;

    if (this.frames.max > 1) {
      this.frames.elapsed = (this.frames.elapsed ?? 0) + 1;
    }

    if ((this.frames.elapsed ?? 0) % this.frames.hold === 0) {
      if ((this.frames.val ?? 0) < this.frames.max - 1)
        this.frames.val = (this.frames.val ?? 0) + 1;
      else this.frames.val = 0;
    }
  }
}
