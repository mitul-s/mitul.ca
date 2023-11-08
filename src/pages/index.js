import Project from "@/components/Projects";
import Current from "@/components/Current";
import Item from "@/components/Item";
import Shell from "@/components/Shell";
import Section from "@/components/Section";
import Photos from "@/components/Photos";
import {
  PaperPlaneTilt,
  DiscordLogo,
  TwitterLogo,
  InstagramLogo,
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
  useColorMode,
} from "@chakra-ui/react";

import PortfolioImages from "@/components/Images";

import NextLink from "next/link";

import { useClipboard } from "use-clipboard-copy";
import ActionButton from "@/components/core/ActionButton";

const SecondaryBtn = ({ children, icon, ...rest }) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      variant="link"
      color="trueGray.500"
      fontWeight="regular"
      leftIcon={icon}
      _hover={{
        color: colorMode === "light" ? "blueGray.900" : "blueGray.50",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default function Home() {
  const toast = useToast();
  const clipboard = useClipboard({
    onSuccess() {
      toast({
        description: "Copied username to clipboard 🙂",
        status: "success",
        duration: "1500",
      });
    },

    onError() {
      toast({
        description: "Hm, couldn't copy the username..",
        status: "error",
        isClosable: true,
      });
    },
  });

  return (
    <>
      <Shell>
        <Flex
          // py={[0, null, 24]}
          // h={["90vh", null, "50vh"]}
          mt={24}
          mb={8}
          justifyContent="flex-end"
          flexDirection="column"
        >
          <Heading mb={4}>Hi, my name is Mitul</Heading>
          <Box lineHeight={9}>
            <Text fontSize={["lg", null, "xl"]} mb={4}>
              My goal is pretty simple, build great things with great people. If
              we can work together to do that,{" "}
              <Link
                href="mailto:mitulxshah@gmail.com"
                borderBottom="1px solid"
                pb="3px"
                _hover={{ color: "cyan.600" }}
              >
                I&apos;d love to chat 👋
              </Link>
              .
            </Text>
          </Box>
          <NextLink href="/about">
            <ActionButton mt={3}>More about me →</ActionButton>
          </NextLink>
        </Flex>
        <Current />
        <Section header="Experience">
          <Stack spacing={8}>
            <Item
              role="Design Engineer"
              company="Compound"
              date="December 2022 - September 2023"
              link="https://withcompound.com/?ref=mitul.ca"
              description="Financial planning for tech employees. Built lots of financial charts, rebuilt a global navigation and worked on improving UX for advisors to thrive in supporting clients."
            />
            <Item
              role="UX Developer"
              company="Composer"
              date="June 2021 - November 2022"
              link="https://composer.trade/?ref=mitul.ca"
              description="Building the next step in democratizing investing, with lots of CSS, a ClojureScript based design system and a few musical puns along the way"
            />
            <Item
              role="Product Analyst"
              company="Soapbox"
              date="May 2019 - Mar 2020"
              description="Designed growth experiments to convert users from free to paid, built the sales operations and email-marketing playbook from the ground up"
            />
            <Item
              role="Operations Intern"
              company="Uber"
              date="May 2018 - Aug 2018"
              description="Led competitive research for all of Canada and supported the launch of 30 cities in 1 day through building courier acquisition campaigns"
            />
            <Item
              role="Product Lead Intern"
              company="CIBC Digital"
              date="Jan 2018 - Apr 2018"
              description="Built my foundational knowledge of product and led development of three consumer-facing MVPs to impact over 10 million CIBC clients"
            />
          </Stack>
        </Section>
        <Section header="Projects">
          <Stack spacing={8}>
            {/* <Project
              title="Annotate – WIP"
              description="A browser extension to augment the internet experience; annotate, save and share. This is a work in progress, learn more through my journal link below."
              demo={false}
              journal={true}
            /> */}
            <Project
              title="Places to Read"
              description="A microsite of community submitted parks around the world that are ideal places to sit down and enjoy a book. Built with NextJS and Tailwind CSS."
              repo="placestoread"
              demo={true}
              code={true}
            />
            <Project
              title="Paprback"
              description="Built a platform to showcase your bookshelves using React Hooks, NextJS, and Chakra UI, while working alongside a backend developer and designer. We received 300+ sign ups, 1200+ visitors along with 600+ upvotes and 8 awards on Reddit."
              repo="paprback.co"
              demo={true}
              code={true}
            />
            <Project
              title="Are You Balding"
              description="Built a campaign to find out if you're balding with Framer Motion & React to support the acquisition funnel for online pharmacies.  Designed mockups and prototypes in Figma, and translated to code with advanced interactions & animations."
              repo="areyoubalding.com"
              demo={false}
              code={true}
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
                <Text fontWeight="bold">
                  Some notable accomplishments I&apos;m proud to share
                </Text>
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
                    Featured in Toronto&apos;s{" "}
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
              </List>
            </Box>
            <Text>
              Today, I’m more focused on improving my drone skills and becoming
              a better artist rather than growing my online presence. You can
              learn a little more by visiting my photography portfolio below.
            </Text>
            <Link
              href="https://typicalmitul.com/?ref=mitul.ca"
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <ActionButton>Visit my portfolio →</ActionButton>
            </Link>
            <HStack>
              <Link
                href="https://instagram.com/typicalmitul"
                variant="ghost-sm"
                marginLeft={-1.5}
                isExternal
              >
                <Flex alignItems="center" justifyContent="center" fontSize="md">
                  <Text marginRight={1}>Instagram</Text>
                  <InstagramLogo />
                </Flex>
              </Link>
              <Link
                href="https://500px.com/typicalmitul"
                variant="ghost-sm"
                marginLeft={-1.5}
                isExternal
              >
                <Flex alignItems="center" justifyContent="center" fontSize="md">
                  <Text marginRight={1}>500px</Text>
                  <Aperture />
                </Flex>
              </Link>
            </HStack>
          </Stack>
        </Section>
        <Photos images={PortfolioImages} mt={-8} mb={8} />
        <Section header="Contact">
          <Stack spacing={4} mb={7}>
            <Text>
              I love connecting with new people to learn from and am always more
              than willing to help with questions you may have.
            </Text>
            <Text>
              Besides that, I enjoy talking about photography, abandoned
              side-projects, stocks that could make us bazillionaires, or how
              Anthony Fantano made a mistake by giving MBDTF a 6/10.
            </Text>
          </Stack>
          <Stack align="flex-start" spacing={3}>
            <Link
              href="mailto:mitulxshah@gmail.com"
              mb="-4px"
              _hover={{ textDecoration: "none" }}
            >
              <SecondaryBtn icon={<PaperPlaneTilt />}>
                Send an email
              </SecondaryBtn>
            </Link>
            <SecondaryBtn
              icon={<DiscordLogo />}
              onClick={() => clipboard.copy("mitul#0988")}
            >
              Chat on Discord – mitul#0988
            </SecondaryBtn>
            <Link
              href="https://twitter.com/typicalmitul"
              _hover={{ textDecoration: "none" }}
              isExternal
            >
              <SecondaryBtn icon={<TwitterLogo />}>
                DM me on Twitter
              </SecondaryBtn>
            </Link>
          </Stack>
        </Section>
      </Shell>
    </>
  );
}
