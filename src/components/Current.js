import {
  Box,
  Center,
  Text,
  HStack,
  Icon,
  Stack,
  Button,
  Link,
  Skeleton,
} from "@chakra-ui/react";
import { MusicNotesSimple, Monitor, Bookmarks } from "phosphor-react";
import Section from "@/components/Section";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const CurrentItem = ({ icon, title, caption, link }) => {
  return (
    <HStack spacing={4}>
      <Icon fontSize="xl" as={icon} />
      <Box>
        <Link href={link} _hover={{ color: "cyan.600" }} isExternal>
          <Text
            fontWeight="regular"
            maxW={["320px", null, "150px"]}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {title}
          </Text>
          <Text fontSize="sm" color="trueGray.500">
            {caption}
          </Text>
        </Link>
      </Box>
    </HStack>
  );
};

const Current = () => {
  const { data } = useSWR("/api/nowplaying", fetcher);
  const { data: book } = useSWR("/api/books", fetcher);
  // const data = false;
  // const book = false;

  return (
    <Section header="Currently">
      <Stack
        spacing={8}
        direction={["column", null, "row"]}
        justifyContent="space-between"
        // flexShrink="0"
        flex="1"
      >
        {data ? (
          <CurrentItem
            icon={MusicNotesSimple}
            title={data ? data.title : "Wishing Well"}
            caption={data ? data.caption : "Juice Wrld"}
            link={
              data
                ? data.link
                : "https://www.last.fm/music/Juice+WRLD/_/Wishing+Well"
            }
          />
        ) : (
          <HStack>
            <Icon fontSize="xl" as={MusicNotesSimple} mr={2} />
            <Center flexDirection="column" minWidth="120px">
              <Skeleton size="sm" h={5} mb={1} minWidth="120px" />
              <Skeleton size="sm" h={2} minWidth="120px" />
            </Center>
          </HStack>
        )}

        {book ? (
          <CurrentItem
            icon={Bookmarks}
            title={book?.title}
            caption={book?.author}
            link={
              book?.slug
                ? `https://literal.club/ms/book/${book?.slug}?ref=mitul.ca`
                : "https://literal.club/ms/?ref=mitul.ca"
            }
          />
        ) : (
          <HStack>
            <Icon fontSize="xl" as={Bookmarks} mr={2} />
            <Center flexDirection="column" minWidth="120px">
              <Skeleton size="sm" h={5} mb={1} minWidth="120px" />
              <Skeleton size="sm" h={2} minWidth="120px" />
            </Center>
          </HStack>
        )}
        <CurrentItem
          link="https://g.co/kgs/xnuhdk"
          icon={Monitor}
          title={"The Good Place"}
          caption={"Comedy"}
        />
      </Stack>
    </Section>
  );
};

export default Current;
