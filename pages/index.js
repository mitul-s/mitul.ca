import Projects from "@/components/Projects";
import Current from "@/components/Current";
import Item from "@/components/Item";
import Shell from "@/components/Shell";
import Overview from "@/components/Overview";
import Photos from "@/components/Photos";
import SectionHeader from "@/components/SectionHeader";
import { Box, Flex, Link, Badge, Center, Divider, Heading, Text, Stack } from "@chakra-ui/react";


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
        <Box my={5}>
          <SectionHeader>Experience</SectionHeader>
          <Item />
          <Item />
          <Item />
          <Item />
          <Box my={5}>
            <SectionHeader>Projects</SectionHeader>
            <Text>Hello</Text>
          </Box>
          <SectionHeader>Photography</SectionHeader>
          <Text mb={7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Photos />
        </Box>
      </Shell>
    </>
  );
}
