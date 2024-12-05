import type { Viewport } from "next";
import { Provider } from "jotai";
import { cn } from "@/lib/utils";
import styles from "./notes.module.css";
import Polaroid from "@/components/visitors/polaroid";
import WriteNoteCTA from "@/components/visitors/cta";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import Link from "next/link";
import {
  VercelLogo,
  Sticker,
  NextWordmark,
} from "@/components/visitors/stickers";
import Image from "next/image";
import GuestbookEntries from "@/components/visitors/guestbook-entries";

export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  themeColor: "#FCFCFC",
};

const Page = () => {
  return (
    <Provider>
      <div className={cn("h-[100dvh] sm:h-[100vh] p-1 sm:p-6 bg-gray-1")}>
        <div
          id="mat-container"
          className={cn(
            "relative w-full h-full overflow-hidden",
            styles.matContainer
          )}
        >
          <div className="z-10">
            <div id="mat-texture" className={styles.matTexture} />
            <div aria-hidden className={styles.window} />
            <div aria-hidden className={styles.star}>
              <Image
                alt="star drawing"
                width={80}
                height={80}
                src="/images/Star_002.png"
              />
            </div>
            {/* <div aria-hidden className={styles.moreNoise} /> */}
            <div id="mat-grid" className={styles.matGrid}>
              <div id="diagonal-lines" className={styles.diagonalLines} />
            </div>
          </div>
          <main className="relative z-20 h-full w-full">
            <div className={styles.stamp}>
              <span>Premium made in toronto quality</span>
            </div>

            <GuestbookEntries />
            <Polaroid src="/images/banff-2.jpg" alt="toronto" />
            <Polaroid src="/images/toronto.jpg" alt="toronto" />
            <Polaroid src="/images/nyc.jpg" alt="toronto" />
            <Sticker>
              <img
                className="w-36"
                src="/images/spiderman.png"
                alt="Spiderman sticker"
                draggable={false}
              />
            </Sticker>
            <Sticker>
              <img
                className="w-24"
                src="/images/cntower.png"
                alt="CN Tower sticker"
                draggable={false}
              />
            </Sticker>
            <Sticker>
              <VercelLogo />
            </Sticker>
            <Sticker>
              <NextWordmark />
            </Sticker>

            <Link
              href="/"
              className={cn(
                "mr-auto rounded-full bg-[#027582] hover:bg-[#027582]/90 transition hover:scale-105 hover:-rotate-6 px-3 py-1.5 flex gap-x-1.5 items-center justify-center text-gray-1 font-semibold w-fit h-fit z-50 absolute top-4 left-4 sm:top-10 sm:left-10",
                styles.homeBtn
              )}
            >
              <ArrowLeft width={16} height={16} />
              take me home
            </Link>
            <Link
              href="/visitors/all"
              className={cn(
                "mr-auto rounded-full bg-[#027582] hover:bg-[#027582]/90 transition hover:scale-105 hover:-rotate-6 px-3 py-1.5 flex gap-x-1.5 items-center justify-center text-gray-1 font-semibold w-fit h-fit z-50 absolute top-14 left-4 sm:bottom-10 sm:right-10 sm:left-auto sm:top-auto",
                styles.homeBtn
              )}
            >
              see all notes
              <ArrowRight width={16} height={16} />
            </Link>
            <WriteNoteCTA />
          </main>
        </div>
      </div>
    </Provider>
  );
};

export default Page;
