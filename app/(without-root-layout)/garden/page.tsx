import { getJournalEntries } from "@/app/actions";
import { format, isValid, parseISO } from "date-fns";
import { Suspense } from "react";
import EntryForm from "@/components/garden/entry-form";
import { sanitize } from "isomorphic-dompurify";
import { cookies } from "next/headers";
import Link from "next/link";
import Time from "@/components/garden/time";

const isAuthenticated = () => {
  const cookieStore = cookies();
  return !!cookieStore.get("auth");
};

const Page = () => {
  const authenticated = isAuthenticated();
  return (
    <main className="p-4 py-10 h-screen md:p-12 text-gray-11">
      <p>garden</p>
      <h2 className="font-medium">movies</h2>
      <div className="w-96">{authenticated && <EntryForm />}</div>
      <Suspense fallback="loading">
        <Entries />
      </Suspense>
    </main>
  );
};

const Entries = async () => {
  const entries = await getJournalEntries("movies");

  return (
    <div className="flex flex-col gap-y-2">
      {entries.map((entry) => {
        return (
          <div className="flex gap-x-1.5" key={entry.id}>
            <Link href={`/garden/i/${entry.id}`}>
              <Time date={entry.created_at} />
            </Link>
            <div
              className="text-[black]"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{ __html: sanitize(entry.content) }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
