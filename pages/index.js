import Projects from "@/components/Projects";
import Current from "@/components/Current";
import Shell from "@/components/Shell";
import { Box, Flex, Center, Divider, Heading, Text, VStack } from "@chakra-ui/react";


export default function Home() {
  return (
    <Shell>
      <Flex mb={24} h="30vh" justifyContent="flex-end" flexDirection="column">
        <Heading size="2xl" mb={4}>
          Hi, my name is Mitul
        </Heading>
        <Text fontSize="xl">
          An aspiring product manager, eager to join a rocketship.
        </Text>
      </Flex>
      <Current />
      <Heading
        textTransform="uppercase"
        size="xs"
        color="cyan.400"
        letterSpacing="1.3px"
        my={5}
      >
        Projects
      </Heading>
      <Projects />
      <Box>
        <Heading
          textTransform="uppercase"
          size="xs"
          color="cyan.400"
          letterSpacing="1.3px"
          my={5}
        >
          Experience
        </Heading>
        <Box>
          <Heading size="lg" mb={3}>
            Soapbox
          </Heading>
          <Text>
            I worked at Soapbox to help make meetings better for everyone.
          </Text>
        </Box>
      </Box>
    </Shell>
  );
}
