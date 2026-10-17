"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";
import type { CatalogItem, CatalogSection } from "./catalog";

const POLL_MS = 15_000;

/**
 * The page itself can be a minute stale, so check right away, then every
 * 15s while the tab is visible and whenever it comes back into view.
 */
function useLiveSold(initial: string[]) {
  const [sold, setSold] = useState(initial);
  useEffect(() => {
    let alive = true;
    const pull = async () => {
      if (document.visibilityState !== "visible") return;
      try {
        const res = await fetch("/api/prints/sold", { cache: "no-store" });
        if (!res.ok) return;
        const data: { sold: string[] | null } = await res.json();
        if (alive && Array.isArray(data.sold)) setSold(data.sold);
      } catch {
        // Offline or a blip; keep what we have and try again next tick.
      }
    };
    pull();
    const timer = window.setInterval(pull, POLL_MS);
    document.addEventListener("visibilitychange", pull);
    return () => {
      alive = false;
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", pull);
    };
  }, []);
  return sold;
}

const VENMO = "mitulito";

const pad = (n: number) => String(n).padStart(2, "0");
const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const USD = { style: "currency", currency: "USD", maximumFractionDigits: 0 } as const;

/** Snappier than NumberFlow's 900ms default roll; same feel, less wait. */
const FLOW_TIMING = {
  transformTiming: { duration: 550, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
  opacityTiming: { duration: 275, easing: "ease-out" },
} as const;

/** Same query works for the app scheme and Venmo's web pay page. */
function venmoQuery(items: CatalogItem[], total: number) {
  const note = `Somebody Save Mitul prints ${items.map((i) => `#${pad(i.no)}`).join(" ")}`;
  return `txn=pay&recipients=${VENMO}&amount=${total.toFixed(2)}&note=${encodeURIComponent(note)}`;
}

/**
 * Phones: try the Venmo app first. If the page is still in front after a
 * beat, the app isn't installed, so fall back to the web pay page.
 */
function openVenmo(query: string, event: React.MouseEvent<HTMLAnchorElement>) {
  if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) return; // desktop: follow href
  event.preventDefault();
  const web = event.currentTarget.href;
  const fallback = window.setTimeout(() => {
    if (document.visibilityState === "visible") window.location.href = web;
  }, 1500);
  document.addEventListener(
    "visibilitychange",
    () => document.visibilityState === "hidden" && window.clearTimeout(fallback),
    { once: true },
  );
  window.location.href = `venmo://paycharge?${query}`;
}

export default function PrintList({
  sections,
  initialSold,
}: {
  sections: CatalogSection[];
  initialSold: string[];
}) {
  const sold = useLiveSold(initialSold);
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  // A pick that sells while someone's browsing drops out of the total.
  const chosen = sections
    .flatMap((s) => s.items)
    .filter((i) => picked.includes(i.id) && !sold.includes(i.id));
  const open = chosen.length > 0;

  // While the bar animates out, keep showing the last selection so its text
  // and buttons don't snap to the empty state mid-exit.
  const chosenKey = chosen.map((i) => i.id).join(",");
  const [held, setHeld] = useState<{ key: string; items: CatalogItem[] }>({ key: "", items: [] });
  if (open && chosenKey !== held.key) setHeld({ key: chosenKey, items: chosen });
  const shown = open ? chosen : held.items;

  const priced = shown.every((i) => i.price !== null);
  const total = shown.reduce((sum, i) => sum + (i.price ?? 0), 0);

  return (
    <>
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.group}>
            <h2 className="flex items-baseline justify-between border-b border-[rgba(0,0,0,0.12)] pb-2 text-[13px]">
              <span className="font-medium">{section.series}</span>
              <span className="text-[#8a8984]">{section.size} in</span>
            </h2>
            {section.about && (
              <p className="mt-2.5 max-w-[52ch] text-pretty text-[13px] leading-[1.5] text-[#6b6a66]">
                {section.about.blurb}
                {section.about.link && (
                  <>
                    {" "}
                    <a
                      href={section.about.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111] underline decoration-[rgba(0,0,0,0.25)] underline-offset-2"
                    >
                      {section.about.link.label.replace(/ (\S+)$/, "\u00a0$1")}
                    </a>
                    .
                  </>
                )}
              </p>
            )}
            {/* Rows share a bottom edge so captions line up across orientations */}
            <ul className="mt-4 grid grid-cols-2 items-end gap-x-3 gap-y-6 sm:grid-cols-3">
              {section.items.map((item) => {
                const isSold = sold.includes(item.id);
                const on = picked.includes(item.id) && !isSold;
                const price = item.price !== null ? usd(item.price) : "—";
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-pressed={on}
                      aria-label={`No. ${item.no}, ${item.series}, ${item.size}, ${isSold ? "sold" : price}`}
                      disabled={isSold}
                      onClick={() => toggle(item.id)}
                      className="block w-full select-none text-left transition-[scale] duration-150 ease-out [-webkit-touch-callout:none] enabled:active:scale-[0.98] disabled:cursor-default"
                    >
                      {/* Tile matches the photo's own 3:2, so nothing is cropped */}
                      <span
                        className={`relative block overflow-hidden rounded-[3px] bg-[#eceef1] outline-2 outline-offset-2 transition-[outline-color] duration-150 ease-out ${
                          item.portrait ? "aspect-[2/3]" : "aspect-[3/2]"
                        } ${on ? "outline outline-[#111]" : "outline-transparent"}`}
                      >
                        <img
                          src={item.src}
                          draggable={false}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className={`pointer-events-none absolute inset-0 h-full w-full select-none object-cover ${isSold ? "opacity-45" : ""}`}
                        />
                        {!isSold && (
                          <span
                            aria-hidden
                            className={`absolute right-2 top-2 grid size-5 place-items-center rounded-full border transition-[background-color,border-color] duration-150 ${
                              on
                                ? "border-[#111] bg-[#111] text-white"
                                : "border-[rgba(0,0,0,0.16)] bg-white/80"
                            }`}
                          >
                            <svg viewBox="0 0 12 12" className={`size-2.5 ${on ? "" : "hidden"}`}>
                              <path
                                d="M2.5 6.2 5 8.5l4.5-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        )}
                      </span>
                      <span className="mt-1.5 flex items-baseline justify-between text-[12px]">
                        <span className="text-[#a3a29d]">{pad(item.no)}</span>
                        {isSold ? (
                          <span className="inline-flex items-center gap-1.5 text-[#6b6a66]">
                            <span aria-hidden className="size-2 rounded-full bg-[#ed1717]" />
                            Sold
                          </span>
                        ) : (
                          <span className="text-[#3a3936]">{price}</span>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <div
        aria-live="polite"
        className={`fixed inset-x-0 bottom-0 px-4 pb-[max(16px,env(safe-area-inset-bottom))] transition-[opacity,translate] duration-200 ease-out ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[520px] items-center gap-3 rounded-[14px] bg-[#111] py-2 pl-4 pr-2 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
          <p className="flex-1 text-[13px]">
            {/* NumberFlow keeps every digit in the DOM for the roll, so screen
                readers get the plain sentence instead. */}
            <span aria-hidden>
              <NumberFlow value={shown.length} locales="en-US" {...FLOW_TIMING} />{" "}
              {shown.length === 1 ? "print" : "prints"}
              {priced && (
                <span className="text-white/60">
                  {" · "}
                  <NumberFlow value={total} locales="en-US" format={USD} {...FLOW_TIMING} />
                </span>
              )}
            </span>
            <span className="sr-only">
              {shown.length} {shown.length === 1 ? "print" : "prints"}
              {priced && `, ${usd(total)}`}
            </span>
          </p>
          <button
            type="button"
            onClick={() => setPicked([])}
            className="rounded-[9px] px-2.5 py-1.5 text-[13px] text-white/70 transition-[color,scale] duration-150 ease-out hover:text-white active:scale-[0.96]"
          >
            Clear
          </button>
          {priced && (
            <a
              href={`https://account.venmo.com/pay?${venmoQuery(shown, total)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openVenmo(venmoQuery(shown, total), e)}
              className="rounded-[9px] bg-white px-3 py-1.5 text-[13px] font-medium text-[#111] transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              Pay with Venmo
            </a>
          )}
        </div>
      </div>
    </>
  );
}
