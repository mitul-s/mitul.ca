import { Kalam } from "next/font/google";
import { cn } from "@/lib/utils";
import Note from "@/components/log/note";
import styles from "./notes.module.css";
import Polaroid from "@/components/log/polaroid";
import Form from "@/components/log/form";
import { sql } from "@vercel/postgres";
import { Suspense } from "react";
import Popover from "@/components/log/cta";

const notes = [
  "I'm so happy to be here!",
  "I love the smell of fresh coffee in the morning.",
  "don't forget to water the plants",
  "what a beautiful day",
  "zoom meeting at 3pm",
  "I need to get groceries",
  "I love my job",
];

const kalam = Kalam({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  return (
    <div className={cn("relative h-screen", kalam.className)}>
      <div className={styles.scene}>
        <div className={styles.desk}></div>
        <div className={styles.matContainer}>
          <div className={styles.matTexture} />
          <img
            src={
              "https://framerusercontent.com/images/bWUJuSLJ7pk4qFBIsCwxS4lilE.webp"
            }
            className={styles.clip}
          />
          <div className={cn(` text-[black] `, styles.matGrid)}>
            <div className={styles.diagonalLines} />

            <Polaroid />
            <Polaroid />
            <Polaroid />
            <div className="w-full h-full flex items-center justify-center flex-col">
              <Suspense fallback={<div>Loading...</div>}>
                <Form />
                <GuestbookEntries />
              </Suspense>
              {/* <div className="bg-gray-1 rounded-[10px] h-96 w-96 z-10">
                <form>
                  <textarea
                    className="w-full h-full bg-gray-1 rounded-[10px] p-4"
                    placeholder="Write a note..."
                  ></textarea>
                  <button className="bg-gray-4 p-2">Write away</button>
                </form>
              </div> */}
              {/* <button
                className={cn(
                  "text-[2rem] text-gray-1 bg-[#065736] z-10 py-1.5 px-6 font-medium border-gray-1 border-opacity-5 border rounded-full",
                  styles.leaveNoteButton
                )}
              >
                Leave a note
              </button> */}

              <Popover />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
