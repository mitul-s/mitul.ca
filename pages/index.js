import Projects from "@/components/Projects";
import Current from "@/components/Current";
import Item from "@/components/Item";
import Shell from "@/components/Shell";
import Section from "@/components/Section";
import Photos from "@/components/Photos";
import SectionHeader from "@/components/SectionHeader";
import { Box, Flex, Link, Badge, Center, Divider, Heading, Text, Stack, Icon, HStack } from "@chakra-ui/react";

import { GithubLogo } from "phosphor-react";


const Project = () => {
  return (
    <Box p={6} border="1px solid white">
      <Flex justifyContent="space-between" alignItems="center" mb={3}>
        <Heading size="md">Paprback</Heading>
        <Icon fontSize="xl" as={GithubLogo} />
      </Flex>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <HStack fontSize="sm" mt={3} color="trueGray.500">
        <Link>Demo</Link>
        <Link>Code</Link>
      </HStack>
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <Shell>
        <Flex py={24} h="50vh" justifyContent="flex-end" flexDirection="column">
          <Heading mb={4}>Hi, my name is Mitul</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Flex>
        <Current />
          <Section header="Experience">
            <Item
              date="May 2019 - Mar 2020"
              description="I helped people make meetings better at Soapbox"
            />
            <Item
              date="May 2018 - Aug 2018"
              description="I helped people make meetings better at Soapbox"
            />
            <Item
              date="Jan 2018 - Apr 2018"
              description="I helped people make meetings better at Soapbox"
            />
            <Item
              date="May 2017 - Aug 2017"
              description="I helped people make meetings better at Soapbox"
            />
          </Section>
          <Section header="Projects">
            <Stack spacing={8}>
              <Project />
              <Project />
            </Stack>
          </Section>
          <Section header="Photography">
            <Text mb={7}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Photos />
          </Section>
      </Shell>
    </>
  );
}
