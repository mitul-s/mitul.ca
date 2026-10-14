import type { Metadata, Viewport } from "next";
import { cachedSold } from "@/lib/print-sales";
import { catalog } from "./catalog";
import PrintList from "./print-list";

export const metadata: Metadata = {
  title: "Print List",
  description: "Prints from Somebody Save Mitul at All Street Gallery, NYC.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function Page() {
  const sections = catalog();
  const sold = await cachedSold();

  return (
    <div className="min-h-dvh bg-white text-[#111]">
      <main className="mx-auto w-full max-w-[720px] px-4 pb-32 pt-12 sm:px-6 sm:pt-16">
        <header className="mb-10">
          <h1>
            <img
              src="/images/prints/logo.svg"
              alt="Somebody Save Mitul"
              width={418}
              height={354}
              className="h-auto w-[132px] sm:w-[152px]"
            />
          </h1>
          <p className="mt-5 text-[13px] text-[#6b6a66]">
            Print List · All Street Gallery, NYC
          </p>
          <p className="mt-4 max-w-[40ch] text-pretty text-[13px] leading-[1.5] text-[#6b6a66]">
            Thanks for coming. If one stuck with you, it&apos;s yours. Buy it here with
            Venmo (@mitulito). Questions? Ask me or{" "}
            <a
              href="mailto:mitulxshah@gmail.com"
              className="text-[#111] underline decoration-[rgba(0,0,0,0.25)] underline-offset-2"
            >
              email&nbsp;me
            </a>
            .
          </p>
        </header>
        <PrintList sections={sections} initialSold={sold} />
      </main>
    </div>
  );
}
