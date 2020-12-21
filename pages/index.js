import Project from "@/components/Projects";
import Current from "@/components/Current";
import Item from "@/components/Item";
import Shell from "@/components/Shell";
import Section from "@/components/Section";
import Photos from "@/components/Photos";
import {
  PaperPlaneTilt,
  ChatCircle,
  TwitterLogo,
  InstagramLogo,
  Camera,
  Aperture,
  Circle,
} from "phosphor-react";
import {
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  Button,
  Link,
  Box,
  ListItem,
  ListIcon,
  List,
  useToast,
  useMediaQuery,
} from "@chakra-ui/react";

import { useClipboard } from "use-clipboard-copy";

export default function Home() {
  
  const toast = useToast();
  const clipboard = useClipboard({
    onSuccess() {
      toast({
        description: "Copied username to clipboard 🙂",
        status: "success",
        duration: "900",
      });
    },

    onError() {
      toast({
        description: "Copied username to clipboard 🙂",
        status: "error",
        isClosable: true,
      });
    },
  });

  return (
    <>
      <Shell>
        <Flex
          py={24}
          h={["80vh", null, "50vh"]}
          justifyContent="flex-end"
          flexDirection="column"
        >
          <Heading mb={4}>Hi, my name is Mitul</Heading>
          <Text fontSize="xl" mb={3}>
            I’m still figuring out what my life story would look like here, but
            for now, I’m happy to share that I’m a curious learner of all
            things. I’m a firm believer in the ideologies of doing difficult
            things because they are the most rewarding and seeking discomfort to
            support personal growth. A couple of topics I'm super into: investment psychology, Fornite and the metaverse,
            photography and binge watching David Dobrik vlogs.
          </Text>
          <Text fontSize="xl">
            <span style={{ fontWeight: "bold" }}>Currently</span>, I’m searching
            for my next opportunity ideally as a UX Developer or an associate
            product manager. The goal is to build great things with great
            people, and I would love to chat if you can help me achieve that.
          </Text>
        </Flex>
        <Current />
        <Section header="Experience">
          <Item
            date="May 2019 - Mar 2020"
            description="Product Analyst at Soapbox to help make meetings better for everyone by running growth experiments"
          />
          <Item
            date="May 2018 - Aug 2018"
            description="Operations Intern at Uber Eats to support launching 30-cities-in-1 day and lead competitive research"
          />
          <Item
            date="Jan 2018 - Apr 2018"
            description="Product Lead Intern at CIBC Digital to build my foundational knowledge of product and ship four consumer-facing features"
          />
          <Item
            date="May 2017 - Aug 2017"
            description="Digital Strategy Intern at Bank of Montreal to learn about user research and make strong data driven decisions"
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
            <Box>
              <List spacing={1}>
                <Text>Some notable accomplishments I'm proud to share</Text>
                <ListItem display="flex" alignItems="center">
                  <ListIcon
                    as={Circle}
                    fontSize="xs"
                    mb="-1px"
                    color="trueGray.400"
                  />
                  Every Google Pixel has one of my photos as a default wallpaper
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon
                    as={Circle}
                    fontSize="xs"
                    mb="-1px"
                    color="trueGray.400"
                  />
                  <Text>
                    Featured in Toronto's{" "}
                    <Link
                      href="https://drive.google.com/file/d/0B-wYLuK2QlRwb1FmOThmUmYwekU/view?usp=sharing"
                      textDecoration="underline"
                      isExternal
                    >
                      Metro News newspaper
                    </Link>{" "}
                    as an artist
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon
                    as={Circle}
                    fontSize="xs"
                    mb="-1px"
                    color="trueGray.400"
                  />
                  I earned about 20K within six months of 2019 – this was beyond
                  my wildest dreams
                </ListItem>
              </List>
            </Box>
            <Text>
              Today, I’m more focused on improving my drone skills and becoming
              a better artist rather than growing my online presence. You can
              learn a little more by visiting my photography portfolio below.
            </Text>
            <HStack>
              <Link href="https://typicalmitul.com" isExternal>
                <Button variant="link" leftIcon={<Camera />}>
                  Portfolio
                </Button>
              </Link>
              <Link href="https://typicalmitul.com" isExternal>
                <Button variant="link" leftIcon={<InstagramLogo />}>
                  Instagram
                </Button>
              </Link>
              <Link href="https://typicalmitul.com" isExternal>
                <Button variant="link" leftIcon={<Aperture />}>
                  500px
                </Button>
              </Link>
            </HStack>
            <Photos />
          </Stack>
        </Section>
        <Section header="Contact">
          <Stack spacing={4} mb={7}>
            <Text>
              I love connecting with new people to learn from and am always more
              than willing to help with questions you may have.
            </Text>
            <Text>
              If you would like to work on a project together or hire me, don't
              hesistate. I'd love to work with you.
            </Text>
            <Text>
              Besides that, I enjoy talking about photography, abandoned
              side-projects, stocks that could make us bazillionaires, the
              psychology behind why we make poor decisions, or how Anthony
              Fantano made a mistake by giving MBDTF a 6/10.
            </Text>
          </Stack>
          <Stack align="flex-start">
            <Link href="mailto:mitulxshah@gmail.com">
              <Button variant="link" leftIcon={<PaperPlaneTilt />}>
                Feel free to email me
              </Button>
            </Link>
            <Button
              variant="link"
              leftIcon={<ChatCircle />}
              onClick={() => clipboard.copy("mitul#0988")}
            >
              Chat on Discord – mitul#0988
            </Button>
            <Link href="https://twitter.com/typicalmitul" isExternal>
              <Button variant="link" leftIcon={<TwitterLogo />}>
                DM me on Twitter
              </Button>
            </Link>
          </Stack>
        </Section>
      </Shell>
    </>
  );
}
