import { Kalam } from "next/font/google";
import { cn } from "@/lib/utils";
import Note from "@/components/log/note";
import styles from "./notes.module.css";
import Polaroid from "@/components/log/polaroid";
import Form from "@/components/log/form";
import { sql } from "@vercel/postgres";
import { Suspense } from "react";
import Popover from "@/components/log/cta";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import Link from "next/link";

const notes = [
  "I'm so happy to be here!",
  "I love the smell of fresh coffee in the morning.",
  "don't forget to water the plants",
  "what a beautiful day",
  "zoom meeting at 3pm",
  "I need to get groceries",
  "I love my job",
];

// const kalam = Kalam({
//   subsets: ["latin"],
//   weight: "400",
// });

const Page = () => {
  return (
    <div className={cn("h-screen p-6 bg-gray-1")}>
      <div
        id="mat-container"
        className={cn(
          "relative w-full h-full overflow-hidden",
          styles.matContainer
        )}
      >
        <div className="z-10">
          <div id="mat-texture" className={styles.matTexture} />
          <div id="mat-grid" className={styles.matGrid}>
            <div id="diagonal-lines" className={styles.diagonalLines} />
          </div>
        </div>
        <main className="relative z-20 h-full w-full">
          <Polaroid />
          <Polaroid />
          <Polaroid />
          <Link
            href="/"
            className={cn(
              "mr-auto rounded-full bg-[#027582] hover:bg-[#027582]/90 transition hover:scale-105 hover:-rotate-6 px-3 py-1.5 flex gap-x-1.5 items-center justify-center text-gray-1 font-semibold w-fit h-fit m-4",
              styles.homeBtn
            )}
          >
            <ArrowLeft width={16} height={16} />
            take me home
          </Link>
          <div
            className={cn(
              "z-50 absolute bottom-10 left-1/2 -translate-x-1/2 rounded-[6px] bg-[#027582] hover:bg-[#027582]/90 transition text-[1.5rem] py-2 flex gap-x-1.5 items-center justify-center text-gray-1 font-semibold h-fit w-72",
              styles.homeBtn
            )}
          >
            <Popover />
          </div>
        </main>
      </div>
    </div>
  );
};

{
  /* <div className={styles.scene}>
        <div className={styles.desk}></div>
        <div className={}>
          <div className={styles.matTexture} />

          <img
            src={
              "https://framerusercontent.com/images/bWUJuSLJ7pk4qFBIsCwxS4lilE.webp"
            }
            className={styles.clip}
          />
          <div className={cn(` text-[black] `, styles.matGrid)}>
            <div className={styles.diagonalLines} />
            

            <Link
              href="/"
              className={cn(
                "mr-auto z-10 rounded-full bg-[#027582] px-3 py-1.5 flex gap-x-1.5 items-center justify-center text-gray-1 font-semibold w-fit h-fit",
                styles.homeBtn
              )}
            >
              <ArrowLeft width={16} height={16} />
              take me home
            </Link>
            <div className="mt-auto mx-auto w-fit z-10 justify-self-center">
              <Popover />
            </div>
          </div>
        </div>
      </div>
    </div> */
}

async function GuestbookEntries() {
  const { rows } =
    await sql`SELECT * from "guestbook" ORDER BY last_modified DESC;`;

  return rows.map((entry) => (
    <div
      key={entry.id}
      className="flex flex-col space-y-1 mb-4 bg-gray-1 border border-[blue] p-4 rounded-md absolute"
      style={{
        transform: `rotate(-${Math.floor(Math.random() * 100)}deg)`,
        top: `${Math.floor(Math.random() * 100)}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
      }}
    >
      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          {entry.created_by}:
        </span>

        {entry.body}
      </div>
    </div>
  ));
}

export default Page;
