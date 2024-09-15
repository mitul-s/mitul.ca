import { getJournalEntry, getJournalName } from "@/app/actions";
import ContentBlock from "@/components/os/content-block";
import Link from "next/link";

const Page = async ({
  params,
}: {
  params: {
    entry: string;
  };
}) => {
  const d = await getJournalEntry(params.entry);
  const j = await getJournalName(d.journal_id);
  console.log(j);
  return (
    <div className="text-[black]">
      <Link href={`/os/${j}`}>{j}</Link>
      <div>
        <ContentBlock>{d.content}</ContentBlock>
      </div>
    </div>
  );
};

export default Page;
