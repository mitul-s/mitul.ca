import { Box, Flex, Heading, Text } from "@chakra-ui/react"

export default function Item() {
    return (
      <Box my={3}>
        <Text mb={1} fontSize="sm" color="trueGray.500">
          May 2019 - Mar 2020
        </Text>
        <Flex>
          <Text mr={2} fontWeight="normal">
            I helped people do things at Soapbox
          </Text>
        </Flex>
      </Box>
    );
}