import { getEntries } from "@/app/actions";
import { format } from "date-fns";
import { Suspense } from "react";
import EntryForm from "@/components/garden/entry-form";
import { sanitize } from "isomorphic-dompurify";
import { cookies } from "next/headers";

const isAuthenticated = () => {
  const cookieStore = cookies();
  return !!cookieStore.get("auth");
};

const Page = () => {
  const authenticated = isAuthenticated();
  return (
    <main className="p-4 py-10 h-screen md:p-12 text-gray-11">
      <p>garden</p>
      {authenticated && <EntryForm />}
      <Suspense fallback={<p>Loading entries...</p>}>
        <Entries />
      </Suspense>
    </main>
  );
};

const Entries = async () => {
  const entries = await getEntries("movies");
  return (
    <div>
      {entries.map((entry) => (
        <div className="flex gap-x-1.5" key={entry.id}>
          <time className="text-gray-10">
            {format(entry.last_modified, "MMM d, yyyy '@' h:mm a")}
          </time>
          <div
            className="text-[black]"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: sanitize(entry.body) }}
          />
        </div>
      ))}
    </div>
  );
};

export default Page;
