import { defaultConfig, sanitizeSlots, type HangConfig } from "./hang";

/** Bump when the inventory or plan changes so stale layouts don't linger. */
export const STORAGE_KEY = "space-hang:v7";

/** The arrangement saved in this browser by /space, merged over the defaults. */
export function loadSaved(): HangConfig | null {
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
      slots: sanitizeSlots(saved.slots),
    };
  } catch {
    return null;
  }
}
