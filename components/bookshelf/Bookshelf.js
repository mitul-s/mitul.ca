import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import bookshelf from "pages/bookshelf";
import { Book } from "phosphor-react";


const LoadingCard = () => (
  <Box border="1px solid">
    <Grid gridTemplateColumns={["1fr", null, "1.5fr 4fr"]}>
      <Center p={4} borderRight="1px solid">
        <Skeleton h="180px" w="125px" />
      </Center>
      <Box>
        <Stack p={8}>
          <Skeleton h="20px" w="200px" />
          <Skeleton h="15px" w="150px" />
          <Text color="trueGray.500">
            Voluptate labore qui deserunt nisi voluptate sunt qui reprehenderit
            ad minim nisi veniam aute. Consectetur cillum non cupidatat veniam.
          </Text>
        </Stack>
        <Box p={4} px={8} borderTop="1px solid ">
          <Button variant="link">Purchase</Button>
        </Box>
      </Box>
    </Grid>
  </Box>
);

const BookCard = ({ shadow, data  }) => {
  return (
      data ? (<Box border="1px solid">
      <Grid gridTemplateColumns={["1fr", null, "1.5fr 4fr"]}>
        <Center p={4} borderRight="1px solid">
          <Image src={data?.reading[0].fields.Cover} boxShadow={shadow} />
        </Center>
        <Box>
          <Stack p={8}>
            <Heading fontSize="xl">{data?.reading[0].fields.title}</Heading>
            <Text>Malcolm Gladwell</Text>
            <Text color="trueGray.500">
              Voluptate labore qui deserunt nisi voluptate sunt qui
              reprehenderit ad minim nisi veniam aute. Consectetur cillum non
              cupidatat veniam.
            </Text>
          </Stack>
          <Box p={4} px={8} borderTop="1px solid ">
            <Button variant="link">Purchase</Button>
          </Box>
        </Box>
      </Grid>
    </Box>) : <LoadingCard />
  );
}

const CurrentlyReading = ({ shadow, data }) => {
  return (
    <Section>
      <SectionHeader>Currently Reading</SectionHeader>
      <BookCard shadow={shadow} data={data} />
    </Section>
  );
}


const Read = () => {
  return (
    <Section>
      <SectionHeader>Read</SectionHeader>
      <BookCard />
    </Section>

  )
}


const Bookshelf = () => {
  const { data } = useSWR("/api/getbooks", fetcher);

  const shadow = useColorModeValue(
    "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16);",
    "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.32);",
  );

  return (
    <Flex mt={24} justifyContent="flex-end" flexDirection="column">
      <Box mb={8}>
        <Heading>My Bookshelf</Heading>
        <Text>Duis ipsum fugiat est magna mollit quis quis.</Text>
      </Box>
      <Box p={8} border="1px solid">
        <Heading fontSize="sm" mb={3}>
          2021 GOAL
        </Heading>
        <Flex flexDirection="column">
          <Text>Here's how I'm doing for the year.</Text>
        </Flex>
        <Box>
          <Badge my={3}>{data?.completed.length} / 20 books read</Badge>
          <Box h="2vh" bg="white">
            <Box
              h="2vh"
              transition="350ms ease-in"
              w={`${(data?.completed.length / 20) * 100}%`}
              bg="cyan.600"
            />
          </Box>
        </Box>
      </Box>
      <CurrentlyReading data={data} shadow={shadow} />
      <Read />
    </Flex>
  );
};

export default Bookshelf;
