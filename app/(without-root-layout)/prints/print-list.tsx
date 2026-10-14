"use client";

import { useState } from "react";
import type { CatalogItem, CatalogSection } from "./catalog";

const VENMO = "mitulito";

const pad = (n: number) => String(n).padStart(2, "0");
const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

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

export default function PrintList({ sections }: { sections: CatalogSection[] }) {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const chosen = sections.flatMap((s) => s.items).filter((i) => picked.includes(i.id));
  const priced = chosen.every((i) => i.price !== null);
  const total = chosen.reduce((sum, i) => sum + (i.price ?? 0), 0);

  return (
    <>
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.group}>
            <h2 className="flex items-baseline justify-between border-b border-[rgba(0,0,0,0.12)] pb-2 text-[13px]">
              <span className="font-medium">{section.series}</span>
              <span className="tabular-nums text-[#8a8984]">{section.size} in</span>
            </h2>
            {/* Rows share a bottom edge so captions line up across orientations */}
            <ul className="mt-4 grid grid-cols-2 items-end gap-x-3 gap-y-6 sm:grid-cols-3">
              {section.items.map((item) => {
                const on = picked.includes(item.id);
                const price = item.price !== null ? usd(item.price) : "—";
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-pressed={on}
                      aria-label={`No. ${item.no}, ${item.series}, ${item.size}, ${item.sold ? "sold" : price}`}
                      disabled={item.sold}
                      onClick={() => toggle(item.id)}
                      className="block w-full text-left disabled:cursor-default"
                    >
                      {/* Tile matches the photo's own 3:2, so nothing is cropped */}
                      <span
                        className={`relative block overflow-hidden rounded-[3px] bg-[#eceef1] outline-2 outline-offset-2 transition-[outline-color] duration-150 ease-out ${
                          item.portrait ? "aspect-[2/3]" : "aspect-[3/2]"
                        } ${on ? "outline outline-[#111]" : "outline-transparent"}`}
                      >
                        <img
                          src={item.src}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className={`absolute inset-0 h-full w-full object-cover ${item.sold ? "opacity-45" : ""}`}
                        />
                        {!item.sold && (
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
                      <span className="mt-1.5 flex items-baseline justify-between text-[12px] tabular-nums">
                        <span className="text-[#a3a29d]">{pad(item.no)}</span>
                        {item.sold ? (
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
        className={`fixed inset-x-0 bottom-0 px-4 pb-[max(16px,env(safe-area-inset-bottom))] transition-[opacity,transform] duration-200 ease-out ${
          chosen.length ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[520px] items-center gap-3 rounded-[14px] bg-[#111] py-2 pl-4 pr-2 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
          <p className="flex-1 text-[13px] tabular-nums">
            {chosen.length} {chosen.length === 1 ? "print" : "prints"}
            {chosen.length > 0 && priced && <span className="text-white/60"> · {usd(total)}</span>}
          </p>
          <button
            type="button"
            onClick={() => setPicked([])}
            className="rounded-[9px] px-2.5 py-1.5 text-[13px] text-white/70 transition-colors hover:text-white"
          >
            Clear
          </button>
          {priced && (
            <a
              href={`https://account.venmo.com/pay?${venmoQuery(chosen, total)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openVenmo(venmoQuery(chosen, total), e)}
              className="rounded-[9px] bg-white px-3 py-1.5 text-[13px] font-medium text-[#111] transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              Pay on Venmo
            </a>
          )}
        </div>
      </div>
    </>
  );
}
