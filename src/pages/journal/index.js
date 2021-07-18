/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Box, Heading, Flex, Text, Stack, Divider } from "@chakra-ui/react";
import imageUrlBuilder from "@sanity/image-url";
import NextLink from "next/link";
import Shell from "@/components/Shell";

export default function Journal({ posts }) {
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "uctcw5fw",
        dataset: "production",
      });

      setMappedPosts(
        posts.map((post) => {
          return {
            ...post,
            mainImage: imgBuilder.image(post.mainImage).width(500).height(250),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <Shell>
      <Flex mt={24} justifyContent="flex-end" flexDirection="column">
        <Stack spacing={8}>
          {mappedPosts.length ? (
            mappedPosts.map((p, i) => (
              <Box key={i}>
                <Journals p={p} />
              </Box>
            ))
          ) : (
            <p>No posts</p>
          )}
        </Stack>
      </Flex>
    </Shell>
  );
}

export function Journals({ p }) {
  console.log(p);
  return (
    <Stack>
      <NextLink href={`/journal/${p.slug.current}`}>
        <Heading>{p.title}</Heading>
      </NextLink>
      <Text>Text..sddasd what is P</Text>
      <Text>{p.description}</Text>
      <Divider />
    </Stack>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
