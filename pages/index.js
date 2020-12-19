
import Project from "@/components/Projects";
import Current from "@/components/Current";
import Item from "@/components/Item";
import Shell from "@/components/Shell";
import Section from "@/components/Section";
import Photos from "@/components/Photos";
import { ArrowRight } from "phosphor-react";
import { Flex, Heading, Text, Stack, HStack, Button, Link } from "@chakra-ui/react";


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
              description="A showcase for your bookshelves. My first big project, built with React & Chakra UI, while working alongside a backend developer and designer. We got 600+ upvotes and 8 awards on Reddit."
              repo="paprback.co"
            />
            <Project
              title="Are You Balding"
              description="A small virality project that I’m still working on. Find out if you’re balding by completing a short but fun interactive quiz and receive solutions that help save your hair. "
            />
          </Stack>
        </Section>
        <Section header="Photography">
          <Stack spacing={5}>
            <Text>
              Over the past few years, I’ve been building my craft as a
              photographer. I managed to turn a hobby into a business, which
              allowed me to achieve goals I never thought I could. This included
              photographing the Uber CEO, being paid to travel and working with
              brands I love.
            </Text>
            <Text>
              Today, I’m more focused on improving my drone skills rather than
              growing my online presence. You can learn a little more by
              visiting my photography portfolio below.
            </Text>
            <HStack>
              <Link href="https://typicalmitul.com" isExternal>
                <Button variant="link">Portfolio</Button>
              </Link>
              <Link href="https://typicalmitul.com" isExternal>
                <Button variant="link">Instagram</Button>
              </Link>
              <Link href="https://typicalmitul.com" isExternal>
                <Button variant="link">500px</Button>
              </Link>
            </HStack>

            <Photos />
          </Stack>
        </Section>
        <Section header="Contact">
          <Text mb={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Link>
            <Button variant="link" rightIcon={<ArrowRight />}>
              Let's chat
            </Button>
          </Link>
        </Section>
      </Shell>
    </>
  );
}
