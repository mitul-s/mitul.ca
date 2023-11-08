interface Book {
  slug: string;
  title: string;
  authors: { name: string }[];
  cover: string;
}

const LITERAL_ENDPOINT = `https://literal.club/graphql/`;

const getAccessToken = async () => {
  const response = await fetch(LITERAL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            mutation login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    token
                }
            }
        `,
      variables: {
        email: process.env.LITERAL_USER_EMAIL,
        password: process.env.LITERAL_USER_PASSWORD,
      },
    }),
  }).then((res) => res.json());
  return response.data.login.token;
};

export const getShelves = async () => {
  const access_token = await getAccessToken();

  const response = await fetch(LITERAL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query myReadingStates {
            myReadingStates {
              ...ReadingStateParts # find fragments below
              book {
                ...BookParts # find fragments below
              }
            }
          }

          fragment ReadingStateParts on ReadingState {
            id
            status
            bookId
            profileId
            createdAt
          }

          fragment BookParts on Book {
            id
            slug
            title
            subtitle
            description
            cover
            authors {
              id
              name
            }
          }
            `,
    }),
  });

  if (!response.ok) throw new Error("Something went wrong");

  const { data } = await response.json();

  const latestBook = data.myReadingStates
    .filter(
      (shelf: { status: string; book: Book }) => shelf.status === "IS_READING"
    )
    .slice(-1)
    .map(({ book }: { book: Book }) => ({
      slug: book.slug,
      title: book.title,
      author: book.authors[0].name,
      cover: book.cover,
    }))[0];

  return {
    reading: latestBook,
  };
};
