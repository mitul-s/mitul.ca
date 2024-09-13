import { getJournalEntries } from "@/app/actions";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import { sanitize } from "isomorphic-dompurify";
import Link from "next/link";
import { Suspense } from "react";

const Page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  return (
    <div>
      <Suspense>
        <Entries journal={params.slug} />
      </Suspense>
    </div>
  );
};

const Entries = async ({ journal }: { journal: string }) => {
  const entries = await getJournalEntries(journal);

  return (
    <div className="flex flex-col gap-y-2">
      {entries.map((entry) => {
        const date = parseISO(entry.created_at);

        const formattedDate = format(date, "MMM d, yyyy '@' h:mm a");

        const relativeTime = formatDistanceToNow(date, { addSuffix: true });
        return (
          <div className="flex gap-x-1.5" key={entry.id}>
            <Link href={`/garden/i/${entry.id}`}>
              <time className="text-gray-10">
                {formattedDate} ({relativeTime})
              </time>
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
