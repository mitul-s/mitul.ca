import DrivingCar from "./driving-car";
import HeroSizer from "./hero-sizer";
import RsvpButton from "./rsvp-button";
import { Fraunces } from "next/font/google";
import type { Metadata, Viewport } from "next";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Somebody Save Mitul",
  description:
    "You're invited. October 17th, 2026 at 7pm · All Street Gallery, NYC.",
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

// footerLines[0] is the taxi bar (h-2 below); slice(1) renders the rest
const footerLines = [8, 5, 4, 3, 2];

const Page = () => {
  return (
    <div
      className={`${fraunces.variable} relative flex h-dvh flex-col overflow-hidden bg-[#f7f8fa] text-black`}
    >
      <header aria-hidden className="shrink-0 flex flex-col gap-1">
        <div className="h-3 w-full bg-[#ed1717]" />
        <div className="h-0.5 w-full bg-[#ed1717]" />
      </header>

      <main className="flex min-h-0 w-full flex-1 flex-col items-center justify-center px-6 [container-type:size] sm:px-12">
        {/* Hero is deliberately undersized (height-capped, 440px max) so the type
            gets real negative space; the info row clusters on the same central
            axis. Tune via /rsvp?debug (see hero-sizer.tsx). */}
        <HeroSizer>
          <img
            src="/images/rsvp/hero.svg"
            alt="Somebody save Mitul"
            width={603}
            height={511}
            className="h-auto w-full"
          />
        </HeroSizer>
        <div className="mt-4 flex flex-wrap items-baseline justify-center gap-x-3 text-center">
          <p className="font-[family-name:var(--font-fraunces)] text-[15px] tracking-[-0.02em] sm:text-[16px] lg:text-[18px]">
            October 17th, 2026 at 7pm
          </p>
          <span
            aria-hidden
            className="font-[family-name:var(--font-fraunces)] text-[15px] sm:text-[16px] lg:text-[18px]"
          >
            ·
          </span>
          <a
            href="https://maps.app.goo.gl/TryCsLjQbiTbCcbV7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-fraunces)] text-[15px] tracking-[-0.02em] underline decoration-1 underline-offset-4 transition-colors hover:text-[#ed1717] sm:text-[16px] lg:text-[18px]"
          >
            All Street Gallery
          </a>
        </div>
        <div className="mt-8 flex justify-center">
          <RsvpButton />
        </div>
      </main>

      <footer aria-hidden className="relative shrink-0 flex flex-col gap-1">
        <div className="relative h-2 w-full bg-[#ed1717]">
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
