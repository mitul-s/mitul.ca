import { getJournalEntry } from "@/app/actions";
import ContentBlock from "@/components/garden/content-block";

const Page = async ({
  params,
}: {
  params: {
    entry: string;
  };
}) => {
  const d = await getJournalEntry(params.entry);
  console.log(d.content);
  return (
    <div className="text-[black]">
      <ContentBlock>{d.content}</ContentBlock>
    </div>
  );
};

export default Page;
