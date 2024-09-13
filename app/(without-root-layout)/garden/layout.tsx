import { getJournals } from "@/app/actions";
import JournalSelector from "@/components/garden/journal-selector";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const journals = (await getJournals()) as Array<{
    id: number;
    title: string;
  }>;
  return (
    <div className="flex flex-col min-h-screen bg-[#fff]">
      <main className="p-4 py-10 h-full md:p-12 text-gray-11 flex gap-8">
        <aside>
          <JournalSelector journals={journals} />
        </aside>
        {children}
      </main>
    </div>
  );
};

export default Layout;
