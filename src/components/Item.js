import { Flex, Heading, Divider, Stack, Text, Link } from "@chakra-ui/react";
import { ArrowSquareOut } from "phosphor-react";

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
    <Stack spacing={4}>
      <Heading fontSize="xl" fontWeight="bold">
        {role}
      </Heading>
      <Flex alignItems="center" justifyContent="space-between">
        {link ? (
          <Link
            href={link}
            isExternal
            fontSize="md"
            color="trueGray.400"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              gap: 3,
            }}
            data-splitbee-event={company}
            data-splitbee-event-type="Work"
          >
            {company}
            <ArrowSquareOut />
          </Link>
        ) : (
          <Text fontSize="md" color="trueGray.400">
            {company}
          </Text>
        )}
        <Text fontSize="md" color="trueGray.400">
          {date}
        </Text>
      </Flex>
      {description ? <Text>{description}</Text> : ""}
      <Divider />
    </Stack>
  );
}
