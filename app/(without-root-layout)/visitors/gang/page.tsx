import ApproveButton from "@/components/visitors/approve-btn";

import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function ProtectedPage() {
  return (
    <Suspense fallback={<div className="bg-gray-1 text-gray-12 p-12 h-screen">Loading...</div>}>
      <AuthenticatedContent />
    </Suspense>
  );
}

async function AuthenticatedContent() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get("auth");

  if (!isAuthenticated) {
    redirect("/visitors/login");
  }

  return (
    <div className="bg-gray-1 text-gray-12 p-12 h-screen">
      <h1>Welcome to the gang page</h1>
      <p>Only authenticated users can access this page.</p>
      <Suspense fallback={<div className="text-gray-11">Loading entries...</div>}>
        <div
          className="grid gap-4 mt-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          <GuestbookEntries />
        </div>
      </Suspense>
    </div>
  );
}

const colorMap = new Map();
const colors = ["red", "green", "blue", "orange", "purple", "yellow"];

// we gotta improve this a bit to be easier to scan
function getColor(id: string) {
  if (!colorMap.has(id)) {
    const color = colors[colorMap.size % colors.length];
    colorMap.set(id, color);
  }
  return colorMap.get(id);
}

async function GuestbookEntries() {
  const { rows } =
    await sql`SELECT * from "guestbook" WHERE approved = false ORDER BY id DESC;`;

  return rows.map((entry) => (
    <div key={entry.id} className="w-fit h-fit border border-gray-10 p-2">
      <div className="border border-gray-6 bg-gray-3 rounded-[3px] flex items-center justify-center overflow-hidden">
        <div
          className="object-contain"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: entry.signature }}
        />
      </div>
      <div className="w-full text-sm break-words mt-1.5">
        <span className="text-gray-12 text-[14px] mr-1 font-semibold">
          {entry.created_by}
        </span>
        <div className="text-[16px] font-medium">{entry.body}</div>
      </div>
      <div className="flex flex-col">
        <span>
          {entry.hascreatedentrybefore ? "has created an entry before" : "new"}
        </span>

        {entry.local_created_by_id && (
          <span style={{ color: getColor(entry.local_created_by_id) }}>
            created by: {entry.local_created_by_id}
          </span>
        )}
      </div>
      <ApproveButton id={entry.id} />
    </div>
  ));
}
