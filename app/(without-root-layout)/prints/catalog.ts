import {
  GROUPS,
  GROUP_ORDER,
  PIECES,
  defaultConfig,
  sizeLabel,
  type GroupId,
} from "../space/hang";

// The print list is whatever /space hangs by default, so the two never drift,
// plus every print in the series below (for sale even if it isn't on a wall).
const SELL_ALL = new Set<GroupId>(["concerts"]);

/** Single prints for sale that aren't on a wall. Listed after the rest of their series. */
const EXTRAS = new Set<string>(["DSC08217"]); // Chicago lakefront

/** Page order. Concerts go last, since they're the least likely to sell. */
const ORDER: GroupId[] = [...GROUP_ORDER.filter((g) => g !== "concerts"), "concerts"];

/**
 * USD per print, by series (concerts and cityscapes share 16×24 but not a
 * price). Leave a series out to show "—".
 */
export const PRICES: Partial<Record<GroupId, number>> = {
  street: 40,
  montreal: 60,
  cityscapes: 100,
  concerts: 75,
  cntower: 200,
};

/** One line under each series heading. Years come from the photos' capture dates. */
export const ABOUT: Partial<
  Record<GroupId, { blurb: string; link?: { href: string; label: string } }>
> = {
  cityscapes: { blurb: "Toronto, 2015–2018, mostly from up high. Plus one from Chicago." },
  cntower: { blurb: "One from 2016, one from 2017." },
  montreal: {
    blurb:
      "The Montreal metro, shot between December 2021 and January 2022 while the city was under lockdown and curfew.",
    link: { href: "https://typicalmitul.com/montreal-in-motion", label: "See the project" },
  },
  street: { blurb: "Out walking, 2015–2017." },
  concerts: { blurb: "Live shows, 2023–2024." },
};

// Sold state lives in Postgres (lib/print-sales.ts), toggled at /prints/admin.

export type CatalogItem = {
  no: number;
  id: string;
  series: string;
  size: string;
  portrait: boolean;
  src: string;
  price: number | null;
};

export type CatalogSection = {
  group: GroupId;
  series: string;
  size: string;
  about?: (typeof ABOUT)[GroupId];
  items: CatalogItem[];
};

export function catalog(): CatalogSection[] {
  const config = defaultConfig();
  let no = 0;
  return ORDER.map((group) => {
    const size = config.sizes[group];
    const items = PIECES.filter(
      (p) => p.group === group && (SELL_ALL.has(group) || config.hung[p.id] || EXTRAS.has(p.id)),
    )
      .sort((a, b) => Number(EXTRAS.has(a.id)) - Number(EXTRAS.has(b.id)))
      .map(
      (p): CatalogItem => ({
        no: ++no,
        id: p.id,
        series: GROUPS[group].name,
        size: sizeLabel(size),
        portrait: p.portrait,
        src: p.src,
        price: PRICES[group] ?? null,
      }),
    );
    return { group, series: GROUPS[group].name, size: sizeLabel(size), about: ABOUT[group], items };
  }).filter((s) => s.items.length > 0);
}

export const isCatalogId = (id: string) =>
  catalog().some((s) => s.items.some((i) => i.id === id));
