import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type Entry = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  initialX?: any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  initialY?: any;
  id: string;
  created_by: string;
  local_entry_id?: string;
  body: string;
  signature: string;
  approved?: boolean;
  last_modified?: string;
};

export const serverEntriesAtom = atom<Entry[]>([]);
export const localEntriesAtom = atomWithStorage<Entry[]>(
  "localGuestbookEntries",
  []
);

export const hasCreatedEntryBeforeAtom = atomWithStorage(
  "hasCreatedEntryBefore",
  false
);
export const localCreatedByIdAtom = atomWithStorage("localCreatedById", "");

export const allEntriesAtom = atom((get) => {
  const serverEntries = get(serverEntriesAtom);
  const localEntries = get(localEntriesAtom);
  return [...localEntries, ...serverEntries];
});
