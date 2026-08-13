"use client";
import { approveGuestbookEntry, declineGuestbookEntry } from "@/app/actions";
import { localEntriesAtom } from "@/atoms/guestbook";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Spinner } from "@phosphor-icons/react";

const ApproveButton = ({ id }: { id: string }) => {
  const setLocalEntries = useSetAtom(localEntriesAtom);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeAction, setActiveAction] = useState<
    "approve" | "decline" | null
  >(null);
  const [done, setDone] = useState(false);

  if (done) return null;

  const handleClick = (type: "approve" | "decline") => {
    setActiveAction(type);
    startTransition(async () => {
      try {
        if (type === "approve") {
          await approveGuestbookEntry(id);
        } else {
          await declineGuestbookEntry(id);
        }
        setLocalEntries((prev) => prev.filter((entry) => entry.id !== id));
        setDone(true);
        router.refresh();
      } finally {
        setActiveAction(null);
      }
    });
  };

  return (
    <div className="flex gap-x-2">
      <button
        className="bg-[#267E5C] rounded-[6px] px-2 py-1 text-gray-1 font-medium mt-2 hover:bg-[#267E5C]/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
        type="button"
        onClick={() => handleClick("approve")}
        disabled={isPending}
      >
        {isPending && activeAction === "approve" && (
          <Spinner className="animate-spin" size={16} />
        )}
        Approve
      </button>
      <button
        className="bg-[#F74F00] rounded-[6px] px-2 py-1 text-gray-1 font-medium mt-2 hover:bg-[#F74F00]/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
        type="button"
        onClick={() => handleClick("decline")}
        disabled={isPending}
      >
        {isPending && activeAction === "decline" && (
          <Spinner className="animate-spin" size={16} />
        )}
        Decline
      </button>
    </div>
  );
};

export default ApproveButton;
