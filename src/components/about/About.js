import {
  Box,
  Link,
  Icon,
  Flex,
  HStack,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import Photos from "@/components/Photos";
import { PersonalImages } from "@/components/Images";
import { ArrowRight } from "phosphor-react";
import Section from "@/components/Section";

const AboutText = () => (
  <>
    <Stack
      spacing={8}
      fontSize={["lg", null, "xl"]}
      mb={4}
      lineHeight={7}
      letterSpacing="-0.04px"
    >
      <Text mt={3}>
        I’m still figuring out what my life would look like here, but for now,
        I’m happy to share I’m a curious learner of all things. My passions are
        driven by finding the connections between art, human nature, and numbers
        to build memorable experiences.
      </Text>
      <Box>
        <Text fontWeight="bold" mb={2}>
          There are two core mantras I like to live my life by:
        </Text>
        <Stack spacing={2}>
          <HStack>
            <Icon as={ArrowRight} />
            <Text>Do difficult things because they are the most rewarding</Text>
          </HStack>
          <HStack>
            <Icon as={ArrowRight} />
            <Text>Seek discomfort</Text>
          </HStack>
        </Stack>
      </Box>
      <Text>
        Throughout my professional life, I had the pleasure of joining Soapbox,
        a B2B SaaS, where I helped convert users from free to paid through
        growth experiments. While in school, I had several internships
        specifically including product roles in banking and operations at Uber.
        You can learn a little more on my{" "}
        <Link
          data-splitbee-event="linkedin"
          data-splitbee-event-type="Social"
          href="https://linkedin.com/in/heymitul"
          textDecoration="underline"
          _hover={{ color: "cyan.600" }}
          isExternal
        >
          LinkedIn.
        </Link>
      </Text>

      <Text>
        In my free time, I’m usually editing or taking photos, binge-watching
        vlogs by Casey Neistat, playing video games, starting a side project
        (with hopes to not abandon it), or learning about investment psychology.
      </Text>
    </Stack>
  </>
);

const About = () => {
  return (
    <>
      <Photos images={PersonalImages} mt={24} mb={8} />
      <Flex justifyContent="flex-end" flexDirection="column">
        <Stack spacing={4}>
          <Section header="About">
            <Heading mb={4}>Mitul Shah</Heading>
            <AboutText />
            <Text>
              This is website is always a work in progress - feel free to check
              it out on{" "}
              <Link
                data-splitbee-event="github"
                data-splitbee-event-type="Social"
                href="https://github.com/mitul-s/mitul.ca"
                textDecoration="underline"
                _hover={{ color: "cyan.600" }}
                isExternal
              >
                GitHub
              </Link>
              .
            </Text>
          </Section>
        </Stack>
      </Flex>
    </>
  );
};

export default About;
