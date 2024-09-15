import { getJournals } from "@/app/actions";
import JournalSelector from "@/components/os/journal-selector";

const Page = async () => {
  const journals = (await getJournals()) as Array<{
    id: number;
    title: string;
  }>;
  return (
    <div>
      <p>Page</p>
      <JournalSelector journals={journals} />
    </div>
  );
};

export default Page;
