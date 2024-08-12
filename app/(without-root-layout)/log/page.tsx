import { cn } from "@/lib/utils";
import Note from "@/components/log/note";
import styles from "./notes.module.css";
import Polaroid from "@/components/log/polaroid";
import { sql } from "@vercel/postgres";
import Popover from "@/components/log/cta";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import Link from "next/link";
import { VercelLogo, Sticker, NextWordmark } from "@/components/log/stickers";

const Page = () => {
  return (
    <div className={cn("h-screen p-1 sm:p-6 bg-gray-1")}>
      <div
        id="mat-container"
        className={cn(
          "relative w-full h-full overflow-hidden",
          styles.matContainer
        )}
      >
        <div aria-hidden className={styles.window} />
        <div aria-hidden className={styles.star}>
          <img src="/images/Star_002.png" />
        </div>
        <div className="z-10">
          <div id="mat-texture" className={styles.matTexture} />
          <div id="mat-grid" className={styles.matGrid}>
            <div id="diagonal-lines" className={styles.diagonalLines} />
          </div>
        </div>
        <main className="relative z-20 h-full w-full">
          <div className={styles.stamp}>
            <span>Premium made in toronto quality</span>
          </div>

          <GuestbookEntries />
          <Polaroid />
          <Polaroid />
          <Polaroid />
          {Array.from({ length: 2 }).map((_, i) => (
            <>
              <Sticker>
                <VercelLogo />
              </Sticker>
              <Sticker>
                <NextWordmark />
              </Sticker>
            </>
          ))}
          <Link
            href="/"
            className={cn(
              "mr-auto rounded-full bg-[#027582] hover:bg-[#027582]/90 transition hover:scale-105 hover:-rotate-6 px-3 py-1.5 flex gap-x-1.5 items-center justify-center text-gray-1 font-semibold w-fit h-fit absolute top-10 left-10",
              styles.homeBtn
            )}
          >
            <ArrowLeft width={16} height={16} />
            take me home
          </Link>
          <Popover />
        </main>
      </div>
    </div>
  );
};

async function GuestbookEntries() {
  const { rows } =
    await sql`SELECT * from "guestbook" WHERE approved = true ORDER BY last_modified DESC;`;

  return rows.map((entry) => (
    <Note
      key={entry.id}
      name={entry.created_by}
      content={entry.body}
      signature={entry.signature}
    />
  ));
}

export default Page;
