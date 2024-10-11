import { getJournals } from "@/app/actions";
import JournalSelector from "@/components/os/journal-selector";
import Link from "next/link";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const journals = (await getJournals()) as Array<{
    id: number;
    title: string;
  }>;
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF4E7] text-black p-1">
      <div
        className="shell"
        style={{
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10000,
          height: "100%",
          width: "100%",
          borderWidth: "4px",
          borderColor: "rgb(0 0 0 / 1)",
          borderRadius: "8px",
          display: "block",
          boxShadow: "0 0 0 4px #000",
        }}
      />
      <div className="flex flex-row w-full h-full min-h-full items-stretch gap-8 grow">
        <aside>
          <div className="w-[244px] h-full" />
          <div className="fixed top-0 bottom-0 left-0 right-0 w-[180px]">
            <nav className="relative flex flex-col shrink-0 h-full w-full max-w-[180px] px-2 py-2 border-r">
              <div className="h-16">mitul</div>
              <h2>Notebooks</h2>
              <Link href="/os/trackers">Trackers</Link>
              <JournalSelector journals={journals} />
            </nav>
          </div>
        </aside>
        <main className="flex flex-1 min-w-0 flex-col">
          <header>
            <h1 className="text-3xl font-bold p-4">Garden</h1>
          </header>
          {children}
        </main>
      </div>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
