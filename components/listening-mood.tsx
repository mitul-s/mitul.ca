async function getMood() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mood`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch mood");
  }
  return response.json();
}

export const Mood = async () => {
  const { mood } = await getMood();
  return <span>{mood}</span>;
};
