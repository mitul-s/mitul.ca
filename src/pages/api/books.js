import { getShelves } from "@/lib/literal";

export default async (_, res) => {
  
  const response = await getShelves();
  const shelves = await response.json();
  
  const currentlyReading = shelves.data.myReadingStates.filter(shelf => shelf.status === "IS_READING");
  const latestBooks = currentlyReading?.map((book) => {
    return {       
      slug: book.book.slug,
      title: book.book.title, 
      author: book.book.authors[0].name
    };
  });

  const title = latestBooks?.at(-1)?.title;
  const author = latestBooks?.at(-1)?.author;
  const slug = latestBooks?.at(-1)?.slug;
  
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({ title, author, slug });
}
