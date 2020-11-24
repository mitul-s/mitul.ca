import { Box, HStack, Flex, IconButton, Button, Heading } from "@chakra-ui/react"
import NextLink from "next/link"
import { Horse, Heart, Cube } from "phosphor-react";

const Navigation = () => {
    return (
      <Flex mb={[8, 12]} w="full" justifyContent="center">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="full"
          maxWidth="700px"
          px={8}
          h="12vh"
          as="nav"
        >
          <IconButton
            colorScheme="blueGray"
            aria-label="Search database"
            icon={<Horse weight="fill" />}
          />
          <HStack spacing={2}>
            <NextLink href="/dashboard" passHref>
              <Button as="a" colorScheme="blueGray" variant="ghost">
                Dashboard
              </Button>
            </NextLink>
            <NextLink href="/blog" passHref>
              <Button as="a" colorScheme="blueGray" variant="ghost">
                Blog
              </Button>
            </NextLink>
            <NextLink href="/" passHref>
              <Button as="a" colorScheme="blueGray" variant="ghost">
                Home
              </Button>
            </NextLink>
            {/* <NextLink href="/about" passHref>
              <Button colorScheme="rose" as="a" variant="solid">
                Hire Me
              </Button>
            </NextLink> */}
          </HStack>
        </Flex>
      </Flex>
    );
}

export default Navigation;