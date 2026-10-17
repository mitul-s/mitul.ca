import {
  GROUPS,
  PIECES,
  defaultConfig,
  sizeLabel,
  type GroupId,
} from "../space/hang";

// Every print in the folders is for sale (PIECES mirrors them); /space only
// decides which hang. Within a series, prints keep folder order.

/** Listed after the rest of their series. */
const LAST = new Set<string>(["DSC08217"]); // Chicago, after the Toronto set

/** Page order. Concerts go last, since they're the least likely to sell. */
const ORDER: GroupId[] = ["cityscapes", "cntower", "street", "montreal", "concerts"];

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
  items: CatalogItem[];
};

export function catalog(): CatalogSection[] {
  const config = defaultConfig();
  let no = 0;
  return ORDER.map((group) => {
    const size = config.sizes[group];
    const items = PIECES.filter((p) => p.group === group)
      .sort((a, b) => Number(LAST.has(a.id)) - Number(LAST.has(b.id)))
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
    return { group, series: GROUPS[group].name, size: sizeLabel(size), items };
  }).filter((s) => s.items.length > 0);
}

export const isCatalogId = (id: string) =>
  catalog().some((s) => s.items.some((i) => i.id === id));
