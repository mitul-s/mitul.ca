"use client";
import { approveGuestbookEntry, declineGuestbookEntry } from "@/app/actions";
import { localEntriesAtom } from "@/atoms/guestbook";
import { useSetAtom } from "jotai";
import { useActionState } from "react";
import { Spinner } from "@phosphor-icons/react";

const ApproveButton = ({ id }: { id: string }) => {
  const setLocalEntries = useSetAtom(localEntriesAtom);
  
  const [approveState, approveAction, approvePending] = useActionState(
    async () => {
      await approveGuestbookEntry(id);
      setLocalEntries((prev) => prev.filter((entry) => entry.id !== id));
    },
    null
  );

  const [declineState, declineAction, declinePending] = useActionState(
    async () => {
      await declineGuestbookEntry(id);
      setLocalEntries((prev) => prev.filter((entry) => entry.id !== id));
    },
    null
  );

  return (
    <div className="flex gap-x-2">
      <form action={approveAction}>
        <button
          className="bg-[#267E5C] rounded-[6px] px-2 py-1 text-gray-1 font-medium mt-2 hover:bg-[#267E5C]/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
          type="submit"
          disabled={approvePending || declinePending}
        >
          {approvePending && <Spinner className="animate-spin" size={16} />}
          Approve
        </button>
      </form>
      <form action={declineAction}>
        <button
          className="bg-[#F74F00] rounded-[6px] px-2 py-1 text-gray-1 font-medium mt-2 hover:bg-[#F74F00]/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
          type="submit"
          disabled={approvePending || declinePending}
        >
          {declinePending && <Spinner className="animate-spin" size={16} />}
          Decline
        </button>
      </form>
    </div>
  );
};

export default ApproveButton;
