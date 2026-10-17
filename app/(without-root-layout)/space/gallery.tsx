"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  GROUPS,
  GROUP_ORDER,
  PIECES,
  ROOM,
  SIZE_KEYS,
  computeLayout,
  defaultConfig,
  feet,
  inches,
  sizeLabel,
  type FrameWidth,
  type GroupId,
  type HangConfig,
  type SizeKey,
} from "./hang";
import { GalleryScene, STOPS } from "./scene";

const STORAGE_KEY = "space-hang:v6";

function loadSaved(): HangConfig | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as Partial<HangConfig>;
    const base = defaultConfig();
    return {
      ...base,
      ...saved,
      sizes: { ...base.sizes, ...saved.sizes },
      hung: { ...base.hung, ...saved.hung },
    };
  } catch {
    return null;
  }
}

const isField = (t: EventTarget | null) =>
  t instanceof HTMLElement &&
  (t.tagName === "INPUT" || t.tagName === "SELECT" || t.tagName === "TEXTAREA");

export default function Gallery() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<GalleryScene | null>(null);
  const stopRef = useRef(0);
  const [config, setConfig] = useState<HangConfig>(defaultConfig);
  const [loaded, setLoaded] = useState(false);
  const [stop, setStop] = useState(0);
  const [people, setPeople] = useState(true);
  const [guides, setGuides] = useState(false);
  const [faces, setFaces] = useState<"photos" | "names">("photos");
  const [panelOpen, setPanelOpen] = useState(true);
  const [webgl, setWebgl] = useState(true);

  const layout = useMemo(() => computeLayout(config), [config]);

  const go = (i: number) => {
    const next = (i + STOPS.length) % STOPS.length;
    stopRef.current = next;
    setStop(next);
    sceneRef.current?.goTo(next);
  };

  // Effects run in order: scene → saved config → layout → first camera.
  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    let scene: GalleryScene;
    try {
      scene = new GalleryScene(
        el,
        matchMedia("(prefers-reduced-motion: reduce)").matches,
      );
    } catch {
      setWebgl(false);
      return;
    }
    sceneRef.current = scene;
    return () => {
      scene.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    const saved = loadSaved();
    if (saved) setConfig(saved);
    setLoaded(true);
    if (matchMedia("(max-width: 767px)").matches) setPanelOpen(false);
  }, []);

  useEffect(() => {
    sceneRef.current?.setLayout(layout);
  }, [layout]);

  // Keep the 3D view centered in the area the panel doesn't cover.
  const firstInset = useRef(true);
  useEffect(() => {
    const desktop = matchMedia("(min-width: 768px)");
    const apply = () => {
      sceneRef.current?.setInset(panelOpen && desktop.matches ? 340 : 0, firstInset.current);
      firstInset.current = false;
    };
    apply();
    desktop.addEventListener("change", apply);
    return () => desktop.removeEventListener("change", apply);
  }, [panelOpen]);

  useEffect(() => {
    const param = Number(new URLSearchParams(location.search).get("stop"));
    const first = Number.isInteger(param) && param > 0 && param < STOPS.length ? param : 0;
    stopRef.current = first;
    setStop(first);
    sceneRef.current?.goTo(first, true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [config, loaded]);

  useEffect(() => sceneRef.current?.setPeople(people), [people]);
  useEffect(() => sceneRef.current?.setGuides(guides), [guides]);
  useEffect(() => sceneRef.current?.setFaces(faces), [faces]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isField(e.target)) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(stopRef.current + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(stopRef.current - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const counts = useMemo(() => {
    const out = Object.fromEntries(
      GROUP_ORDER.map((g) => [g, { hung: 0, total: 0 }]),
    ) as Record<GroupId, { hung: number; total: number }>;
    for (const p of PIECES) {
      out[p.group].total++;
      if (config.hung[p.id]) out[p.group].hung++;
    }
    return out;
  }, [config.hung]);

  const update = (patch: Partial<HangConfig>) =>
    setConfig((c) => ({ ...c, ...patch }));
  const setHung = (ids: string[], on: boolean) =>
    setConfig((c) => ({
      ...c,
      hung: { ...c.hung, ...Object.fromEntries(ids.map((id) => [id, on])) },
    }));
  const setSize = (g: GroupId, size: SizeKey) =>
    setConfig((c) => ({ ...c, sizes: { ...c.sizes, [g]: size } }));

  const overflowing = layout.walls.some((w) => w.overflow > 0 || w.tooTall);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-[#e7e5e0] text-[#1c1c1a]">
      <div ref={mountRef} className="absolute inset-0" />

      {!webgl && (
        <p className="absolute inset-0 grid place-items-center p-8 text-center text-[14px] text-[#6b6a66]">
          This mock needs WebGL, which isn&apos;t available in this browser.
        </p>
      )}

      <header className="pointer-events-none absolute left-3 right-3 top-3 rounded-[14px] bg-white/95 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-[rgba(0,0,0,0.06)] md:right-auto md:max-w-[360px]">
        <h1 className="text-[15px] font-medium tracking-[-0.01em]">
          All Street Gallery · hang mock
        </h1>
        <p className="mt-1 text-[12px] leading-[1.5] text-[#5f5e5a]">
          77 E 3rd St. Room is {ROOM.width}″ × {ROOM.depth}″ ({feet(ROOM.width)} ×{" "}
          {feet(ROOM.depth)}), ceiling ≈ {feet(ROOM.ceiling)} (estimated). Every
          placeholder is drawn at true print size.
        </p>
        <p className="mt-2 hidden text-[11.5px] leading-[1.5] text-[#8a8984] md:block">
          Drag to orbit · right-drag to pan · scroll to zoom · WASD to walk
          (Shift for faster) · ← → for views
        </p>
      </header>

      {!panelOpen && (
        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          className="absolute bottom-[104px] right-3 flex items-center gap-2 rounded-[10px] md:bottom-auto md:top-3 bg-white/95 px-3 py-2 text-[13px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] ring-1 ring-[rgba(0,0,0,0.06)] transition-transform duration-150 ease-out active:scale-[0.97]"
        >
          {overflowing && <span className="size-2 rounded-full bg-[#d13438]" />}
          Hang plan · {layout.placed.length}/{PIECES.length}
        </button>
      )}

      <aside
        inert={!panelOpen}
        className={`absolute inset-x-2 bottom-2 z-10 flex max-h-[64dvh] flex-col overflow-hidden rounded-[14px] bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-[rgba(0,0,0,0.06)] transition-[opacity,translate] duration-200 ease-out md:inset-x-auto md:bottom-3 md:right-3 md:top-3 md:max-h-none md:w-[328px] ${
          panelOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[rgba(0,0,0,0.06)] px-4 py-3">
          <div>
            <h2 className="text-[13px] font-medium">Hang plan</h2>
            <p className="text-[12px] tabular-nums text-[#6b6a66]">
              {layout.placed.length} of {PIECES.length} prints on the walls
            </p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setConfig(defaultConfig())}
              className="rounded-[8px] px-2 py-1 text-[12px] text-[#6b6a66] transition-colors hover:bg-[#ecebe7] hover:text-[#1c1c1a]"
            >
              Reset
            </button>
            <button
              type="button"
              aria-label="Hide hang plan"
              onClick={() => setPanelOpen(false)}
              className="grid size-7 place-items-center rounded-[8px] text-[#6b6a66] transition-colors hover:bg-[#ecebe7] hover:text-[#1c1c1a]"
            >
              <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <Section title="Walls">
            <ul className="space-y-3">
              {layout.walls.map((w) => {
                const over = w.overflow > 0;
                return (
                  <li key={w.surface.id}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-[13px]">{w.surface.name}</span>
                      <span
                        className={`text-[12px] tabular-nums ${over ? "text-[#d13438]" : "text-[#6b6a66]"}`}
                      >
                        {inches(w.used)} / {inches(w.available)}
                      </span>
                    </div>
                    <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-[#e6e4df]">
                      <div
                        className={`h-full rounded-full transition-[width] duration-200 ease-out ${over ? "bg-[#d13438]" : "bg-[#1c1c1a]"}`}
                        style={{ width: `${Math.min(1, w.used / w.available) * 100}%` }}
                      />
                    </div>
                    <p className="mt-1 text-[11.5px] tabular-nums text-[#8a8984]">
                      {w.count} {w.count === 1 ? "print" : "prints"} ·{" "}
                      {over ? (
                        <span className="text-[#d13438]">over by {inches(w.overflow)}</span>
                      ) : (
                        `${inches(w.available - w.used)} to spare`
                      )}
                      {w.count > 0 && ` · ${inches(w.bottom)}–${inches(w.top)} high`}
                      {w.tooTall && <span className="text-[#d13438]"> · too tall</span>}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Section>

          <Section title="Prints">
            <ul className="divide-y divide-[rgba(0,0,0,0.05)]">
              {GROUP_ORDER.map((g) => {
                const group = GROUPS[g];
                const pieces = PIECES.filter((p) => p.group === g);
                return (
                  <li key={g} className="py-2.5 first:pt-0">
                    <div className="flex items-center gap-2.5">
                      <span
                        aria-hidden
                        className="size-3 shrink-0 rounded-[3px] ring-1 ring-[rgba(0,0,0,0.08)]"
                        style={{ background: group.tone }}
                      />
                      <span className="flex-1 text-[13px]">
                        {group.name}{" "}
                        <span className="tabular-nums text-[#8a8984]">
                          {counts[g].hung}/{counts[g].total}
                        </span>
                      </span>
                      <select
                        aria-label={`${group.name} print size`}
                        value={config.sizes[g]}
                        onChange={(e) => setSize(g, e.target.value as SizeKey)}
                        className="rounded-[7px] bg-[#ecebe7] px-1.5 py-1 text-[12px] tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1a]"
                      >
                        {SIZE_KEYS.map((s) => (
                          <option key={s} value={s}>
                            {sizeLabel(s)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <details className="group mt-1.5">
                      <summary className="flex cursor-pointer list-none items-center gap-1 text-[11.5px] text-[#8a8984] transition-colors hover:text-[#1c1c1a] [&::-webkit-details-marker]:hidden">
                        <svg
                          viewBox="0 0 16 16"
                          className="size-2.5 transition-transform duration-150 group-open:rotate-90"
                          aria-hidden
                        >
                          <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        </svg>
                        Choose prints
                      </summary>
                      <div className="mt-2 flex gap-2 text-[11.5px]">
                        <button
                          type="button"
                          className="text-[#6b6a66] underline-offset-2 hover:underline"
                          onClick={() => setHung(pieces.map((p) => p.id), true)}
                        >
                          All
                        </button>
                        <button
                          type="button"
                          className="text-[#6b6a66] underline-offset-2 hover:underline"
                          onClick={() => setHung(pieces.map((p) => p.id), false)}
                        >
                          None
                        </button>
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
                        {pieces.map((p) => {
                          const on = !!config.hung[p.id];
                          return (
                            <label
                              key={p.id}
                              className="flex min-w-0 cursor-pointer items-center gap-2 text-[12px]"
                            >
                              <input
                                type="checkbox"
                                checked={on}
                                onChange={(e) => setHung([p.id], e.target.checked)}
                                className="shrink-0 accent-[#1c1c1a]"
                              />
                              {/* Fixed slot so names line up across orientations */}
                              <span className="grid size-[30px] shrink-0 place-items-center">
                                <img
                                  src={p.thumb}
                                  alt=""
                                  loading="lazy"
                                  decoding="async"
                                  className={`rounded-[2px] object-cover ring-1 ring-[rgba(0,0,0,0.08)] transition-opacity duration-150 ${
                                    p.portrait ? "h-[30px] w-[20px]" : "h-[20px] w-[30px]"
                                  } ${on ? "opacity-100" : "opacity-35"}`}
                                />
                              </span>
                              <span className={`truncate ${on ? "" : "text-[#8a8984]"}`}>
                                {p.label}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </details>
                  </li>
                );
              })}
            </ul>
          </Section>

          <Section title="Hanging">
            <div className="space-y-3.5">
              <Field label="Frame">
                <Segmented<FrameWidth>
                  label="Frame width"
                  value={config.frame}
                  onChange={(frame) => update({ frame })}
                  options={[
                    { value: 0, label: "None" },
                    { value: 1, label: "1″" },
                    { value: 2, label: "2″" },
                  ]}
                />
              </Field>
              <Field label="Prints show">
                <Segmented<"photos" | "names">
                  label="Prints show"
                  value={faces}
                  onChange={setFaces}
                  options={[
                    { value: "photos", label: "Photos" },
                    { value: "names", label: "File names" },
                  ]}
                />
              </Field>
              <Range
                label="Gap inside clusters"
                value={config.gap}
                min={1}
                max={6}
                onChange={(gap) => update({ gap })}
              />
              <Range
                label="Space between clusters"
                value={config.spacing}
                min={2}
                max={12}
                onChange={(spacing) => update({ spacing })}
              />
              <Switch label="People for scale (5′7″)" checked={people} onChange={setPeople} />
              <Switch label="57″ eye line + wall limits" checked={guides} onChange={setGuides} />
            </div>
          </Section>
        </div>
      </aside>

      <nav
        aria-label="Views"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-3 md:right-[340px] md:p-4"
      >
        <div className="pointer-events-auto flex items-center gap-1 rounded-[14px] bg-white/95 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-[rgba(0,0,0,0.06)]">
          <NavButton label="Previous view" onClick={() => go(stop - 1)}>
            <path d="M10 3 5 8l5 5" />
          </NavButton>
          <div className="w-[220px] px-1 text-center sm:w-[250px]">
            <p className="text-[13px] font-medium">{STOPS[stop].name}</p>
            <p className="truncate text-[11.5px] text-[#6b6a66]">{STOPS[stop].note}</p>
            <div className="mt-1.5 flex justify-center gap-1">
              {STOPS.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  aria-label={s.name}
                  aria-current={i === stop}
                  onClick={() => go(i)}
                  className="group grid h-3 w-3 place-items-center"
                >
                  <span
                    className={`block h-[5px] rounded-full transition-[width,background-color] duration-200 ease-out ${
                      i === stop ? "w-3 bg-[#1c1c1a]" : "w-[5px] bg-[#c9c7c1] group-hover:bg-[#8a8984]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <NavButton label="Next view" onClick={() => go(stop + 1)}>
            <path d="m6 3 5 5-5 5" />
          </NavButton>
        </div>
      </nav>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pt-4">
      <h3 className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.06em] text-[#8a8984]">
        {title}
      </h3>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <p className="text-[13px]">{label}</p>
      {children}
    </div>
  );
}

function Segmented<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex rounded-[8px] bg-[#ecebe7] p-0.5">
      {options.map((o) => {
        const on = o.value === value;
        return (
          <button
            key={String(o.value)}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(o.value)}
            className={`flex-1 rounded-[6px] px-2 py-1 text-[12px] transition-[background-color,color,box-shadow] duration-150 ease-out ${
              on
                ? "bg-white text-[#1c1c1a] shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                : "text-[#6b6a66] hover:text-[#1c1c1a]"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function Range({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block space-y-1">
      <span className="flex justify-between text-[13px]">
        {label}
        <span className="tabular-nums text-[#6b6a66]">{inches(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={0.5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#1c1c1a]"
      />
    </label>
  );
}

function Switch({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 text-[13px]">
      {label}
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <span
        aria-hidden
        className="relative h-[18px] w-[30px] shrink-0 rounded-full bg-[#d9d7d2] transition-colors duration-150 after:absolute after:left-[2px] after:top-[2px] after:size-[14px] after:rounded-full after:bg-white after:shadow-[0_1px_2px_rgba(0,0,0,0.2)] after:transition-transform after:duration-150 peer-checked:bg-[#1c1c1a] peer-checked:after:translate-x-[12px] peer-focus-visible:ring-2 peer-focus-visible:ring-[#1c1c1a] peer-focus-visible:ring-offset-2"
      />
    </label>
  );
}

function NavButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-9 place-items-center rounded-[10px] text-[#3a3936] transition-[background-color,scale] duration-150 ease-out hover:bg-[#ecebe7] active:scale-[0.96]"
    >
      <svg
        viewBox="0 0 16 16"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {children}
      </svg>
    </button>
  );
}
