import { Box, Flex, Heading, Divider, Stack, Text } from "@chakra-ui/react"

// export default function Item({ date, description, link }) {
//     return (
//       <Box my={3}>
//         <Text mb={1} fontSize="sm" color="trueGray.500">
//           {date}
//         </Text>
//         <Box>
//           <Text>
//             {description}
//           </Text>
//         </Box>
//       </Box>
//     );
// }

export default function Item({ role, company, date, description, link }) {
return (
      <Stack mt={8} spacing={3}>
        <Heading fontSize="xl" fontWeight="bold">
          {role}
        </Heading>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="md" fontWeight="500" color="trueGray.400">
            {company}
          </Text>
          <Text fontSize="md" color="trueGray.400">
            {date}
          </Text>
        </Flex>
        <Text>{description}</Text>
        <Divider />
      </Stack>
  );
}