
import Project from "@/components/Projects";
import Current from "@/components/Current";
import Item from "@/components/Item";
import Shell from "@/components/Shell";
import Section from "@/components/Section";
import Photos from "@/components/Photos";
import SectionHeader from "@/components/SectionHeader";
import { Box, Flex, Link, Button, Tooltip, Center, Divider, Heading, Text, Stack, Icon, HStack } from "@chakra-ui/react";


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
            description="Supported launching 30-cities-in-1 day at Uber Eats as an Courier Operations Intern"
          />
          <Item
            date="Jan 2018 - Apr 2018"
            description="Built my foundational knowledge of product as an Intern at CIBC Digital"
          />
          <Item
            date="May 2017 - Aug 2017"
            description="Digital Strategy Intern @ Bank of Montreal"
          />
        </Section>
        <Section header="Projects">
          <Stack spacing={8}>
            <Project
              title="Paprback"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
              repo="paprback.co"
            />
            <Project
              title="Are You Balding"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Stack>
        </Section>
        <Section header="Photography">
          <Text mb={7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Photos />
        </Section>
      </Shell>
    </>
  );
}
