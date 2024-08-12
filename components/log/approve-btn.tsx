"use client";
import { approveGuestbookEntry } from "@/app/actions";

const ApproveButton = ({ id }: { id: string }) => {
  return (
    <form action={async () => await approveGuestbookEntry(id)}>
      <button
        className="bg-[#267E5C] text-white rounded-[6px] px-2 py-1 text-gray-1 font-medium mt-2 hover:bg-[#267E5C]/80"
        type="submit"
      >
        Approve
      </button>
    </form>
  );
};

export default ApproveButton;
