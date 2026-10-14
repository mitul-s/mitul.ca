// Hang plan for All Street Gallery (77 E 3rd St, NYC).
//
// Everything here is in inches. Plan coordinates:
//   x — across the room, 0 = left wall as you walk in, 105 = right wall
//   d — depth from the storefront glass (0) to the back wall (304)
//   y — height off the floor
//
// Source: "AllStFloorPlan.pdf" (1 mm = 1 in) + venue photos.
// Prints: ~/Desktop/SSM_PRINTS (minus Misc) and ~/Desktop/mtl_metro, exported
// to /public/space/prints at ~32 px per print inch.

export const ROOM = {
  width: 105,
  /** Main gallery, glass → bathroom wall (plan's 304" long-wall dimension). */
  depth: 304,
  /** Not on the plan — estimated from photos using the 80" bathroom door. */
  ceiling: 112,
  baseboard: 4.5,
  /** Full-height chase on the left wall at the entrance. */
  builtIn: { depth: 13.5, length: 74 },
  /** "Switch & distribution box" on the right wall; d measured from back wall. */
  panel: { fromBack: 2, toBack: 26.5, depth: 4.5, bottom: 46, top: 70 },
  /** Bathroom door in the back wall (41" rough opening incl. casing). */
  door: { center: 77.5, width: 33, height: 80, casing: 3.5 },
} as const;

/** Gallery-standard center line for hanging. */
export const EYE_LINE = 57;

export type SizeKey = "8x12" | "10x15" | "12x18" | "16x24" | "20x30";
export const SIZE_KEYS: SizeKey[] = ["8x12", "10x15", "12x18", "16x24", "20x30"];

/** Every photo is 3:2, so a print is just its short side × 1.5. */
const SHORT_SIDE: Record<SizeKey, number> = {
  "8x12": 8,
  "10x15": 10,
  "12x18": 12,
  "16x24": 16,
  "20x30": 20,
};

export const sizeLabel = (size: SizeKey) => size.replace("x", "×");

export type GroupId = "concerts" | "cityscapes" | "cntower" | "montreal" | "street";

export type Group = {
  name: string;
  size: SizeKey;
  /** Placeholder fill + label ink, so groups read apart in 3D. */
  tone: string;
  ink: string;
};

export const GROUPS: Record<GroupId, Group> = {
  concerts: { name: "Concerts", size: "16x24", tone: "#2c303b", ink: "#e9ebf2" },
  cityscapes: { name: "Cityscapes", size: "16x24", tone: "#56687a", ink: "#eef2f6" },
  cntower: { name: "CN Tower", size: "20x30", tone: "#9fb3c3", ink: "#1d2a35" },
  montreal: { name: "Montreal metro", size: "10x15", tone: "#b9ad9b", ink: "#2d2820" },
  street: { name: "Street", size: "8x12", tone: "#8b7462", ink: "#f6efe8" },
};

export const GROUP_ORDER: GroupId[] = ["concerts", "cityscapes", "cntower", "montreal", "street"];

export type Piece = {
  id: string;
  label: string;
  group: GroupId;
  portrait: boolean;
  /** Web copy of the photo, and a 96px thumbnail for the panel. */
  src: string;
  thumb: string;
};

const piece = (group: GroupId, portrait: boolean) => (id: string): Piece => ({
  id,
  label: id,
  group,
  portrait,
  src: `/space/prints/${id}.jpg`,
  thumb: `/space/thumbs/${id}.jpg`,
});

// Mirrors the folders. Concerts are split by orientation.
const CONCERTS_P = [
  "AZ_00075", "DSC02754", "DSC02938", "DSC02979", "DSC03037", "DSC05374",
  "DSC07974", "DSC07994", "DSC08302", "DSC08351", "DSC09550",
];
const CONCERTS_L = [
  "AZ_00097", "DSC00719", "DSC00897", "DSC02916", "DSC07976", "DSC08040",
  "DSC08417", "DSC09966",
];
const CITY = ["DSC08217", "IMG_0348", "IMG_1282", "IMG_1297", "IMG_5583", "IMG_6332", "IMG_8150"];
const CN_TOWER = ["IMG_7893", "IMG_9552"];
const STREET = ["IMG_3790", "IMG_4664", "IMG_5084", "IMG_8266", "IMG_8305", "IMG_9421"];
// mtl_metro minus DSC05580 (Mitul) and the book folder
const MONTREAL = [
  "DSC04527", "DSC05356", "DSC05597", "DSC05603", "DSC05623", "DSC05633",
  "DSC05728", "DSC05804", "DSC05828", "DSC05894", "DSC05912", "DSC05927",
  "DSC05981", "DSC06039", "DSC06171", "DSC06387", "DSC06414", "DSC06643",
  "DSC06693", "DSC06715", "DSC06927", "DSC06939", "DSC07142", "DSC07162",
];

export const PIECES: Piece[] = [
  ...CONCERTS_P.map(piece("concerts", true)),
  ...CONCERTS_L.map(piece("concerts", false)),
  ...CITY.map(piece("cityscapes", false)),
  ...CN_TOWER.map(piece("cntower", true)),
  ...MONTREAL.map(piece("montreal", false)),
  ...STREET.map(piece("street", false)),
];

export const PIECE_BY_ID = new Map(PIECES.map((p) => [p.id, p]));

export type SurfaceId = "right" | "left" | "builtin" | "back";

export type Surface = {
  id: SurfaceId;
  name: string;
  /** Usable run along the wall (plan d for side walls, plan x for the back). */
  from: number;
  to: number;
};

const panelStart = ROOM.depth - ROOM.panel.toBack;
const doorLeft = ROOM.door.center - ROOM.door.width / 2 - ROOM.door.casing;

export const SURFACES: Record<SurfaceId, Surface> = {
  right: { id: "right", name: "Concerts & cityscapes", from: 6, to: panelStart - 3.5 },
  left: { id: "left", name: "Montreal wall", from: ROOM.builtIn.length + 6, to: ROOM.depth - 6 },
  builtin: { id: "builtin", name: "Entrance pillar", from: 5, to: ROOM.builtIn.length - 5 },
  back: { id: "back", name: "Back wall", from: 4, to: doorLeft - 4 },
};

export const SURFACE_ORDER: SurfaceId[] = ["right", "left", "builtin", "back"];

type Segment = {
  /** Pieces fill column-major, `rows` high. Columns sit `gap` apart. */
  pieces?: string[];
  /** Default 1 (a single row). */
  rows?: number;
  /**
   * Or explicit rows, top → bottom, on even columns (`spacing` apart, each as
   * wide as the widest piece). A row with fewer pieces is centered.
   */
  grid?: string[][];
  /**
   * Grid only: lay each row out by its own print widths (`spacing` apart) and
   * center it, instead of sharing columns. Keeps portraits as tight as the
   * landscapes under them.
   */
  pack?: boolean;
  /** Space after this segment, as a multiple of `spacing`. Default 1. */
  gapAfter?: number;
};

type WallPlan = {
  surface: SurfaceId;
  /** Spread shorter multi-row segments to the tallest one's height (flanks). */
  justifyRows?: boolean;
  /** Line up the gutter under the top row across multi-row segments. */
  alignGutters?: boolean;
  segments: Segment[];
};

// Order runs from the storefront toward the back (or left → right on the back
// wall). Pieces not hung by default stay in the plan so toggling them on
// shows exactly what they'd cost.
export const PLAN: WallPlan[] = [
  {
    surface: "right",
    alignGutters: true,
    segments: [
      // Toronto, landscape over landscape. Chicago (DSC08217) waits in reserve.
      {
        grid: [
          ["IMG_0348", "IMG_1282", "IMG_5583", "DSC08217"],
          ["IMG_1297", "IMG_6332", "IMG_8150"],
        ],
        gapAfter: 2,
      },
      // Concerts: 5 portraits over 3 landscapes (Mitul's pick), packed so the
      // portraits sit as close as the landscapes. Reserves follow in each row.
      {
        pack: true,
        grid: [
          ["DSC03037", "DSC09550", "DSC02979", "DSC08351", "DSC05374",
           "DSC07994", "DSC02754", "DSC02938", "DSC08302", "DSC07974", "AZ_00075"],
          ["DSC00719", "DSC09966", "DSC08040",
           "DSC02916", "AZ_00097", "DSC07976", "DSC08417", "DSC00897"],
        ],
      },
    ],
  },
  {
    surface: "left",
    justifyRows: true,
    segments: [
      { pieces: ["IMG_3790", "IMG_5084", "IMG_9421"], rows: 3, gapAfter: 2 },
      // Column by column (4 high), spread so warm / blue / teal / grey mix.
      {
        pieces: [
          "DSC06927", "DSC05927", "DSC05981", "DSC05633",
          "DSC05356", "DSC06715", "DSC05603", "DSC07142",
          "DSC05828", "DSC06387", "DSC07162", "DSC04527",
          "DSC05804", "DSC05912", "DSC06039", "DSC06643",
          "DSC06939", "DSC06171", "DSC05597", "DSC05894",
          "DSC05623", "DSC06414", "DSC06693", "DSC05728",
        ],
        rows: 4,
        gapAfter: 2,
      },
      { pieces: ["IMG_8266", "IMG_8305", "IMG_4664"], rows: 3 },
    ],
  },
  {
    surface: "builtin",
    segments: [{ pieces: ["IMG_7893"] }],
  },
  {
    surface: "back",
    segments: [{ pieces: ["IMG_9552"] }],
  },
];

/** Hung on first load; everything else sits in reserve. */
const RESERVE = new Set([
  "DSC08217",
  "DSC07994", "DSC02754", "DSC02938", "DSC08302", "DSC07974", "AZ_00075",
  "DSC02916", "AZ_00097", "DSC07976", "DSC08417", "DSC00897",
]);

export type FrameWidth = 0 | 1 | 2;

export type HangConfig = {
  sizes: Record<GroupId, SizeKey>;
  hung: Record<string, boolean>;
  /** Frame moulding width per side; 0 = bare mounted print. */
  frame: FrameWidth;
  /** Between prints inside a cluster or grid. */
  gap: number;
  /** Between clusters along a wall. */
  spacing: number;
};

export const defaultConfig = (): HangConfig => ({
  sizes: Object.fromEntries(
    GROUP_ORDER.map((g) => [g, GROUPS[g].size]),
  ) as Record<GroupId, SizeKey>,
  hung: Object.fromEntries(PIECES.map((p) => [p.id, !RESERVE.has(p.id)])),
  frame: 0,
  gap: 3,
  spacing: 6,
});

export type Placed = {
  piece: Piece;
  surface: SurfaceId;
  size: SizeKey;
  portrait: boolean;
  /** Center along the wall run and height, inches. */
  s: number;
  y: number;
  /** Outer size including frame. */
  w: number;
  h: number;
  printW: number;
  printH: number;
};

export type WallReport = {
  surface: Surface;
  count: number;
  used: number;
  available: number;
  /** Inches past the usable run; 0 when it fits. */
  overflow: number;
  top: number;
  bottom: number;
  /** Something lands too close to the ceiling or baseboard. */
  tooTall: boolean;
};

export type Layout = {
  placed: Placed[];
  walls: WallReport[];
  frame: FrameWidth;
};

function measure(piece: Piece, config: HangConfig) {
  const size = config.sizes[piece.group];
  const short = SHORT_SIDE[size];
  const long = short * 1.5;
  const portrait = piece.portrait;
  const printW = portrait ? short : long;
  const printH = portrait ? long : short;
  const f = config.frame * 2;
  return { size, portrait, printW, printH, w: printW + f, h: printH + f };
}

type Cell = ReturnType<typeof measure> & {
  piece: Piece;
  col: number;
  row: number;
  /** Center offset from the segment's start, when the segment sets it directly. */
  x?: number;
};

export function computeLayout(config: HangConfig): Layout {
  const placed: Placed[] = [];
  const walls: WallReport[] = [];

  for (const plan of PLAN) {
    const surface = SURFACES[plan.surface];
    const hungPieces = (ids: string[]) =>
      ids.filter((id) => config.hung[id]).map((id) => PIECE_BY_ID.get(id)!);

    const segments = plan.segments
      .map((seg) => {
        let cells: Cell[];
        let rows: number;
        let cols: number;
        let colW: number[];
        let colGap: number;
        let width: number | undefined;
        if (seg.grid && seg.pack) {
          // Packed rows: each row centered at its own natural width.
          const gridRows = seg.grid.map(hungPieces).filter((r) => r.length > 0);
          rows = gridRows.length;
          colGap = config.spacing;
          const sized = gridRows.map((r) => r.map((piece) => ({ ...measure(piece, config), piece })));
          const rowW = sized.map(
            (r) => r.reduce((s, c) => s + c.w, 0) + (r.length - 1) * colGap,
          );
          width = Math.max(0, ...rowW);
          cells = sized.flatMap((r, row) => {
            let x = (width! - rowW[row]) / 2;
            return r.map((c, i) => {
              const cell = { ...c, row, col: i, x: x + c.w / 2 };
              x += c.w + colGap;
              return cell;
            });
          });
          cols = Math.max(0, ...sized.map((r) => r.length));
          colW = [];
        } else if (seg.grid) {
          // Even grid: shared column width, rows centered on the columns.
          const gridRows = seg.grid.map(hungPieces).filter((r) => r.length > 0);
          rows = gridRows.length;
          cols = Math.max(0, ...gridRows.map((r) => r.length));
          colGap = config.spacing;
          cells = gridRows.flatMap((r, row) =>
            r.map((piece, i) => ({
              ...measure(piece, config),
              piece,
              row,
              col: i + (cols - r.length) / 2,
            })),
          );
          const widest = Math.max(0, ...cells.map((c) => c.w));
          colW = Array.from({ length: cols }, () => widest);
        } else {
          const pieces = hungPieces(seg.pieces ?? []);
          rows = Math.max(1, Math.min(seg.rows ?? 1, pieces.length));
          cols = Math.ceil(pieces.length / rows);
          colGap = config.gap;
          cells = pieces.map((piece, i) => ({
            ...measure(piece, config),
            piece,
            col: Math.floor(i / rows),
            row: i % rows,
          }));
          colW = Array.from({ length: cols }, (_, c) =>
            Math.max(...cells.filter((x) => x.col === c).map((x) => x.w)),
          );
        }
        const rowH = Array.from({ length: rows }, (_, r) =>
          Math.max(...cells.filter((x) => x.row === r).map((x) => x.h)),
        );
        const natural = rowH.reduce((a, b) => a + b, 0) + (rows - 1) * config.gap;
        return {
          cells, rows, cols, colW, colGap, rowH, natural, width,
          rowGap: config.gap,
          gapAfter: seg.gapAfter ?? 1,
        };
      })
      .filter((seg) => seg.cells.length > 0);

    const tallest = segments.reduce<(typeof segments)[number] | null>(
      (best, seg) => (seg.rows > 1 && (!best || seg.natural > best.natural) ? seg : best),
      null,
    );

    if (plan.justifyRows && tallest) {
      for (const seg of segments) {
        if (seg.rows < 2 || seg === tallest) continue;
        const sum = seg.rowH.reduce((a, b) => a + b, 0);
        seg.rowGap = Math.max(config.gap, (tallest.natural - sum) / (seg.rows - 1));
      }
    }

    const heightOf = (seg: (typeof segments)[number]) =>
      seg.rowH.reduce((a, b) => a + b, 0) + (seg.rows - 1) * seg.rowGap;
    const widthOf = (seg: (typeof segments)[number]) =>
      seg.width ?? seg.colW.reduce((a, b) => a + b, 0) + (seg.cols - 1) * seg.colGap;

    // Gutter under the top row, set so the tallest segment centers on the eye line.
    const gutterY =
      plan.alignGutters && tallest
        ? EYE_LINE + tallest.natural / 2 - tallest.rowH[0] - tallest.rowGap / 2
        : null;
    const topOf = (seg: (typeof segments)[number]) =>
      gutterY !== null && seg.rows > 1
        ? gutterY + seg.rowGap / 2 + seg.rowH[0]
        : EYE_LINE + heightOf(seg) / 2;

    const used = segments.reduce(
      (sum, seg, i) =>
        sum + widthOf(seg) + (i < segments.length - 1 ? config.spacing * seg.gapAfter : 0),
      0,
    );
    const available = surface.to - surface.from;

    let cursor = (surface.from + surface.to) / 2 - used / 2;
    let top = 0;
    let bottom = Infinity;

    for (const seg of segments) {
      const colX: number[] = [];
      let x = cursor;
      for (const w of seg.colW) {
        colX.push(x + w / 2);
        x += w + seg.colGap;
      }
      // Grid rows can sit on half-columns when centered, so interpolate.
      const xOf = (col: number) =>
        Number.isInteger(col)
          ? colX[col]
          : cursor + col * (seg.colW[0] + seg.colGap) + seg.colW[0] / 2;
      const rowY: number[] = [];
      let y = topOf(seg);
      for (const h of seg.rowH) {
        rowY.push(y - h / 2);
        y -= h + seg.rowGap;
      }
      for (const cell of seg.cells) {
        const cy = rowY[cell.row];
        top = Math.max(top, cy + cell.h / 2);
        bottom = Math.min(bottom, cy - cell.h / 2);
        placed.push({
          piece: cell.piece,
          surface: surface.id,
          size: cell.size,
          portrait: cell.portrait,
          s: cell.x !== undefined ? cursor + cell.x : xOf(cell.col),
          y: cy,
          w: cell.w,
          h: cell.h,
          printW: cell.printW,
          printH: cell.printH,
        });
      }
      cursor += widthOf(seg) + config.spacing * seg.gapAfter;
    }

    const count = segments.reduce((n, seg) => n + seg.cells.length, 0);
    walls.push({
      surface,
      count,
      used,
      available,
      overflow: Math.max(0, used - available),
      top: count ? top : 0,
      bottom: count ? bottom : 0,
      tooTall: count > 0 && (top > ROOM.ceiling - 6 || bottom < ROOM.baseboard + 6),
    });
  }

  return { placed, walls, frame: config.frame };
}

/** 112 → 9′ 4″ */
export const feet = (inches: number) => {
  const ft = Math.floor(inches / 12);
  const rem = Math.round(inches - ft * 12);
  return rem ? `${ft}′ ${rem}″` : `${ft}′`;
};

export const inches = (n: number) => `${Math.round(n * 10) / 10}″`;
