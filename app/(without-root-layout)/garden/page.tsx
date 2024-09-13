import { getJournalEntries, getJournals } from "@/app/actions";
import { Suspense } from "react";
import EntryForm from "@/components/garden/entry-form";
import { cookies } from "next/headers";
import Link from "next/link";
import Time from "@/components/garden/time";
import ContentBlock from "@/components/garden/content-block";

const isAuthenticated = () => {
  const cookieStore = cookies();
  return !!cookieStore.get("auth");
};

const Page = ({
  searchParams,
}: {
  searchParams: {
    journal: string;
  };
}) => {
  const authenticated = isAuthenticated();
  const selectedJournal = searchParams.journal || "movies"; // Default to "movies" if no journal is selected
  return (
    <div className="flex flex-col gap-y-6">
      {authenticated && (
        <div className="w-96">
          <EntryForm journal={selectedJournal} />
        </div>
      )}
      <div className="flex gap-4">
        <Suspense fallback="loading">
          <Entries journal={selectedJournal} />
        </Suspense>
      </div>
    </div>
  );
};

const Entries = async ({ journal }: { journal: string }) => {
  const entries = await getJournalEntries(journal);

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

export default Page;
