import { sanitize } from "isomorphic-dompurify";

const ContentBlock = ({ children }: { children: string }) => {
  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <div dangerouslySetInnerHTML={{ __html: sanitize(children) }} />;
};

export default ContentBlock;
