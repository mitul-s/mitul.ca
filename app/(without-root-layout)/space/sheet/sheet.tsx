"use client";

import { useEffect, useMemo, useState } from "react";
import { catalog } from "../../prints/catalog";
import {
  EYE_LINE,
  ROOM,
  SURFACES,
  SURFACE_ORDER,
  computeLayout,
  defaultConfig,
  sizeLabel,
  type HangConfig,
  type Placed,
  type SurfaceId,
} from "../hang";
import { loadSaved } from "../saved";

/** Same numbers as /prints, so the sheet doubles as the wall-label key. */
const NUMBER = new Map(catalog().flatMap((s) => s.items.map((i) => [i.id, i.no] as const)));

/**
 * How each wall is measured on site, drawn the way you see it standing in the
 * room facing it. `start` is the plan position of the reference edge.
 */
const WALLS: Record<
  SurfaceId,
  { title: string; from: string; start: number; end: number; flip: boolean }
> = {
  right: {
    title: "Concerts & cityscapes · right wall",
    from: "the front glass",
    start: 0,
    end: ROOM.depth,
    flip: true, // facing it, the storefront is on your right
  },
  left: {
    title: "Montreal wall · left wall",
    from: "the back edge of the entrance pillar",
    start: ROOM.builtIn.length,
    end: ROOM.depth,
    flip: false,
  },
  builtin: {
    title: "Entrance pillar",
    from: "the front glass",
    start: 0,
    end: ROOM.builtIn.length,
    flip: false,
  },
  back: {
    title: "Back wall",
    from: "the left corner",
    start: 0,
    end: ROOM.width,
    flip: false,
  },
};

const EIGHTHS = ["", "⅛", "¼", "⅜", "½", "⅝", "¾", "⅞"];

/** Tape-measure inches, to the nearest ⅛″. */
function inches(v: number) {
  const e = Math.round(v * 8);
  const whole = Math.floor(e / 8);
  const frac = EIGHTHS[e % 8];
  return `${whole || !frac ? whole : ""}${frac}″`;
}

/** 61⅜″ (5′ 1⅜″) for anything past a foot. */
function span(v: number) {
  const e = Math.round(v * 8);
  const ft = Math.floor(e / 96);
  const rest = e - ft * 96;
  if (!ft) return inches(v);
  return `${inches(v)} (${ft}′${rest ? ` ${inches(rest / 8)}` : ""})`;
}

export default function Sheet() {
  const [config, setConfig] = useState<HangConfig>(defaultConfig);
  const [source, setSource] = useState<"default" | "saved">("default");

  useEffect(() => {
    const saved = loadSaved();
    if (saved) {
      setConfig(saved);
      setSource("saved");
    }
  }, []);

  const layout = useMemo(() => computeLayout(config), [config]);
  const moved = Object.keys(config.slots).length;

  return (
    <div className="min-h-dvh bg-white text-[#1c1c1a] print:min-h-0">
      <style>{"@page { size: letter landscape; margin: 0.4in; }"}</style>
      <main className="mx-auto max-w-[1100px] px-6 py-10 print:max-w-none print:p-0">
        <header className="flex flex-wrap items-end justify-between gap-4 print:hidden">
          <div>
            <h1 className="text-[18px] font-medium">Hanging sheet</h1>
            <p className="mt-1 text-[13px] text-[#6b6a66]">
              {source === "saved"
                ? `Your layout from /space in this browser${moved ? `, ${moved} prints moved from the plan` : ""}.`
                : "Default layout."}{" "}
              {layout.placed.length} prints. Numbers match the print list.
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="/space"
              className="rounded-[9px] px-3 py-1.5 text-[13px] text-[#1c1c1a] ring-1 ring-[rgba(0,0,0,0.12)] transition-colors hover:bg-[#f2f1ee]"
            >
              Back to the mock
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-[9px] bg-[#1c1c1a] px-3 py-1.5 text-[13px] font-medium text-white transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              Print
            </button>
          </div>
        </header>

        <p className="mt-6 max-w-[70ch] text-pretty text-[13px] leading-[1.55] text-[#3a3936] print:mt-0 print:text-[10px]">
          Distances run along each wall from the edge named in its heading. Heights are
          from the floor; the red line is the 57″ centre line. Hook height depends on your
          hardware: measure from the top of the print down to the taut wire (or the
          sawtooth) and subtract that from the top-edge height.
        </p>

        {SURFACE_ORDER.map((id, i) => {
          const placed = layout.placed.filter((p) => p.surface === id);
          if (!placed.length) return null;
          return <Wall key={id} id={id} placed={placed} first={i === 0} />;
        })}
      </main>
    </div>
  );
}

function Wall({ id, placed, first }: { id: SurfaceId; placed: Placed[]; first: boolean }) {
  const wall = WALLS[id];
  const surface = SURFACES[id];
  const from = (s: number) => s - wall.start;
  const rows = [...placed].sort((a, b) => from(a.s) - from(b.s) || b.y - a.y);

  return (
    <section className={`mt-12 ${first ? "" : "print:break-before-page"} print:mt-0 print:pt-2`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[rgba(0,0,0,0.12)] pb-2">
        <h2 className="text-[15px] font-medium print:text-[12px]">{wall.title}</h2>
        <p className="text-[12px] text-[#6b6a66] print:text-[9px]">
          {placed.length} {placed.length === 1 ? "print" : "prints"} · measured from {wall.from} ·
          usable {inches(from(surface.from))}–{inches(from(surface.to))}
        </p>
      </div>

      <Elevation id={id} placed={placed} />

      <table className="mt-4 w-full border-collapse text-left text-[12px] print:mt-2 print:text-[8.5px]">
        <thead className="text-[#6b6a66]">
          <tr className="border-b border-[rgba(0,0,0,0.12)]">
            <th className="py-1.5 pr-3 font-normal">No.</th>
            <th className="py-1.5 pr-3 font-normal">Print</th>
            <th className="py-1.5 pr-3 font-normal">Size</th>
            <th className="py-1.5 pr-3 font-normal">Centre from {wall.from.replace("the ", "")}</th>
            <th className="py-1.5 pr-3 font-normal">Spans</th>
            <th className="py-1.5 pr-3 font-normal">Top edge</th>
            <th className="py-1.5 font-normal">Centre height</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p) => (
            <tr key={p.slot} className="border-b border-[rgba(0,0,0,0.06)] break-inside-avoid">
              <td className="py-1 pr-3 font-medium">{NUMBER.get(p.piece.id) ?? "—"}</td>
              <td className="py-1 pr-3">
                <span className="flex items-center gap-2">
                  <img
                    src={p.piece.thumb}
                    alt=""
                    className={`shrink-0 rounded-[1px] object-cover ${p.portrait ? "h-6 w-4" : "h-4 w-6"} print:hidden`}
                  />
                  {p.piece.id}
                </span>
              </td>
              <td className="py-1 pr-3">{sizeLabel(p.size)}</td>
              <td className="py-1 pr-3">{span(from(p.s))}</td>
              <td className="py-1 pr-3 text-[#6b6a66]">
                {inches(from(p.s - p.w / 2))} → {inches(from(p.s + p.w / 2))}
              </td>
              <td className="py-1 pr-3">{inches(p.y + p.h / 2)}</td>
              <td className="py-1">{inches(p.y)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

/** To-scale elevation in inches, as seen facing the wall. */
function Elevation({ id, placed }: { id: SurfaceId; placed: Placed[] }) {
  const wall = WALLS[id];
  const surface = SURFACES[id];
  const width = wall.end - wall.start;
  const H = ROOM.ceiling;
  const x = (s: number) => (wall.flip ? wall.end - s : s - wall.start);
  const y = (h: number) => H - h;
  const refX = wall.flip ? width : 0;
  const door = ROOM.door;
  const panel = ROOM.panel;

  return (
    <svg
      viewBox={`-8 -8 ${width + 16} ${H + 22}`}
      className="mt-4 h-auto w-full print:mt-2 print:max-h-[4.6in]"
      role="img"
      aria-label={`${wall.title}, to scale, with ${placed.length} prints`}
    >
      <rect x={0} y={0} width={width} height={H} fill="#fbfbfa" stroke="#1c1c1a" strokeWidth={0.4} />

      {/* Usable run */}
      {[surface.from, surface.to].map((s) => (
        <line
          key={s}
          x1={x(s)}
          x2={x(s)}
          y1={0}
          y2={H}
          stroke="#c9c7c1"
          strokeWidth={0.3}
          strokeDasharray="1.5 1.5"
        />
      ))}

      {/* Fixtures that matter for placement */}
      {id === "back" && (
        <rect
          x={x(door.center - door.width / 2)}
          y={y(door.height)}
          width={door.width}
          height={door.height}
          fill="#f0efeb"
          stroke="#8a8984"
          strokeWidth={0.3}
        />
      )}
      {id === "right" && (
        <rect
          x={x(ROOM.depth - panel.fromBack)}
          y={y(panel.top)}
          width={panel.toBack - panel.fromBack}
          height={panel.top - panel.bottom}
          fill="#f0efeb"
          stroke="#8a8984"
          strokeWidth={0.3}
        />
      )}

      <line
        x1={0}
        x2={width}
        y1={y(EYE_LINE)}
        y2={y(EYE_LINE)}
        stroke="#ed1717"
        strokeWidth={0.3}
        strokeDasharray="2 1.5"
      />

      {placed.map((p) => {
        const cx = x(p.s);
        const cy = y(p.y);
        const no = NUMBER.get(p.piece.id);
        return (
          <g key={p.slot}>
            <image
              href={p.piece.thumb}
              x={cx - p.printW / 2}
              y={cy - p.printH / 2}
              width={p.printW}
              height={p.printH}
              preserveAspectRatio="xMidYMid slice"
            />
            <rect
              x={cx - p.w / 2}
              y={cy - p.h / 2}
              width={p.w}
              height={p.h}
              fill="none"
              stroke="#1c1c1a"
              strokeWidth={0.25}
            />
            {no !== undefined && (
              <g>
                <rect
                  x={cx - p.printW / 2 + 0.6}
                  y={cy + p.printH / 2 - 3.8}
                  width={String(no).length * 1.7 + 1.8}
                  height={3.2}
                  rx={0.6}
                  fill="#ffffff"
                />
                <text
                  x={cx - p.printW / 2 + 1.5}
                  y={cy + p.printH / 2 - 1.35}
                  fontSize={2.6}
                  fontWeight={600}
                  fill="#1c1c1a"
                >
                  {no}
                </text>
              </g>
            )}
          </g>
        );
      })}

      {/* Reference edge */}
      <line x1={refX} x2={refX} y1={-6} y2={H + 4} stroke="#1c1c1a" strokeWidth={0.6} />
      <text
        x={refX + (wall.flip ? -1.5 : 1.5)}
        y={H + 9}
        fontSize={3.4}
        textAnchor={wall.flip ? "end" : "start"}
        fill="#1c1c1a"
      >
        {wall.flip ? `measured from ${wall.from} →` : `← measured from ${wall.from}`}
      </text>
      <text x={wall.flip ? 1 : width - 1} y={H + 9} fontSize={3} textAnchor={wall.flip ? "start" : "end"} fill="#8a8984">
        floor
      </text>
    </svg>
  );
}
