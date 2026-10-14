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

/** Page order. Concerts go last, since they're the least likely to sell. */
const ORDER: GroupId[] = [...GROUP_ORDER.filter((g) => g !== "concerts"), "concerts"];

/**
 * USD per print, by series (concerts and cityscapes share 16×24 but not a
 * price). Leave a series out to show "—".
 */
export const PRICES: Partial<Record<GroupId, number>> = {
  street: 40,
  montreal: 60,
  cityscapes: 125,
  concerts: 75,
  cntower: 250,
};

/** Add ids here as things sell during the show. */
export const SOLD = new Set<string>([]);

export type CatalogItem = {
  no: number;
  id: string;
  series: string;
  size: string;
  portrait: boolean;
  src: string;
  price: number | null;
  sold: boolean;
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
    const items = PIECES.filter(
      (p) => p.group === group && (SELL_ALL.has(group) || config.hung[p.id]),
    ).map(
      (p): CatalogItem => ({
        no: ++no,
        id: p.id,
        series: GROUPS[group].name,
        size: sizeLabel(size),
        portrait: p.portrait,
        src: p.src,
        price: PRICES[group] ?? null,
        sold: SOLD.has(p.id),
      }),
    );
    return { group, series: GROUPS[group].name, size: sizeLabel(size), items };
  }).filter((s) => s.items.length > 0);
}
