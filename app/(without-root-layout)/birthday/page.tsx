import DrivingCar from "./driving-car";
import Ferraris from "./ferraris";
import { Fraunces } from "next/font/google";
import type { Metadata, Viewport } from "next";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Birthday",
  alternates: {
    canonical: "https://mitul.ca/birthday",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f8fa",
};

const footerLines = [20, 16, 12, 8, 4, 2];

const Page = () => {
  return (
    <div
      className={`${fraunces.variable} relative flex h-dvh flex-col overflow-hidden bg-[#f7f8fa] text-black`}
    >
      <Ferraris />
      <header aria-hidden className="shrink-0 flex flex-col gap-1">
        <div className="h-5 w-full bg-[#ed1717]" />
        <div className="h-1 w-full bg-[#ed1717]" />
      </header>

      <main className="flex min-h-0 w-full flex-1 flex-col items-center justify-center px-5 [container-type:size]">
        {/* Shared column width tracks the height-capped hero so subtitle edges stay flush.
            Width scales with viewport height (minus room for subtitle + button) but is
            capped so it can't get comically large, and stays centred as one group. */}
        <div className="flex w-[min(100%,calc((100cqh-200px)*603/510.689),680px)] flex-col">
          <img
            src="/images/birthday/hero.svg"
            alt="Somebody save Mitul"
            width={603}
            height={511}
            className="h-auto w-full"
          />
          <div className="mt-10 flex flex-col items-center gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="font-[family-name:var(--font-fraunces)] text-[32px] tracking-[-0.64px]">
              You&apos;re invited.
            </p>
            <p className="font-[family-name:var(--font-fraunces)] text-[32px] tracking-[-0.64px] sm:text-right">
              October 10th, 2026
            </p>
          </div>
          <div className="mt-9 flex justify-center">
            <a
              href="https://partiful.com/e/nfHRrtboDRfOI8NdqCAn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-full bg-[#ed1717] px-10 font-[family-name:var(--font-fraunces)] text-[18px] tracking-[-0.36px] text-white transition hover:bg-[#d41414] active:scale-[0.99]"
            >
              RSVP
            </a>
          </div>
        </div>
      </main>

      <footer aria-hidden className="relative shrink-0 flex flex-col gap-2">
        <div className="relative h-5 w-full bg-[#ed1717]">
          <DrivingCar />
        </div>
        {footerLines.slice(1).map((height) => (
          <div
            key={height}
            className="w-full bg-[#ed1717]"
            style={{ height }}
          />
        ))}
      </footer>
    </div>
  );
};

export default Page;
