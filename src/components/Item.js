import { Flex, Heading, Divider, Stack, Text, Link, useColorMode } from "@chakra-ui/react";
import { ArrowUpRight } from "phosphor-react";

export default function Item({ role, company, date, description, link }) {
  const { colorMode } = useColorMode();
  return (
    <Stack spacing={4}>
      <Heading fontSize="xl" fontWeight="bold">
        {role}
      </Heading>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        color="trueGray.500"
        fontSize="md"
      >
        {link ? (
          <Link
            data-splitbee-event={company}
            data-splitbee-event-type="Work"
            href={link}
            variant="ghost-sm"
            marginLeft={-1.5}
            isExternal
          >
            <Flex alignItems="center" justifyContent="center" fontSize="md">
              <Text marginRight={1}>{company}</Text>
              <ArrowUpRight />
            </Flex>
          </Link>
        ) : (
          <Text>{company}</Text>
        )}
        <Text>{date}</Text>
      </Flex>
      {description ? <Text>{description}</Text> : ""}
      <Divider />
    </Stack>
  );
}
