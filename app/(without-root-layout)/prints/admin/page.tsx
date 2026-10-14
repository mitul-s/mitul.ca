import type { Metadata } from "next";
import { Suspense } from "react";
import { isAdmin } from "@/lib/admin-auth";
import { readSold } from "@/lib/print-sales";
import { catalog } from "../catalog";
import SoldBoard from "./board";
import AdminLogin from "./login";

export const metadata: Metadata = {
  title: "Sales",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div className="min-h-dvh bg-white text-[#111]">
      <main className="mx-auto w-full max-w-[720px] px-4 pb-16 pt-10 sm:px-6">
        <Suspense fallback={<p className="text-[13px] text-[#6b6a66]">Loading…</p>}>
          <Admin />
        </Suspense>
      </main>
    </div>
  );
}

async function Admin() {
  if (!(await isAdmin())) return <AdminLogin />;
  let sold: string[];
  try {
    sold = await readSold();
  } catch (error) {
    console.error("print_sales read failed", error);
    return (
      <p className="text-[13px] text-[#b3110f]">
        Couldn&apos;t reach the database. Reload to try again.
      </p>
    );
  }
  return <SoldBoard sections={catalog()} initialSold={sold} />;
}
