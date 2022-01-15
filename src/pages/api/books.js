import { getShelves } from "@/lib/literal";

export default async (_, res) => {
  
  const response = await getShelves();
  const shelves = await response.json();
  
  const currentlyReading = shelves.data.myReadingStates.filter(shelf => shelf.status === "IS_READING");
  const latestBooks = currentlyReading.map((book) => {
    return {       
      slug: book.book.slug,
      title: book.book.title, 
      author: book.book.authors[0].name
    };
  });

  const latestBook = latestBooks[latestBooks.length - 1];

  const title = latestBook.title;
  const author = latestBook.author;
  const slug = latestBook.slug;
  
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({ title, author, slug });
}
