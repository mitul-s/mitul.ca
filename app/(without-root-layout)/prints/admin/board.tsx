"use client";

import { useRef, useState } from "react";
import type { CatalogSection } from "../catalog";
import { setSold } from "./actions";

const pad = (n: number) => String(n).padStart(2, "0");
const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/** Tap a print to mark it sold, tap again to undo. Shows on /prints within seconds. */
export default function SoldBoard({
  sections,
  initialSold,
}: {
  sections: CatalogSection[];
  initialSold: string[];
}) {
  const [sold, setSoldIds] = useState(initialSold);
  const [pending, setPending] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inFlight = useRef(0);

  const toggle = async (id: string) => {
    if (pending.includes(id)) return;
    const next = !sold.includes(id);
    const apply = (on: boolean) =>
      setSoldIds((s) => (on ? [...s.filter((x) => x !== id), id] : s.filter((x) => x !== id)));

    setError(null);
    setPending((p) => [...p, id]);
    apply(next); // optimistic
    inFlight.current++;
    const res = await setSold(id, next).catch(() => ({
      ok: false as const,
      error: "Couldn't reach the server. Try again.",
    }));
    inFlight.current--;
    setPending((p) => p.filter((x) => x !== id));

    if (!res.ok) {
      apply(!next);
      setError(res.error);
    } else if (inFlight.current === 0) {
      setSoldIds(res.sold); // settle on the server's list once taps stop
    }
  };

  const items = sections.flatMap((s) => s.items);
  const soldItems = items.filter((i) => sold.includes(i.id));
  const revenue = soldItems.reduce((sum, i) => sum + (i.price ?? 0), 0);

  return (
    <>
      <header className="mb-8 flex items-baseline justify-between gap-4">
        <div>
          <h1 className="text-[15px] font-medium">Sales</h1>
          <p className="mt-1 text-[13px] text-[#6b6a66]">
            {soldItems.length} of {items.length} sold · {usd(revenue)}
          </p>
        </div>
        <a
          href="/prints"
          className="text-[13px] text-[#111] underline decoration-[rgba(0,0,0,0.25)] underline-offset-2"
        >
          View page
        </a>
      </header>

      {error && (
        <p role="alert" className="mb-6 rounded-[9px] bg-[#fdecec] px-3 py-2 text-[13px] text-[#b3110f]">
          {error}
        </p>
      )}

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.group}>
            <h2 className="flex items-baseline justify-between border-b border-[rgba(0,0,0,0.12)] pb-2 text-[13px]">
              <span className="font-medium">{section.series}</span>
              <span className="text-[#8a8984]">
                {section.items.filter((i) => sold.includes(i.id)).length} / {section.items.length}
              </span>
            </h2>
            <ul className="mt-3 grid grid-cols-3 items-end gap-x-2.5 gap-y-4 sm:grid-cols-4">
              {section.items.map((item) => {
                const isSold = sold.includes(item.id);
                const busy = pending.includes(item.id);
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-pressed={isSold}
                      aria-label={`No. ${item.no}, ${isSold ? "sold, tap to undo" : "tap to mark sold"}`}
                      onClick={() => toggle(item.id)}
                      className="block w-full text-left"
                    >
                      <span
                        className={`relative block overflow-hidden rounded-[3px] bg-[#eceef1] outline-2 outline-offset-2 transition-[outline-color,opacity] duration-150 ${
                          item.portrait ? "aspect-[2/3]" : "aspect-[3/2]"
                        } ${isSold ? "outline outline-[#ed1717]" : "outline-transparent"} ${busy ? "opacity-60" : ""}`}
                      >
                        <img
                          src={item.src}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-150 ${isSold ? "opacity-40" : ""}`}
                        />
                        {isSold && (
                          <span className="absolute inset-0 grid place-items-center">
                            <span className="rounded-full bg-[#ed1717] px-2 py-0.5 text-[11px] font-medium text-white">
                              Sold
                            </span>
                          </span>
                        )}
                      </span>
                      <span className="mt-1 flex items-baseline justify-between text-[11px]">
                        <span className={isSold ? "text-[#ed1717]" : "text-[#a3a29d]"}>{pad(item.no)}</span>
                        <span className="text-[#6b6a66]">{item.price !== null ? usd(item.price) : "—"}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
