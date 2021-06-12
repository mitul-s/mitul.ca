import { Box, Center, Text, HStack, Icon, Stack, Link, Skeleton } from "@chakra-ui/react"
import { MusicNotesSimple, Monitor, Bookmarks } from "phosphor-react";
import Section from "@/components/Section";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";



const CurrentItem = ({ icon, title, caption, link }) => {
  return (
    <HStack spacing={4}>
      <Icon fontSize="xl" as={icon} />
      <Box>
        <Link href={link} _hover={{ color: "teal.500" }} isExternal>
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
}


const Current = () => {
  
  const { data } = useSWR('/api/nowplaying', fetcher);
  
  return (
    <Section header="Currently">
      <Stack
        spacing={8}
        direction={["column", null, "row"]}
        justifyContent="space-between"
        flexShrink="0"
      >
        {data?.link ? (
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
            <Center flexDirection="column" w="150px">
              <Skeleton size="sm" h={5} mb={1} w="150px" />
              <Skeleton size="sm" h={2} w="150px" />
            </Center>
          </HStack>
        )}

        <CurrentItem
          icon={Bookmarks}
          title={"Range: Why Generalists Triumph in a Specialized World"}
          caption={"David Epstein"}
          link="https://beta.readng.co/book/range-by-david-epstein-zbmEW?ref=mitul"
        />
        <CurrentItem
          link="https://www.netflix.com/title/70155618"
          icon={Monitor}
          title={"Gilmore Girls"}
          caption={"Sitcom"}
        />
      </Stack>
    </Section>
  );
}

export default Current;