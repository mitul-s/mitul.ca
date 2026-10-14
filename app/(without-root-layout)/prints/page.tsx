import type { Metadata, Viewport } from "next";
import { catalog } from "./catalog";
import PrintList from "./print-list";

export const metadata: Metadata = {
  title: "Print list",
  description: "Prints from Somebody Save Mitul at All Street Gallery, NYC.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Page() {
  const sections = catalog();
  const count = sections.reduce((n, s) => n + s.items.length, 0);

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
            Print list · {count} works · All Street Gallery, NYC
          </p>
          <p className="mt-4 max-w-[40ch] text-[13px] leading-[1.5] text-[#6b6a66]">
            Tap the prints you want and pay on Venmo (@mitulito). The note fills in
            with your picks and I&apos;ll set them aside. Questions?{" "}
            <a
              href="mailto:mitulxshah@gmail.com"
              className="text-[#111] underline decoration-[rgba(0,0,0,0.25)] underline-offset-2"
            >
              Email me
            </a>
            .
          </p>
        </header>
        <PrintList sections={sections} />
      </main>
    </div>
  );
}
