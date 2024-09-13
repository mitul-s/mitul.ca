import { sanitize } from "isomorphic-dompurify";

const ContentBlock = ({ children }: { children: string }) => {
  return (
    <div
      className="text-black"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: bruh
      dangerouslySetInnerHTML={{ __html: sanitize(children) }}
    />
  );
};

export default ContentBlock;
