import DrivingCar from "./driving-car";
import Ferraris from "./ferraris";
import RsvpButton from "./rsvp-button";
import { Fraunces } from "next/font/google";
import type { Metadata, Viewport } from "next";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "RSVP",
  alternates: {
    canonical: "https://mitul.ca/rsvp",
  },
  openGraph: {
    videos: [
      {
        url: "https://mitul.ca/rsvp/og.mp4",
        secureUrl: "https://mitul.ca/rsvp/og.mp4",
        type: "video/mp4",
        width: 1200,
        height: 630,
      },
    ],
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
            capped so it can't get comically large, and stays centred as one group.
            On small screens the hero is held back from the full column width so the
            lockup doesn't swallow the viewport. */}
        <div className="flex w-[min(80%,calc((100cqh-150px)*603/510.689),600px)] flex-col sm:w-[min(100%,calc((100cqh-200px)*603/510.689),600px)]">
          <img
            src="/images/rsvp/hero.svg"
            alt="Somebody save Mitul"
            width={603}
            height={511}
            className="h-auto w-full"
          />
          <div className="mt-3 flex flex-col items-center gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-1">
            <p className="font-[family-name:var(--font-fraunces)] text-[22px] tracking-[-0.44px] sm:text-[32px] sm:tracking-[-0.64px]">
              You&apos;re invited.
            </p>
            <p className="font-[family-name:var(--font-fraunces)] text-[22px] tracking-[-0.44px] sm:text-right sm:text-[32px] sm:tracking-[-0.64px]">
              October 17th, 2026
            </p>
          </div>
          <div className="mt-6 flex justify-center sm:mt-9">
            <RsvpButton />
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

      {/* Film-grain overlay; same noise texture as the main site */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-[url(/noise.svg)] opacity-20"
      />
    </div>
  );
};

export default Page;
