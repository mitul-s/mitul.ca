import Projects from "@/components/Projects";
import Current from "@/components/Current";
import Shell from "@/components/Shell";
import Overview from "@/components/Overview";
import SectionHeader from "@/components/SectionHeader";
import { Box, Flex, Link, Badge, Center, Divider, Heading, Text, Stack } from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <Shell>
        <Flex mb={24} h="70vh" justifyContent="center" flexDirection="column">
          <Heading size="3xl" mb={4} fontFamily="Rubik">
            Hi, my name is Mitul
          </Heading>
          <Text fontSize="xl">
            Photographer, developer and eventually, a product manager. Nice to
            meet you.
          </Text>
        </Flex>
        <Box m="0 auto">
          <Current />
          <Box mt={10}>
            <SectionHeader>Experience</SectionHeader>
            <Stack spacing={8}>
              <Box>
                <Box mb={4}>
                  <Heading size="lg" mb={2}>
                    Soapbox
                  </Heading>
                  <Text color="trueGray.500">Jul 2019 - Mar 2020</Text>
                </Box>
                <Text>
                  I worked at{" "}
                  <Link href="https://soapboxhq.com" color="blue.400">
                    Soapbox
                  </Link>{" "}
                  to help make meetings better for everyone.
                </Text>
              </Box>
            </Stack>
          </Box>
          <Box mt={10}>
            <Projects />
          </Box>
        </Box>
      </Shell>
      <Box bg="white" color="blueGray.900" w="full" h="20vh">
        <Flex maxWidth="1250px" justifyContent="center" py={8} h="20vh">
          <Heading>Photography</Heading>
        </Flex>
      </Box>
    </>
  );
}
