import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {
  EYE_LINE,
  GROUPS,
  ROOM,
  SURFACES,
  sizeLabel,
  type GroupId,
  type Layout,
  type Placed,
  type SurfaceId,
} from "./hang";

// The model is built in inches inside `room` (scaled to meters) so every
// dimension can be read straight off the floor plan. Plan coords:
// x across (0 = left wall walking in), y up, d depth from the glass.
const IN = 0.0254;
const W = ROOM.width;
const L = ROOM.depth;
const H = ROOM.ceiling;
const BI = ROOM.builtIn;
const T = 6; // modelled wall thickness
const EYE = 63; // camera eye height

const local = (x: number, y: number, d: number) =>
  new THREE.Vector3(x - W / 2, y, L / 2 - d);
const world = (x: number, y: number, d: number) =>
  local(x, y, d).multiplyScalar(IN);
const toPlan = (v: THREE.Vector3) => ({
  x: v.x / IN + W / 2,
  y: v.y / IN,
  d: L / 2 - v.z / IN,
});

export type Stop = { name: string; note: string };

export const STOPS: Stop[] = [
  { name: "Overview", note: "Roof off, from above the street" },
  { name: "From the sidewalk", note: "What passers-by see through the glass" },
  { name: "Walking in", note: "Eye level, just inside the door" },
  { name: "Concerts & cityscapes", note: "The whole right wall, straight on" },
  { name: "Concerts, up close", note: "From across the room, about 7½′ back" },
  { name: "Montreal wall", note: "The whole left wall, straight on" },
  { name: "Montreal, up close", note: "From across the room, about 7½′ back" },
  { name: "Entrance pillar", note: "CN Tower on the built-in by the door" },
  { name: "Back wall", note: "The other CN Tower, beside the bathroom door" },
];

type Side = "left" | "right" | "back" | "ceiling";
type Disposable = { dispose(): void };
type Pose = { pos: THREE.Vector3; target: THREE.Vector3 };
type Flight = {
  from: THREE.Vector3;
  to: THREE.Vector3;
  fromT: THREE.Vector3;
  toT: THREE.Vector3;
  start: number;
  duration: number;
};

const SIDE_OF: Record<SurfaceId, Side> = {
  right: "right",
  left: "left",
  builtin: "left",
  back: "back",
};

const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function canvas(w: number, h: number) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return [c, c.getContext("2d")!] as const;
}

function mix(hex: string, toward: string, t: number) {
  return "#" + new THREE.Color(hex).lerp(new THREE.Color(toward), t).getHexString();
}

/** Blue-grey sealed concrete with scuffs and paint flecks, like the photos. */
function concreteTexture() {
  const S = 1024;
  const [c, g] = canvas(S, S);
  const r = rng(7);
  g.fillStyle = "#5d636b";
  g.fillRect(0, 0, S, S);
  const wrapped = (x: number, y: number, draw: (x: number, y: number) => void) => {
    for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) draw(x + ox, y + oy);
  };
  for (let i = 0; i < 80; i++) {
    const x = r() * S;
    const y = r() * S;
    const rad = 60 + r() * 240;
    const light = r() > 0.55;
    wrapped(x, y, (px, py) => {
      const grad = g.createRadialGradient(px, py, 0, px, py, rad);
      grad.addColorStop(0, light ? "rgba(160,166,174,0.10)" : "rgba(28,32,38,0.14)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = grad;
      g.fillRect(px - rad, py - rad, rad * 2, rad * 2);
    });
  }
  g.lineCap = "round";
  for (let i = 0; i < 14; i++) {
    const x = r() * S;
    const y = r() * S;
    const len = 200 + r() * 700;
    const a = (r() > 0.5 ? 0 : Math.PI / 2) + (r() - 0.5) * 0.12;
    g.strokeStyle = `rgba(200,204,206,${0.06 + r() * 0.1})`;
    g.lineWidth = 2 + r() * 5;
    wrapped(x, y, (px, py) => {
      g.beginPath();
      g.moveTo(px, py);
      g.lineTo(px + Math.cos(a) * len, py + Math.sin(a) * len);
      g.stroke();
    });
  }
  for (let i = 0; i < 420; i++) {
    const x = r() * S;
    const y = r() * S;
    const rad = 0.6 + r() * 2.4;
    g.fillStyle = `rgba(236,236,230,${0.12 + r() * 0.4})`;
    g.beginPath();
    g.arc(x, y, rad, 0, Math.PI * 2);
    g.fill();
  }
  const img = g.getImageData(0, 0, S, S);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (r() - 0.5) * 16;
    img.data[i] += n;
    img.data[i + 1] += n;
    img.data[i + 2] += n;
  }
  g.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Red-brick walk-up across the street, seen through the storefront. */
function facadeTexture() {
  const [c, g] = canvas(1024, 512);
  g.fillStyle = "#8c4f3f";
  g.fillRect(0, 0, 1024, 512);
  const r = rng(3);
  for (let y = 0; y < 512; y += 6) {
    g.fillStyle = `rgba(0,0,0,${0.04 + r() * 0.05})`;
    g.fillRect(0, y, 1024, 1);
  }
  g.fillStyle = "#1f2328";
  g.fillRect(0, 380, 1024, 132);
  for (let i = 0; i < 4; i++) {
    g.fillStyle = "#3b444d";
    g.fillRect(30 + i * 256, 396, 196, 116);
    g.fillStyle = "rgba(255,255,255,0.12)";
    g.fillRect(30 + i * 256, 396, 196, 6);
  }
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 8; col++) {
      const x = 34 + col * 124;
      const y = 40 + row * 112;
      g.fillStyle = "#e8e3da";
      g.fillRect(x - 5, y - 5, 66, 90);
      g.fillStyle = r() > 0.7 ? "#56606a" : "#2c343c";
      g.fillRect(x, y, 56, 80);
      g.fillStyle = "#e8e3da";
      g.fillRect(x, y + 38, 56, 4);
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  return tex;
}

function exitTexture() {
  const [c, g] = canvas(256, 128);
  g.fillStyle = "#f2f1ec";
  g.fillRect(0, 0, 256, 128);
  g.fillStyle = "#e0202a";
  g.font = "700 76px Helvetica, Arial, sans-serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText("EXIT", 128, 68);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Baked downlight wash for the walls, replacing 12 real spotlights. One tile
 * is one 51″ light bay × full wall height with the scallop centered, so it
 * repeats along the side walls in step with the fixtures.
 */
const BAY = 51;
const FIRST_LIGHT = 24;
function washTexture(scallops: boolean) {
  const TW = scallops ? 256 : 4;
  const TH = 512;
  const [c, g] = canvas(TW, TH);
  const base = g.createLinearGradient(0, 0, 0, TH);
  base.addColorStop(0, "#c9c9c6"); // ceiling line, outside the cones
  base.addColorStop(0.14, "#d9d9d6");
  base.addColorStop(0.45, "#e5e5e2");
  base.addColorStop(1, "#dfdfdc");
  g.fillStyle = base;
  g.fillRect(0, 0, TW, TH);
  if (scallops) {
    const sx = TW / BAY;
    const sy = TH / H;
    for (const cx of [-BAY / 2, BAY / 2, BAY * 1.5]) {
      g.save();
      g.translate(cx * sx, (H - 62) * sy);
      g.scale(27 * sx, 46 * sy);
      const r = g.createRadialGradient(0, -0.1, 0, 0, 0, 1);
      r.addColorStop(0, "rgba(255,253,249,0.95)");
      r.addColorStop(0.55, "rgba(255,253,249,0.6)");
      r.addColorStop(0.85, "rgba(255,253,249,0.18)");
      r.addColorStop(1, "rgba(255,253,249,0)");
      g.fillStyle = r;
      g.beginPath();
      g.arc(0, 0, 1, 0, Math.PI * 2);
      g.fill();
      g.restore();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  return tex;
}

/** 0 → 1 alpha ramp, used for cheap ambient occlusion in corners. */
function rampTexture() {
  const [c, g] = canvas(4, 128);
  const grad = g.createLinearGradient(0, 0, 0, 128);
  grad.addColorStop(0, "rgba(0,0,0,1)");
  grad.addColorStop(0.35, "rgba(0,0,0,0.45)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 4, 128);
  const tex = new THREE.CanvasTexture(c);
  return tex;
}

/** Soft drop shadow behind each print (prints stand ~½–1″ off the wall). */
function shadowTexture() {
  const S = 128;
  const [c, g] = canvas(S, S);
  g.shadowColor = "rgba(0,0,0,1)";
  g.shadowBlur = 14;
  g.shadowOffsetX = 1000;
  g.fillStyle = "#000";
  g.fillRect(-1000 + 18, 18, S - 36, S - 36);
  const tex = new THREE.CanvasTexture(c);
  return tex;
}

function labelTexture(p: Placed, anisotropy: number) {
  const group = GROUPS[p.piece.group];
  const [cw, ch] = p.portrait ? [256, 384] : [384, 256];
  const [c, g] = canvas(cw, ch);
  const grad = g.createLinearGradient(0, 0, 0, ch);
  grad.addColorStop(0, mix(group.tone, "#ffffff", 0.07));
  grad.addColorStop(1, mix(group.tone, "#000000", 0.08));
  g.fillStyle = grad;
  g.fillRect(0, 0, cw, ch);
  g.strokeStyle = group.ink;
  g.globalAlpha = 0.16;
  g.lineWidth = 2;
  g.strokeRect(12, 12, cw - 24, ch - 24);
  g.globalAlpha = 1;

  const base = Math.min(cw, ch);
  const font = (weight: number, px: number) =>
    `${weight} ${px}px ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif`;
  const fit = (text: string, weight: number, px: number) => {
    g.font = font(weight, px);
    const w = g.measureText(text).width;
    if (w > cw * 0.84) g.font = font(weight, (px * cw * 0.84) / w);
  };
  g.fillStyle = group.ink;
  g.textAlign = "center";
  g.textBaseline = "middle";
  fit(p.piece.label, 600, base * 0.13);
  g.fillText(p.piece.label, cw / 2, ch / 2 - base * 0.065);
  g.globalAlpha = 0.72;
  const sub = `${sizeLabel(p.size)} · ${group.name}`;
  fit(sub, 500, base * 0.085);
  g.fillText(sub, cw / 2, ch / 2 + base * 0.095);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = anisotropy;
  return tex;
}

/** Position + facing for something hung on a surface, `off` inches proud. */
function onSurface(surface: SurfaceId, s: number, y: number, off: number) {
  switch (surface) {
    case "right":
      return { pos: local(W - off, y, s), rotY: -Math.PI / 2 };
    case "left":
      return { pos: local(off, y, s), rotY: Math.PI / 2 };
    case "builtin":
      return { pos: local(BI.depth + off, y, s), rotY: Math.PI / 2 };
    case "back":
      return { pos: local(s, y, L - off), rotY: 0 };
  }
}

export class GalleryScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(58, 1, 0.03, 400);
  private controls: OrbitControls;
  private room = new THREE.Group();
  private sides: Record<Side, THREE.Group>;
  private art: Record<SurfaceId, THREE.Group>;
  private guideGroups: THREE.Group[] = [];
  private people: THREE.Group[] = [];
  private owned: Disposable[] = [];
  /** Print faces, keyed by photo id (or id+size for name cards). */
  private labels = new Map<
    string,
    { tex: THREE.Texture | null; mat: THREE.MeshLambertMaterial }
  >();
  private faces: "photos" | "names" = "photos";
  private loader = new THREE.TextureLoader();
  private layout: Layout | null = null;
  private flight: Flight | null = null;
  private keys = new Set<string>();
  private inset = { current: 0, target: 0 };
  /** Render on demand: only draw a frame when something changed. */
  private dirty = true;
  private invalidate = () => {
    this.dirty = true;
  };
  private last = performance.now();
  private cleanup: (() => void)[] = [];
  private anisotropy: number;
  private unit = {
    box: new THREE.BoxGeometry(1, 1, 1),
    plane: new THREE.PlaneGeometry(1, 1),
  };
  private mat: Record<string, THREE.Material> = {};
  private tex: Record<string, THREE.Texture> = {};

  constructor(
    private container: HTMLElement,
    private reducedMotion = false,
  ) {
    // Default power preference: "high-performance" wakes the discrete GPU
    // on dual-GPU Macs. 1.5× is plenty for placeholders and ~44% fewer
    // pixels than 2× on Retina.
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);
    this.renderer = renderer;
    this.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());

    this.scene.background = new THREE.Color(0xe7e5e0);
    this.owned.push(this.unit.box, this.unit.plane);

    this.room.scale.setScalar(IN);
    this.scene.add(this.room);

    this.sides = {
      left: new THREE.Group(),
      right: new THREE.Group(),
      back: new THREE.Group(),
      ceiling: new THREE.Group(),
    };
    for (const g of Object.values(this.sides)) this.room.add(g);
    this.art = {
      right: new THREE.Group(),
      left: new THREE.Group(),
      builtin: new THREE.Group(),
      back: new THREE.Group(),
    };
    for (const id of Object.keys(this.art) as SurfaceId[])
      this.sides[SIDE_OF[id]].add(this.art[id]);

    this.buildMaterials();
    this.buildShell();
    this.buildStorefront();
    this.buildCeiling();
    this.buildDetails();
    this.buildOcclusion();
    this.buildStreet();
    this.buildGuides();
    this.buildPeople();
    this.buildLights();

    const controls = new OrbitControls(this.camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.09;
    controls.rotateSpeed = 0.55;
    controls.zoomSpeed = 0.9;
    controls.panSpeed = 0.8;
    controls.minDistance = 0.15;
    controls.maxDistance = 40;
    controls.maxPolarAngle = Math.PI * 0.94;
    controls.addEventListener("start", () => (this.flight = null));
    controls.addEventListener("change", this.invalidate);
    this.controls = controls;

    this.bindInput();
    this.resize();
    const ro = new ResizeObserver(() => this.resize());
    ro.observe(container);
    this.cleanup.push(() => ro.disconnect());

    renderer.setAnimationLoop(() => this.tick());
  }

  // ---------------------------------------------------------------- public

  setLayout(layout: Layout) {
    this.layout = layout;
    for (const g of Object.values(this.art)) g.clear();

    // Only hung prints hold a texture; anything taken down is freed below.
    const used = new Set<string>();
    for (const p of layout.placed) {
      const key =
        this.faces === "photos" ? `photo|${p.piece.id}` : `name|${p.piece.id}|${p.size}`;
      used.add(key);
      let face = this.labels.get(key);
      if (!face) face = this.faces === "photos" ? this.loadPhoto(p, key) : this.nameCard(p);
      this.labels.set(key, face);
      this.art[p.surface].add(this.makePrint(p, face.mat, layout.frame));
    }
    this.labels.forEach((face, key) => {
      if (used.has(key)) return;
      face.tex?.dispose();
      face.mat.dispose();
      this.labels.delete(key);
    });

    // Visitors stand ~2′ off the wall just past each composition, so they
    // give scale without covering anything in the straight-on views.
    const [a, b] = this.people;
    const left = this.extent("left");
    const right = this.extent("right");
    a.position.copy(local(22, 0, Math.max(BI.length + 10, left.center - left.half - 16)));
    b.position.copy(local(W - 22, 0, Math.min(L - 16, right.center + right.half + 14)));
    this.invalidate();
  }

  setFaces(mode: "photos" | "names") {
    if (mode === this.faces) return;
    this.faces = mode;
    if (this.layout) this.setLayout(this.layout);
  }

  /** Group-tone stand-in until the photo arrives, then swap the map in. */
  private loadPhoto(p: Placed, key: string) {
    const mat = new THREE.MeshLambertMaterial({ color: GROUPS[p.piece.group].tone });
    const face = { tex: null as THREE.Texture | null, mat };
    this.loader.load(p.piece.src, (tex) => {
      if (this.labels.get(key) !== face) {
        tex.dispose(); // taken down (or scene disposed) while loading
        return;
      }
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = Math.min(4, this.anisotropy);
      face.tex = tex;
      mat.map = tex;
      mat.color.set(0xffffff);
      mat.needsUpdate = true;
      this.invalidate();
    });
    return face;
  }

  private nameCard(p: Placed) {
    const tex = labelTexture(p, this.anisotropy);
    return { tex: tex as THREE.Texture | null, mat: new THREE.MeshLambertMaterial({ map: tex }) };
  }

  /** Pixels covered by UI on the right; keeps the view centered in what's left. */
  setInset(px: number, instant = false) {
    this.inset.target = px;
    if (instant) {
      this.inset.current = px;
      this.applyView();
    }
  }

  setPeople(on: boolean) {
    for (const g of this.people) g.visible = on;
    this.invalidate();
  }

  setGuides(on: boolean) {
    for (const g of this.guideGroups) g.visible = on;
    this.invalidate();
  }

  goTo(index: number, instant = false) {
    const pose = this.pose(index);
    if (instant || this.reducedMotion) {
      this.flight = null;
      this.camera.position.copy(pose.pos);
      this.controls.target.copy(pose.target);
      this.controls.update();
      return;
    }
    const dist =
      this.camera.position.distanceTo(pose.pos) +
      this.controls.target.distanceTo(pose.target) * 0.3;
    this.flight = {
      from: this.camera.position.clone(),
      to: pose.pos,
      fromT: this.controls.target.clone(),
      toT: pose.target,
      start: performance.now(),
      duration: THREE.MathUtils.clamp(dist / 3.4, 0.9, 2.2) * 1000,
    };
  }

  dispose() {
    this.renderer.setAnimationLoop(null);
    for (const fn of this.cleanup) fn();
    this.controls.dispose();
    this.labels.forEach(({ tex, mat }) => {
      tex?.dispose();
      mat.dispose();
    });
    this.labels.clear();
    this.scene.traverse((o) => {
      if (o instanceof THREE.Mesh || o instanceof THREE.InstancedMesh) {
        if (o.geometry !== this.unit.box && o.geometry !== this.unit.plane)
          o.geometry.dispose();
      }
    });
    for (const m of Object.values(this.mat)) m.dispose();
    for (const t of Object.values(this.tex)) t.dispose();
    for (const d of this.owned) d.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }

  // ------------------------------------------------------------- building

  private buildMaterials() {
    const concrete = concreteTexture();
    concrete.anisotropy = this.anisotropy;
    concrete.repeat.set(W / 96, L / 96);
    const facade = facadeTexture();
    facade.repeat.set(4, 1);
    this.tex = {
      concrete,
      facade,
      exit: exitTexture(),
      ramp: rampTexture(),
      shadow: shadowTexture(),
      wash: washTexture(true),
      washPlain: washTexture(false),
    };
    // Lambert is far cheaper per pixel than Standard/Physical, and with the
    // downlights baked into the walls there's nothing left that needs PBR.
    const std = (p: THREE.MeshLambertMaterialParameters) =>
      new THREE.MeshLambertMaterial(p);
    const baked = (map: THREE.Texture) =>
      new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide });
    const ao = (opacity: number) =>
      new THREE.MeshBasicMaterial({
        map: this.tex.ramp,
        color: 0x000000,
        transparent: true,
        opacity,
        depthWrite: false,
        side: THREE.DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: -2,
      });
    this.mat = {
      wall: std({ color: 0xf1f1ef }),
      wash: baked(this.tex.wash),
      washPlain: baked(this.tex.washPlain),
      trim: std({ color: 0xf5f5f3 }),
      ceiling: std({ color: 0xf4f4f2 }),
      floor: std({ map: concrete }),
      duct: std({ color: 0x2b2d31 }),
      rib: std({ color: 0x4a4e55 }),
      register: std({ color: 0x3d4046 }),
      steel: std({ color: 0x17181a }),
      glass: new THREE.MeshBasicMaterial({
        color: 0xdfe9ec,
        transparent: true,
        opacity: 0.1,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
      panel: std({ color: 0xcfd0cd }),
      plate: std({ color: 0xf6f6f3 }),
      knob: std({ color: 0xa9a9a4 }),
      lamp: new THREE.MeshBasicMaterial({ color: 0xfffaf0 }),
      frame: std({ color: 0x141414 }),
      mount: std({ color: 0x1e1e1e }),
      shadow: new THREE.MeshBasicMaterial({
        map: this.tex.shadow,
        color: 0x000000,
        transparent: true,
        opacity: 0.32,
        depthWrite: false,
      }),
      exit: new THREE.MeshBasicMaterial({ map: this.tex.exit }),
      ground: std({ color: 0xdcd9d3 }),
      sidewalk: std({ color: 0xb7b4ad }),
      asphalt: std({ color: 0x46484c }),
      facade: std({ map: facade }),
      header: std({ color: 0x232426 }),
      eyeLine: new THREE.MeshBasicMaterial({ color: 0x2f6fed }),
      limit: new THREE.MeshBasicMaterial({ color: 0xe5484d }),
      person: std({ color: 0x9aa3ad }),
      aoFloor: ao(0.3),
      aoCeiling: ao(0.1),
      aoCorner: ao(0.12),
    };
  }

  /** Box from plan-space min/max corners (inches). */
  private box(
    parent: THREE.Object3D,
    mat: THREE.Material | THREE.Material[],
    x0: number,
    x1: number,
    y0: number,
    y1: number,
    d0: number,
    d1: number,
  ) {
    const mesh = new THREE.Mesh(this.unit.box, mat);
    mesh.scale.set(Math.abs(x1 - x0), Math.abs(y1 - y0), Math.abs(d1 - d0));
    mesh.position.copy(local((x0 + x1) / 2, (y0 + y1) / 2, (d0 + d1) / 2));
    parent.add(mesh);
    return mesh;
  }

  /** Full-height wall quad from plan point (x0, d0) to (x1, d1). */
  private wallFace(
    parent: THREE.Object3D,
    mat: THREE.Material,
    x0: number,
    d0: number,
    x1: number,
    d1: number,
    u0 = 0,
    u1 = 1,
  ) {
    const pts = [local(x0, 0, d0), local(x1, 0, d1), local(x1, H, d1), local(x0, H, d0)];
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(pts.flatMap((p) => [p.x, p.y, p.z]), 3),
    );
    geo.setAttribute("uv", new THREE.Float32BufferAttribute([u0, 0, u1, 0, u1, 1, u0, 1], 2));
    geo.setIndex([0, 1, 2, 0, 2, 3]);
    parent.add(new THREE.Mesh(geo, mat));
  }

  private buildShell() {
    const { left, right, back } = this.sides;
    const m = this.mat;

    const floor = new THREE.Mesh(this.unit.plane, m.floor);
    floor.scale.set(W, L, 1);
    floor.rotation.x = -Math.PI / 2;
    floor.position.copy(local(W / 2, 0, L / 2));
    this.room.add(floor);

    // Wall bodies sit a hair behind their baked inner faces (no z-fighting).
    const e = 0.1;
    this.box(right, m.wall, W + e, W + T, 0, H, 0, L + T);
    this.box(left, m.wall, -T, -e, 0, H, 0, L + T);
    this.box(left, m.wall, 0, BI.depth - e, 0, H, 0, BI.length - e);
    this.box(back, m.wall, -T, W + T, 0, H, L + e, L + T);

    // Inner faces with the downlight wash baked in, tiled per light bay.
    const bay = (d: number) => (d - FIRST_LIGHT) / BAY + 0.5;
    this.wallFace(right, m.wash, W, 0, W, L, bay(0), bay(L));
    this.wallFace(left, m.wash, 0, BI.length, 0, L, bay(BI.length), bay(L));
    this.wallFace(left, m.wash, BI.depth, 0, BI.depth, BI.length, bay(0), bay(BI.length));
    this.wallFace(left, m.washPlain, 0, BI.length, BI.depth, BI.length);
    this.wallFace(back, m.washPlain, 0, L, W, L);

    // Baseboards
    const bb = ROOM.baseboard;
    const doorL = ROOM.door.center - ROOM.door.width / 2 - ROOM.door.casing;
    const doorR = ROOM.door.center + ROOM.door.width / 2 + ROOM.door.casing;
    this.box(right, m.trim, W - 0.6, W, 0, bb, 0, L);
    this.box(left, m.trim, 0, 0.6, 0, bb, BI.length, L);
    this.box(left, m.trim, BI.depth, BI.depth + 0.6, 0, bb, 0, BI.length);
    this.box(left, m.trim, 0, BI.depth + 0.6, 0, bb, BI.length, BI.length + 0.6);
    this.box(back, m.trim, 0, doorL, 0, bb, L - 0.6, L);
    this.box(back, m.trim, doorR, W, 0, bb, L - 0.6, L);
  }

  private buildStorefront() {
    const front = new THREE.Group();
    this.room.add(front);
    const m = this.mat;
    const x0 = BI.depth;
    const x1 = W;
    const mid = (x0 + x1) / 2;
    const doorHalf = 24;
    const mw = 1.8; // mullion face width

    // Glass
    const glass = new THREE.Mesh(this.unit.plane, m.glass);
    glass.scale.set(x1 - x0, H, 1);
    glass.position.copy(local(mid, H / 2, 0.6));
    front.add(glass);

    // Black steel grid
    for (const x of [x0 + mw / 2, mid - doorHalf, mid, mid + doorHalf, x1 - mw / 2])
      this.box(front, m.steel, x - mw / 2, x + mw / 2, 0, H, -0.6, 1.8);
    for (const [y0, y1] of [
      [0, 3],
      [85, 88],
      [H - 3, H],
    ])
      this.box(front, m.steel, x0, x1, y0, y1, -0.6, 1.8);
    this.box(front, m.steel, mid - doorHalf, mid + doorHalf, 3, 8, -0.4, 1.6);
    for (const x of [mid - doorHalf / 2, mid + doorHalf / 2])
      this.box(front, m.steel, x - mw / 4, x + mw / 4, 88, H - 3, -0.4, 1.6);
    // Pull handles
    for (const x of [mid - 3, mid + 3])
      this.box(front, m.knob, x - 0.4, x + 0.4, 34, 50, 1.8, 3.2);

    // EXIT sign hung inside, centered over the doors
    const signMats = [m.trim, m.trim, m.trim, m.trim, m.exit, m.exit];
    this.box(front, signMats, mid - 6.5, mid + 6.5, 92, 99, 2.2, 4.4);
  }

  private buildCeiling() {
    const c = this.sides.ceiling;
    const m = this.mat;
    this.box(c, m.ceiling, -T, W + T, H, H + 3, 0, L + T);

    // Two rows of recessed downlights
    const trim = new THREE.CircleGeometry(3.3, 28);
    const lens = new THREE.CircleGeometry(2.3, 24);
    this.owned.push(trim, lens);
    for (const p of this.downlights()) {
      const ring = new THREE.Mesh(trim, m.trim);
      ring.rotation.x = Math.PI / 2;
      ring.position.copy(local(p.x, H - 0.05, p.d));
      const glow = new THREE.Mesh(lens, m.lamp);
      glow.rotation.x = Math.PI / 2;
      glow.position.copy(local(p.x, H - 0.12, p.d));
      c.add(ring, glow);
    }

    // Black spiral duct down the middle of the ceiling; stops ~5′ short of
    // the glass and ~1½′ short of the back wall, like the photos.
    const R = 7.5;
    const cy = H - R - 4;
    const start = 60;
    const end = L - 18;
    const len = end - start;
    const duct = new THREE.Mesh(new THREE.CylinderGeometry(R, R, len, 32), m.duct);
    duct.rotation.x = Math.PI / 2;
    duct.position.copy(local(W / 2, cy, (start + end) / 2));
    c.add(duct);
    const ribGeo = new THREE.TorusGeometry(R + 0.12, 0.3, 6, 32);
    const ribs = new THREE.InstancedMesh(ribGeo, m.rib, Math.floor(len / 3.5));
    const tmp = new THREE.Object3D();
    for (let i = 0; i < ribs.count; i++) {
      tmp.position.copy(local(W / 2, cy, start + 1.75 + i * 3.5));
      tmp.updateMatrix();
      ribs.setMatrixAt(i, tmp.matrix);
    }
    c.add(ribs);
    for (const d of [86, 146, 206, 262])
      this.box(c, m.register, W / 2 - 2.6, W / 2 + 2.6, cy - R - 0.8, cy - R + 1.5, d - 6, d + 6);
    for (let d = start + 10; d < end; d += 66)
      this.box(c, m.steel, W / 2 - 0.25, W / 2 + 0.25, cy + R, H, d - 0.25, d + 0.25);
  }

  private downlights() {
    const out: { x: number; d: number }[] = [];
    for (const x of [27, W - 27])
      for (let i = 0; i < 6; i++) out.push({ x, d: 24 + i * 51 });
    return out;
  }

  private buildDetails() {
    const { left, right, back } = this.sides;
    const m = this.mat;
    const door = ROOM.door;

    // Bathroom door: flush slab, casing, lever
    const half = door.width / 2;
    this.box(back, m.trim, door.center - half, door.center + half, 0, door.height, L - 1.4, L);
    const c = door.casing;
    this.box(back, m.trim, door.center - half - c, door.center - half, 0, door.height + c, L - 0.8, L);
    this.box(back, m.trim, door.center + half, door.center + half + c, 0, door.height + c, L - 0.8, L);
    this.box(back, m.trim, door.center - half - c, door.center + half + c, door.height, door.height + c, L - 0.8, L);
    const kx = door.center + half - 2.8;
    this.box(back, m.knob, kx - 1.2, kx + 1.2, 35, 37.4, L - 2.4, L - 1.4);
    this.box(back, m.knob, kx - 4.2, kx + 0.6, 35.6, 36.8, L - 3.2, L - 2.4);

    // Switch & distribution box on the right wall + conduit to ceiling
    const pnl = ROOM.panel;
    this.box(right, m.panel, W - pnl.depth, W, pnl.bottom, pnl.top, L - pnl.toBack, L - pnl.fromBack);
    this.box(right, m.panel, W - 1.6, W, pnl.top, H, L - 9, L - 7.8);

    // Outlets ~15″ up
    const plate = (side: THREE.Group, x0: number, x1: number, d0: number, d1: number) =>
      this.box(side, m.plate, x0, x1, 13, 17.5, d0, d1);
    for (const d of [44, 146, 236]) plate(right, W - 0.3, W, d - 1.4, d + 1.4);
    for (const d of [120, 226]) plate(left, 0, 0.3, d - 1.4, d + 1.4);
    plate(left, BI.depth, BI.depth + 0.3, 48.6, 51.4);
    plate(back, 20.6, 23.4, L - 0.3, L);

    // Emergency light pack, right wall near the back
    this.box(right, m.plate, W - 3, W, 98, 103, L - 48, L - 38);
  }

  /** Dark ramps along wall/floor/ceiling junctions — fakes corner shading. */
  private buildOcclusion() {
    const { left, right, back } = this.sides;
    const m = this.mat;
    const strip = (
      parent: THREE.Object3D,
      mat: THREE.Material,
      origin: [number, number, number],
      along: [number, number, number],
      spread: [number, number, number],
    ) => {
      const a = local(...origin);
      const toLocal = (v: [number, number, number]) =>
        new THREE.Vector3(v[0], v[1], -v[2]);
      const b = a.clone().add(toLocal(along));
      const s = toLocal(spread);
      const geo = new THREE.BufferGeometry();
      const pts = [a, b, b.clone().add(s), a.clone().add(s)];
      geo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(pts.flatMap((p) => [p.x, p.y, p.z]), 3),
      );
      geo.setAttribute("uv", new THREE.Float32BufferAttribute([0, 1, 1, 1, 1, 0, 0, 0], 2));
      geo.setIndex([0, 1, 2, 0, 2, 3]);
      parent.add(new THREE.Mesh(geo, mat));
    };
    const f = 0.06;
    // floor
    strip(right, m.aoFloor, [W, f, 0], [0, 0, L], [-10, 0, 0]);
    strip(left, m.aoFloor, [0, f, BI.length], [0, 0, L - BI.length], [10, 0, 0]);
    strip(left, m.aoFloor, [BI.depth, f, 0], [0, 0, BI.length], [10, 0, 0]);
    strip(left, m.aoFloor, [0, f, BI.length], [BI.depth, 0, 0], [0, 0, 10]);
    strip(back, m.aoFloor, [0, f, L], [W, 0, 0], [0, 0, -10]);
    // ceiling line
    strip(right, m.aoCeiling, [W - f, H, 0], [0, 0, L], [0, -12, 0]);
    strip(left, m.aoCeiling, [f, H, BI.length], [0, 0, L - BI.length], [0, -12, 0]);
    strip(left, m.aoCeiling, [BI.depth + f, H, 0], [0, 0, BI.length], [0, -12, 0]);
    strip(back, m.aoCeiling, [0, H, L - f], [W, 0, 0], [0, -12, 0]);
    // vertical corners
    strip(back, m.aoCorner, [W, 0, L - f], [0, H, 0], [-10, 0, 0]);
    strip(right, m.aoCorner, [W - f, 0, L], [0, H, 0], [0, 0, -10]);
    strip(back, m.aoCorner, [0, 0, L - f], [0, H, 0], [10, 0, 0]);
    strip(left, m.aoCorner, [f, 0, L], [0, H, 0], [0, 0, -10]);
    strip(left, m.aoCorner, [f, 0, BI.length], [0, H, 0], [0, 0, 10]);
    strip(left, m.aoCorner, [0, 0, BI.length + f], [0, H, 0], [10, 0, 0]);
  }

  private buildStreet() {
    const m = this.mat;
    const plane = (mat: THREE.Material, x0: number, x1: number, d0: number, d1: number, y: number) => {
      const p = new THREE.Mesh(this.unit.plane, mat);
      p.scale.set(x1 - x0, d1 - d0, 1);
      p.rotation.x = -Math.PI / 2;
      p.position.copy(local((x0 + x1) / 2, y, (d0 + d1) / 2));
      this.room.add(p);
    };
    plane(m.ground, -2400, 2400, -2400, 2400, -1.2);
    plane(m.sidewalk, -600, 700, -150, 0, -0.4);
    plane(m.asphalt, -600, 700, -400, -150, -0.6);
    plane(m.sidewalk, -600, 700, -520, -400, -0.4);
    this.box(this.room, m.sidewalk, -600, 700, -0.6, 5, -152, -148);
    const mats = [m.header, m.header, m.header, m.header, m.header, m.facade];
    this.box(this.room, mats, -600, 700, 0, 420, -580, -520);
  }

  private buildGuides() {
    const m = this.mat;
    for (const surface of Object.values(SURFACES)) {
      const g = new THREE.Group();
      g.visible = false;
      const run = surface.to - surface.from;
      const line = new THREE.Mesh(this.unit.box, m.eyeLine);
      const at = onSurface(surface.id, (surface.from + surface.to) / 2, EYE_LINE, 0.15);
      line.position.copy(at.pos);
      line.rotation.y = at.rotY;
      line.scale.set(run, 0.35, 0.1);
      g.add(line);
      for (const s of [surface.from, surface.to]) {
        const tick = new THREE.Mesh(this.unit.box, m.limit);
        const p = onSurface(surface.id, s, EYE_LINE, 0.15);
        tick.position.copy(p.pos);
        tick.rotation.y = p.rotY;
        tick.scale.set(0.45, 64, 0.1);
        g.add(tick);
      }
      this.sides[SIDE_OF[surface.id]].add(g);
      this.guideGroups.push(g);
    }
  }

  /** Two 5′7″ mannequins for scale, one per long wall. */
  private buildPeople() {
    // [radius, height] profile, feet → crown
    const profile: [number, number][] = [
      [0, 0], [5.2, 0], [5.6, 3], [5.4, 18], [6.4, 30], [7.3, 35], [6.3, 41],
      [7.4, 47], [8.3, 52], [7.6, 54.5], [3.2, 56], [2.4, 57.5], [3.4, 59],
      [4.2, 61.5], [4.2, 64], [3.3, 66.2], [0, 67],
    ];
    const geo = new THREE.LatheGeometry(
      profile.map(([r, y]) => new THREE.Vector2(r, y)),
      28,
    );
    this.owned.push(geo);
    for (const side of [this.sides.left, this.sides.right]) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(geo, this.mat.person);
      body.scale.set(1, 1, 0.62);
      g.add(body);
      g.rotation.y = Math.PI / 2;
      side.add(g);
      this.people.push(g);
    }
  }

  // Two cheap fill lights. The downlight scallops are baked into the walls,
  // so nothing here loops over per-fixture lights in the shader.
  private buildLights() {
    // Lambert = albedo × irradiance / π, so ~π total reads as true color on
    // the floor; prints facing sideways land ~75%, the ceiling ~65%.
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x9a9da3, 1.0));
    this.scene.add(new THREE.AmbientLight(0xfff8f0, 1.7));
    // Straight down (no x component) so both long walls stay even; gives
    // the duct, mannequins and frame edges some form. No shadows.
    const top = new THREE.DirectionalLight(0xfff4e8, 0.8);
    top.position.set(0, 1, 0.35);
    this.scene.add(top);
  }

  private makePrint(p: Placed, face: THREE.Material, frame: number) {
    const g = new THREE.Group();
    const at = onSurface(p.surface, p.s, p.y, 0);
    g.position.copy(at.pos);
    g.rotation.y = at.rotY;

    const depth = frame > 0 ? 1.25 : 0.5;
    const shadow = new THREE.Mesh(this.unit.plane, this.mat.shadow);
    shadow.scale.set(p.w * 1.08 + 2.5, p.h * 1.08 + 2.5, 1);
    shadow.position.set(0, -0.9 - depth * 0.6, 0.06);
    g.add(shadow);

    const body = new THREE.Mesh(this.unit.box, frame > 0 ? this.mat.frame : this.mat.mount);
    body.scale.set(p.w, p.h, depth);
    body.position.z = depth / 2;
    g.add(body);

    const print = new THREE.Mesh(this.unit.plane, face);
    print.scale.set(p.printW, p.printH, 1);
    print.position.z = depth + 0.02;
    g.add(print);
    return g;
  }

  // ------------------------------------------------------------ navigation

  private extent(surface: SurfaceId, groups?: GroupId[]) {
    const list =
      this.layout?.placed.filter(
        (p) => p.surface === surface && (!groups || groups.includes(p.piece.group)),
      ) ?? [];
    if (!list.length) {
      const s = SURFACES[surface];
      return { center: (s.from + s.to) / 2, half: (s.to - s.from) / 2 };
    }
    const min = Math.min(...list.map((p) => p.s - p.w / 2));
    const max = Math.max(...list.map((p) => p.s + p.w / 2));
    return { center: (min + max) / 2, half: (max - min) / 2 };
  }

  /** Distance that fits a half-width × half-height patch in the visible area. */
  private fit(halfW: number, halfH: number) {
    const t = Math.tan(THREE.MathUtils.degToRad(this.camera.fov) / 2);
    const w = Math.max(1, this.container.clientWidth - this.inset.target);
    const aspect = w / Math.max(1, this.container.clientHeight);
    return Math.max(halfH / t, halfW / (t * aspect)) * 1.04;
  }

  private pose(i: number): Pose {
    const P = (pos: [number, number, number], target: [number, number, number]) => ({
      pos: world(...pos),
      target: world(...target),
    });
    switch (i) {
      case 1:
        return P([W / 2 + 16, 64, -118], [W / 2 - 4, 54, 140]);
      case 2:
        return P([W / 2 + 10, EYE, 14], [W / 2 - 6, 54, 170]);
      case 3: {
        const e = this.extent("right");
        const dist = Math.max(this.fit(e.half + 14, 44), W + 24);
        return P([W - dist, EYE_LINE + 2, e.center], [W, EYE_LINE, e.center]);
      }
      case 4: {
        const e = this.extent("right", ["concerts"]);
        return P([16, EYE, e.center], [W, EYE_LINE, e.center]);
      }
      case 5: {
        const e = this.extent("left");
        const dist = Math.max(this.fit(e.half + 14, 44), W + 24);
        return P([dist, EYE_LINE + 2, e.center], [0, EYE_LINE, e.center]);
      }
      case 6: {
        const e = this.extent("left");
        return P([W - 12, EYE, e.center], [0, EYE_LINE, e.center]);
      }
      case 7: {
        const e = this.extent("builtin");
        return P([W - 16, EYE, e.center + 58], [BI.depth, EYE_LINE, e.center]);
      }
      case 8:
        return P([W / 2 + 8, EYE, L - 125], [W / 2 - 8, 54, L]);
      default:
        return P([W + 200, 300, -95], [38, 0, 150]);
    }
  }

  private bindInput() {
    const typing = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return false;
      if (t.tagName === "SELECT" || t.tagName === "TEXTAREA" || t.isContentEditable) return true;
      return t instanceof HTMLInputElement && !["checkbox", "range", "radio", "button"].includes(t.type);
    };
    const codes = ["KeyW", "KeyA", "KeyS", "KeyD", "ShiftLeft", "ShiftRight"];
    const down = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || typing(e) || !codes.includes(e.code)) return;
      this.keys.add(e.code);
      if (e.code.startsWith("Key")) this.flight = null;
    };
    const up = (e: KeyboardEvent) => this.keys.delete(e.code);
    const blur = () => this.keys.clear();
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    this.cleanup.push(() => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
    });
  }

  /** Returns true if the camera moved. */
  private walk(dt: number) {
    const k = this.keys;
    const fwd = (k.has("KeyW") ? 1 : 0) - (k.has("KeyS") ? 1 : 0);
    const strafe = (k.has("KeyD") ? 1 : 0) - (k.has("KeyA") ? 1 : 0);
    if (!fwd && !strafe) return false;
    const speed = k.has("ShiftLeft") || k.has("ShiftRight") ? 2.8 : 1.4;
    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);
    forward.y = 0;
    if (forward.lengthSq() < 1e-6) return false;
    forward.normalize();
    const right = new THREE.Vector3().crossVectors(forward, this.camera.up).normalize();
    const move = forward.multiplyScalar(fwd).add(right.multiplyScalar(strafe));
    move.normalize().multiplyScalar(speed * dt);

    const before = this.camera.position.clone();
    const p0 = toPlan(before);
    const inside = p0.x > 0 && p0.x < W && p0.d > 0 && p0.d < L && p0.y < H;
    const next = before.clone().add(move);
    if (inside) {
      const p = toPlan(next);
      const m = 9;
      p.x = THREE.MathUtils.clamp(p.x, m, W - m);
      p.d = THREE.MathUtils.clamp(p.d, m, L - m);
      if (p.d < BI.length + m) p.x = Math.max(p.x, BI.depth + m);
      next.copy(world(p.x, p.y, p.d));
    }
    const delta = next.clone().sub(before);
    this.camera.position.copy(next);
    this.controls.target.add(delta);
    return delta.lengthSq() > 0;
  }

  private resize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.applyView();
  }

  // Render the left part of a wider virtual frame so the optical center
  // sits in the middle of the area not covered by the panel.
  private applyView() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    if (!w || !h) return;
    const inset = Math.round(this.inset.current);
    // Narrow (portrait) screens get a taller FOV so the room doesn't feel zoomed in.
    const visible = (w - inset) / h;
    this.camera.fov = Math.min(85, 58 / Math.sqrt(Math.min(1, visible)));
    this.camera.aspect = (w + inset) / h;
    if (inset > 0) this.camera.setViewOffset(w + inset, h, inset, 0, w, h);
    else this.camera.clearViewOffset();
    this.camera.updateProjectionMatrix();
    this.invalidate();
  }

  private tick() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;

    const inset = this.inset;
    if (inset.current !== inset.target) {
      const gap = inset.target - inset.current;
      inset.current =
        this.reducedMotion || Math.abs(gap) < 0.5
          ? inset.target
          : inset.current + gap * (1 - Math.exp(-dt * 12));
      this.applyView();
    }

    if (this.flight) {
      const f = this.flight;
      const t = Math.min(1, (now - f.start) / f.duration);
      const e = easeInOut(t);
      this.camera.position.lerpVectors(f.from, f.to, e);
      this.controls.target.lerpVectors(f.fromT, f.toT, e);
      if (t >= 1) this.flight = null;
      this.dirty = true;
    } else if (this.walk(dt)) {
      this.dirty = true;
    }

    // Fires "change" (→ dirty) while dragging or while damping settles.
    this.controls.update();
    if (!this.dirty) return;
    this.dirty = false;

    // Dollhouse cutaway: hide whatever the camera is behind.
    const c = this.camera.position;
    const lx = c.x / IN;
    const ly = c.y / IN;
    const lz = c.z / IN;
    this.sides.left.visible = lx > -W / 2;
    this.sides.right.visible = lx < W / 2;
    this.sides.back.visible = lz > -L / 2;
    this.sides.ceiling.visible = ly < H;

    this.renderer.render(this.scene, this.camera);
  }
}
