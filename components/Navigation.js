import { Box, HStack, Flex, Text, Link, Button } from "@chakra-ui/react"
import { ArrowRight } from "phosphor-react";

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
          <Box></Box>
          <HStack spacing={6}>
            <Link href="mailto:mitulxshah@gmail.com?subject=Hi Mitul">
              <Button colorScheme="blueGray" as="a" variant="link" rightIcon={<ArrowRight/>}>
                Get in touch
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    );
}

export default Navigation;