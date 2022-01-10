import { getShelves, getAccessToken } from "@/lib/getBooks";

export default async (_, res) => {
  
  const response = await getShelves();
  const data = await response.json();
  const books = data.data.myReadingStates.filter(book => book.status === "IS_READING");

  return res.status(200).json({ books });
}
