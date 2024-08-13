"use client";
import { approveGuestbookEntry, declineGuestbookEntry } from "@/app/actions";

const ApproveButton = ({ id }: { id: string }) => {
  return (
    <div className="flex gap-x-2">
      <form action={async () => await approveGuestbookEntry(id)}>
        <button
          className="bg-[#267E5C] text-white rounded-[6px] px-2 py-1 text-gray-1 font-medium mt-2 hover:bg-[#267E5C]/80"
          type="submit"
        >
          Approve
        </button>
      </form>
      <form action={async () => await declineGuestbookEntry(id)}>
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
