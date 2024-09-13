import { getJournals } from "@/app/actions";
import JournalSelector from "@/components/garden/journal-selector";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const journals = (await getJournals()) as Array<{
    id: number;
    title: string;
  }>;
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF4E7]">
      <header>
        <h1 className="text-3xl font-bold p-4">Garden</h1>
      </header>
      <main className="h-full text-gray-11 flex gap-8">
        <aside className="h-full border-r px-4 w-32">
          <JournalSelector journals={journals} />
        </aside>
        {children}
      </main>
      <footer>yo</footer>
    </div>
  );
};

export default Layout;
