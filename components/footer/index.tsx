import { Suspense } from "react";
import localFont from "next/font/local";
import FooterDate from "./footer-date";

// Caveat subsetted to just the glyphs in "forever Toronto, Canada" (7 KB)
const caveat = localFont({
  src: "../../public/font/Caveat-subset.woff2",
  weight: "600",
});

const Footer = () => {
  return (
    <footer className="bg-accent text-gray-1 text-[12px] py-24">
      <div className="md:grid grid-cols-[160px_500px_auto]">
        <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 items-center px-4 col-start-2">
          <span>
            Last updated on{" "}
            <Suspense>
              <FooterDate />
            </Suspense>
          </span>
          <div className="h-px bg-gray-2/40" aria-hidden />
          <p className="whitespace-nowrap">
            With love, from{" "}
            <span className="group relative inline-block">
              <span className="relative inline-block">
                New York City.
                <svg
                  className="pointer-events-none absolute left-0 top-1/2 h-[0.5em] w-full -translate-y-1/2 overflow-visible"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 7 C 20 3, 40 8, 58 5 S 85 6, 98 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    pathLength={100}
                    className="opacity-0 group-hover:opacity-100 [stroke-dasharray:100] [stroke-dashoffset:100] transition-[stroke-dashoffset,opacity] duration-300 ease-out group-hover:duration-150 group-hover:[stroke-dashoffset:0]"
                  />
                </svg>
              </span>
              <span
                className={`${caveat.className} pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap text-[15px] opacity-0 transition-opacity duration-300 group-hover:duration-150 group-hover:opacity-100`}
              >
                forever Toronto, Canada
              </span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
