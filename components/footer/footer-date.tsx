import { formatDate } from "@/lib/utils";
import Link from "next/link";

const FooterDate = async () => {
  const data = await fetch(
    "https://api.github.com/repos/mitul-s/mitul.ca/commits",
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  ).then((res) => res.json());

  // hack lazy way to bypass rate limit without going through auth
  // to add proper stuff later!
  const lastCommit = !data.message
    ? data.map(
        (commit: { commit: { committer: { date: string } } }) =>
          commit.commit.committer.date
      )[0]
    : "";

  const formattedDate = lastCommit
    ? formatDate(new Date(lastCommit))
    : "2025/01/20";

  return (
    <Link href="https://github.com/mitul-s/mitul.ca" target="_blank">
      {formattedDate}
    </Link>
  );
};

export default FooterDate;
