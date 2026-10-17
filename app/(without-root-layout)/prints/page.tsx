import type { Metadata, Viewport } from "next";
import { GlobeSimple } from "@phosphor-icons/react/dist/ssr/GlobeSimple";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
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

/** Phosphor 2.0 predates its X logo, so this is the mark itself, sized to sit with the others. */
function XLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/typicalmitul", icon: <InstagramLogo size={20} aria-hidden /> },
  { label: "X", href: "https://x.com/typicalmitul", icon: <XLogo size={17} /> },
  { label: "Portfolio", href: "https://typicalmitul.com", icon: <GlobeSimple size={20} aria-hidden /> },
];

export default async function Page() {
  const sections = catalog();
  const sold = await cachedSold();

  return (
    <div className="min-h-dvh bg-white text-[#111] [-webkit-tap-highlight-color:transparent]">
      <main className="mx-auto w-full max-w-[720px] px-4 pb-32 pt-12 sm:px-6 sm:pt-16">
        <header className="mb-10">
          <div className="flex items-start justify-between gap-4">
            <h1>
              <img
                src="/images/prints/logo.svg"
                alt="Somebody Save Mitul"
                width={418}
                height={354}
                className="h-auto w-[132px] sm:w-[152px]"
              />
            </h1>
            <nav aria-label="Elsewhere" className="-mr-2 -mt-1.5 flex">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid size-9 place-items-center rounded-full text-[#6b6a66] transition-[color,scale] duration-150 ease-out hover:text-[#111] active:scale-[0.92]"
                >
                  {s.icon}
                </a>
              ))}
            </nav>
          </div>
          <p className="mt-5 text-[13px] text-[#6b6a66]">
            Print List · All Street Gallery, NYC
          </p>
          <p className="mt-4 max-w-[40ch] text-pretty text-[13px] leading-[1.5] text-[#6b6a66]">
            Thank you for coming. If one stuck with you, it&apos;s yours. Venmo or Zelle
            (@mitulito). Always welcome to{" "}
            <a
              href="mailto:mitulxshah@gmail.com"
              className="text-[#111] underline decoration-[rgba(0,0,0,0.25)] underline-offset-2"
            >
              email&nbsp;me
            </a>
            , or ask me anything in person.
          </p>
        </header>
        <PrintList sections={sections} initialSold={sold} />
      </main>
    </div>
  );
}
