import StaticNote from "@/components/visitors/static-note";
import LinkPrimitive from "@/components/link-primitive";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import { Suspense } from "react";

const ITEMS_PER_PAGE = 50;

const SKELETON_CARDS = Array.from({ length: 15 });

export default function Page(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex w-full max-w-6xl items-center gap-x-3 px-4 pt-8">
        <LinkPrimitive
          href="/visitors"
          variant="route"
          className="mx-0 rounded-full px-3 font-medium text-gray-12 shadow-md"
        >
          return to the visitor's log
        </LinkPrimitive>
        <LinkPrimitive
          href="/"
          variant="route"
          className="mx-0 rounded-full px-3 font-medium text-gray-12 shadow-md"
        >
          return home
        </LinkPrimitive>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 pb-16">
        <Suspense fallback={<EntriesSkeleton />}>
          <PageContent searchParams={props.searchParams} />
        </Suspense>
      </main>
    </div>
  );
}

async function PageContent({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, Number(params.page) || 1);

  return (
    <Suspense key={currentPage} fallback={<EntriesSkeleton />}>
      <EntriesList currentPage={currentPage} />
    </Suspense>
  );
}

async function EntriesList({ currentPage }: { currentPage: number }) {
  const { entries, totalPages, totalEntries } =
    await getGuestbookEntries(currentPage);

  if (!entries.length) {
    return <p className="mt-16 text-center text-gray-11">No entries found.</p>;
  }

  return (
    <>
      <div className="mt-8 mb-6 flex items-baseline justify-between">
        <h1 className="text-xl font-semibold text-gray-12">all entries</h1>
        <span className="text-sm text-gray-11 tabular-nums">
          {totalEntries} notes
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {entries.map((entry) => (
          <StaticNote
            key={entry.id}
            name={entry.created_by}
            content={entry.body}
            signature={entry.signature}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}

function EntriesSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mt-8 mb-6 flex items-baseline justify-between">
        <div className="h-7 w-28 rounded bg-gray-3" />
        <div className="h-4 w-16 rounded bg-gray-3" />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {SKELETON_CARDS.map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-black/10 bg-gray-1 px-2.5 pt-2.5 pb-3 shadow-sm"
          >
            <div className="aspect-[3/2] w-full rounded-[4px] border border-gray-6 bg-gray-3" />
            <div className="mt-1.5 space-y-1.5">
              <div className="h-3.5 w-16 rounded bg-gray-3" />
              <div className="h-4 w-full rounded bg-gray-3" />
              <div className="h-4 w-1/2 rounded bg-gray-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const linkClass =
    "inline-flex h-9 items-center justify-center rounded-md border border-gray-6 bg-gray-2 px-4 text-sm font-medium text-gray-12 transition-colors hover:bg-gray-3 aria-disabled:pointer-events-none aria-disabled:opacity-40";

  return (
    <nav className="mt-10 flex items-center justify-center gap-3">
      <Link
        href={`/visitors/all?page=${currentPage - 1}`}
        aria-disabled={currentPage <= 1}
        tabIndex={currentPage <= 1 ? -1 : undefined}
        className={linkClass}
        prefetch={true}
      >
        Previous
      </Link>
      <span className="rounded-md bg-gray-3 px-3 py-1.5 text-sm text-gray-11 tabular-nums">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={`/visitors/all?page=${currentPage + 1}`}
        aria-disabled={currentPage >= totalPages}
        tabIndex={currentPage >= totalPages ? -1 : undefined}
        className={linkClass}
        prefetch={true}
      >
        Next
      </Link>
    </nav>
  );
}

async function getGuestbookEntries(page: number) {
  const offset = (page - 1) * ITEMS_PER_PAGE;
  try {
    const [entriesResult, countResult] = await Promise.all([
      sql`
        SELECT id, created_by, body, signature
        FROM guestbook
        WHERE approved = true
        ORDER BY last_modified DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `,
      sql`SELECT COUNT(*) FROM guestbook WHERE approved = true`,
    ]);

    const totalEntries = Number(countResult.rows[0].count);
    const totalPages = Math.ceil(totalEntries / ITEMS_PER_PAGE);

    return {
      entries: entriesResult.rows,
      totalPages,
      totalEntries,
    };
  } catch (error) {
    console.error("Failed to fetch guestbook entries:", error);
    throw new Error("Failed to fetch guestbook entries");
  }
}
