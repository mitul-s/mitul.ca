import ApproveButton from "@/components/log/approve-btn";

import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function ProtectedPage() {
  const cookieStore = cookies();
  const isAuthenticated = cookieStore.get("auth");

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <div className="bg-gray-1 text-gray-12 p-12">
      <h1>Welcome to the gang page</h1>
      <p>Only authenticated users can access this page.</p>
      <div className="flex flex-wrap gap-2 mt-6">
        <GuestbookEntries />
      </div>
    </div>
  );
}

async function GuestbookEntries() {
  const { rows } =
    await sql`SELECT * from "guestbook" WHERE approved = false ORDER BY last_modified DESC;`;

  return rows.map((entry) => (
    <div className="w-fit h-fit border border-gray-10 p-2">
      <div className="border border-gray-6 bg-gray-3 rounded-[3px] flex items-center justify-center overflow-hidden">
        <div
          className="object-contain"
          dangerouslySetInnerHTML={{ __html: entry.signature }}
        ></div>
      </div>
      <div className="w-full text-sm break-words mt-1.5">
        <span className="text-gray-12 text-[14px] mr-1 font-semibold">
          {entry.created_by}
        </span>
        <div className="text-[16px] font-medium">{entry.body}</div>
      </div>
      <ApproveButton id={entry.id} />
    </div>
  ));
}
