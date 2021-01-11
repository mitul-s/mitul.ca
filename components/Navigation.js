import { Box, Stack, Flex, Text, Link, Button } from "@chakra-ui/react"
import NextLink from "next/link"

const Navigation = ({ ...rest }) => {
    return (
      <Flex
        // mb={[8, 12]}
        // w="full"
        justifyContent="flex-end"
        {...rest}
      >
        <Flex
          alignItems="flex-end"
          // height="24vh"
          // justifyContent="space-between"
          // w="full"
          // maxWidth="700px"
          px={8}
          mt={24}
          // h="12vh"
          position="fixed"
          as="nav"
        >
          <Stack spacing={3} alignItems="flex-end">
            <NextLink href="/">
              <Button colorScheme="blueGray" as="a" variant="link">
                Home
              </Button>
            </NextLink>
            <NextLink href="/about">
              <Button colorScheme="blueGray" as="a" variant="link">
                About
              </Button>
            </NextLink>
            <Link href="mailto:mitulxshah@gmail.com?subject=Hi Mitul">
              <Button colorScheme="blueGray" as="a" variant="link">
                Contact
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    );
}

export default Navigation;