import { Box, Flex, Heading, Text } from "@chakra-ui/react"

export default function Item({ date, description, link }) {
    return (
      <Box my={3}>
        <Text mb={1} fontSize="sm" color="trueGray.500">
          {date}
        </Text>
        <Box>
          <Text>
            {description}
          </Text>
        </Box>
      </Box>
    );
}