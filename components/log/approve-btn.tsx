"use client";
import { approveGuestbookEntry, declineGuestbookEntry } from "@/app/actions";
import { localEntriesAtom } from "@/atoms/guestbook";
import { useSetAtom } from "jotai";

const ApproveButton = ({ id }: { id: string }) => {
  const setLocalEntries = useSetAtom(localEntriesAtom);
  return (
    <div className="flex gap-x-2">
      <form
        action={async () => {
          await approveGuestbookEntry(id);
          setLocalEntries((prev) => prev.filter((entry) => entry.id !== id));
        }}
      >
        <button
          className="bg-[#267E5C] text-white rounded-[6px] px-2 py-1 text-gray-1 font-medium mt-2 hover:bg-[#267E5C]/80"
          type="submit"
        >
          Approve
        </button>
      </form>
      <form
        action={async () => {
          await declineGuestbookEntry(id);
          setLocalEntries((prev) => prev.filter((entry) => entry.id !== id));
        }}
      >
        <button
          className="bg-[#F74F00] text-white rounded-[6px] px-2 py-1 text-gray-1 font-medium mt-2 hover:bg-[#F74F00]/80"
          type="submit"
        >
          Decline
        </button>
      </form>
    </div>
  );
};

export default ApproveButton;
