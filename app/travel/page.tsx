import Link from "next/link";
import { getDocuments } from "outstatic/server";

export default async function Index() {
  const posts = await getData();
  return posts.map((post) => (
    <Link href={`/travel/${encodeURIComponent(post.slug)}`}>{post.title}</Link>
  ));
}

async function getData() {
  const posts = getDocuments("posts", ["slug", "title"]);

  return posts;
}
