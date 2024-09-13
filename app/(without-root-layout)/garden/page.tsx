import { getJournalEntries, getJournals } from "@/app/actions";
import { format, isValid, parseISO } from "date-fns";
import { Suspense } from "react";
import EntryForm from "@/components/garden/entry-form";
import { sanitize } from "isomorphic-dompurify";
import { cookies } from "next/headers";
import Link from "next/link";
import Time from "@/components/garden/time";
import ContentBlock from "@/components/garden/content-block";

const isAuthenticated = () => {
  const cookieStore = cookies();
  return !!cookieStore.get("auth");
};

const Page = () => {
  const authenticated = isAuthenticated();
  return (
    <>
      <p>garden</p>
      <h2 className="font-medium">movies</h2>
      <div className="w-96">{authenticated && <EntryForm />}</div>
      <Suspense fallback="loading">
        <Journals />
      </Suspense>
      <Suspense fallback="loading">
        <Entries />
      </Suspense>
    </>
  );
};

const Entries = async () => {
  const entries = await getJournalEntries("movies");

  return (
    <div className="flex flex-col gap-y-4">
      {entries.map((entry) => {
        return (
          <div className="flex flex-col gap-y-1.5" key={entry.id}>
            <Link
              className="transition hover:underline"
              href={`/garden/i/${entry.id}`}
            >
              <Time date={entry.created_at} />
            </Link>
            <ContentBlock>{entry.content}</ContentBlock>
          </div>
        );
      })}
    </div>
  );
};

const Journals = async () => {
  const journals = await getJournals();
  return (
    <div className="flex gap-x-1.5">
      {journals.map((journal) => {
        return (
          <Link key={journal.id} href={`/garden/${journal.title}`}>
            {journal.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
