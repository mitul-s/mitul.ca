import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type Entry = {
  id: string;
  created_by: string;
  body: string;
  signature: string;
};

export const serverEntriesAtom = atom<Entry[]>([]);
export const localEntriesAtom = atomWithStorage<Entry[]>(
  "localGuestbookEntries",
  []
);

export const allEntriesAtom = atom((get) => {
  const serverEntries = get(serverEntriesAtom);
  const localEntries = get(localEntriesAtom);
  return [...localEntries, ...serverEntries];
});
