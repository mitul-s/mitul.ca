// @ts-nocheck

"use client";
import type React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import p5 from "p5";

interface Particle {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  vx: number;
  vy: number;
}

const P5AsciiTree: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const readyRef = useRef(false);

  useEffect(() => {
    if (!sketchRef.current) return;
    const containerEl = sketchRef.current;
    containerEl.style.visibility = "hidden";
    let signaledReady = false;

    const sketch = (p: p5) => {
      let img: p5.Image;
      const density = "⋅";
      let particles: Particle[] = [];
      const maxSpeed = 0.5;
      const influenceRadius = 60;
      let quadtree: any;
      let prevMouseX: number;
      let prevMouseY: number;

      p.preload = () => {
        img = p.loadImage(
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tree%20PNG%203498-WZXyiQf0MZdOkGZGNuQvBFOgvMHxgZ.png"
          // "https://inqeleafibjx2dzc.public.blob.vercel-storage.com/Tree%20PNG%20Image-FuCcTHTGIQhPV1Q9zND4BeFX4yuyn2.png"
        );
      };

      class QuadTree {
        boundary: { x: number; y: number; w: number; h: number };
        capacity: number;
        points: Particle[];
        divided: boolean;
        northwest: QuadTree | null;
        northeast: QuadTree | null;
        southwest: QuadTree | null;
        southeast: QuadTree | null;

        constructor(
          boundary: { x: number; y: number; w: number; h: number },
          capacity: number
        ) {
          this.boundary = boundary;
          this.capacity = capacity;
          this.points = [];
          this.divided = false;
          this.northwest = null;
          this.northeast = null;
          this.southwest = null;
          this.southeast = null;
        }

        insert(point: Particle) {
          if (!this.contains(point)) {
            return false;
          }

          if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
          }

          if (!this.divided) {
            this.subdivide();
          }

          return (
            this.northwest!.insert(point) ||
            this.northeast!.insert(point) ||
            this.southwest!.insert(point) ||
            this.southeast!.insert(point)
          );
        }

        subdivide() {
          const x = this.boundary.x;
          const y = this.boundary.y;
          const w = this.boundary.w / 2;
          const h = this.boundary.h / 2;

          this.northwest = new QuadTree(
            { x: x, y: y, w: w, h: h },
            this.capacity
          );
          this.northeast = new QuadTree(
            { x: x + w, y: y, w: w, h: h },
            this.capacity
          );
          this.southwest = new QuadTree(
            { x: x, y: y + h, w: w, h: h },
            this.capacity
          );
          this.southeast = new QuadTree(
            { x: x + w, y: y + h, w: w, h: h },
            this.capacity
          );

          this.divided = true;
        }

        contains(point: Particle) {
          return (
            point.x >= this.boundary.x &&
            point.x < this.boundary.x + this.boundary.w &&
            point.y >= this.boundary.y &&
            point.y < this.boundary.y + this.boundary.h
          );
        }

        query(range: { x: number; y: number; r: number }, found: Particle[]) {
          if (!this.intersects(range)) {
            return;
          }

          for (let p of this.points) {
            if (this.inCircle(range, p)) {
              found.push(p);
            }
          }

          if (this.divided) {
            this.northwest!.query(range, found);
            this.northeast!.query(range, found);
            this.southwest!.query(range, found);
            this.southeast!.query(range, found);
          }
        }

        intersects(range: { x: number; y: number; r: number }) {
          return !(
            range.x - range.r > this.boundary.x + this.boundary.w ||
            range.x + range.r < this.boundary.x ||
            range.y - range.r > this.boundary.y + this.boundary.h ||
            range.y + range.r < this.boundary.y
          );
        }

        inCircle(range: { x: number; y: number; r: number }, point: Particle) {
          let dx = range.x - point.x;
          let dy = range.y - point.y;
          return dx * dx + dy * dy <= range.r * range.r;
        }
      }

      p.setup = () => {
        p.createCanvas(900, 720);
        p.clear();
        p.textSize(16);
        p.textAlign(p.CENTER, p.CENTER);

        img.loadPixels();
        const stepSize = 6;
        const w = p.width / img.width;
        const h = p.height / img.height;

        // Define the area to exclude (top-left corner)
        const excludeWidth = img.width * 0.2; // Exclude 20% from the left
        const excludeHeight = img.height * 0.2; // Exclude 20% from the top

        for (let i = 0; i < img.width; i += stepSize) {
          for (let j = 0; j < img.height; j += stepSize) {
            // Skip particles in the top-left corner
            if (i < excludeWidth && j < excludeHeight) continue;

            const pixelIndex = (i + j * img.width) * 4;
            const r = img.pixels[pixelIndex];
            const g = img.pixels[pixelIndex + 1];
            const b = img.pixels[pixelIndex + 2];
            const brightness = (r + g + b) / 3;

            if (brightness > 50) {
              particles.push({
                x: i * w,
                y: j * h,
                originalX: i * w,
                originalY: j * h,
                vx: 0,
                vy: 0,
              });
            }
          }
        }

        quadtree = new QuadTree({ x: 0, y: 0, w: p.width, h: p.height }, 4);
        prevMouseX = p.mouseX;
        prevMouseY = p.mouseY;
      };

      p.draw = () => {
        p.clear();
        const colorString = getComputedStyle(document.documentElement)
          .getPropertyValue("--color-accent-rgb")
          .trim();

        const [r, g, b] = colorString
          .split(",")
          .map((str) => Number.parseInt(str.trim(), 10));

        p.fill(r, g, b);
        // p.fill(2, 16, 147);
        // p.fill(19, 50, 18);
        // p.fill(178, 0, 36);

        quadtree = new QuadTree({ x: 0, y: 0, w: p.width, h: p.height }, 4);
        for (let particle of particles) {
          quadtree.insert(particle);
        }

        const mouseVelocityX = p.mouseX - prevMouseX;
        const mouseVelocityY = p.mouseY - prevMouseY;

        const range = { x: p.mouseX, y: p.mouseY, r: influenceRadius };
        const found: Particle[] = [];
        quadtree.query(range, found);

        for (let particle of found) {
          const dx = p.mouseX - particle.x;
          const dy = p.mouseY - particle.y;
          const distance = p.sqrt(dx * dx + dy * dy);

          if (distance < influenceRadius) {
            const distanceInfluence = p.map(
              distance,
              0,
              influenceRadius,
              1,
              0,
              true
            );
            const force = maxSpeed * distanceInfluence * 0.1;

            particle.vx = mouseVelocityX * force;
            particle.vy = mouseVelocityY * force;
          }
        }

        for (let particle of particles) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Immediate return to original position
          particle.x = p.lerp(particle.x, particle.originalX, 0.1);
          particle.y = p.lerp(particle.y, particle.originalY, 0.1);

          p.text(density, particle.x, particle.y);
        }

        if (!signaledReady) {
          signaledReady = true;
          if (containerEl) containerEl.style.visibility = "visible";
          if (!readyRef.current) {
            readyRef.current = true;
            setReady(true);
          }
        }
        prevMouseX = p.mouseX;
        prevMouseY = p.mouseY;
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center overflow-hidden"
      initial={false}
      animate={{ opacity: ready ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ opacity: 0, willChange: "opacity" }}
    >
      <div ref={sketchRef} style={{ opacity: 0.65, visibility: "hidden" }} />
    </motion.div>
  );
};

export default P5AsciiTree;
