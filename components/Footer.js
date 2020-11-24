import { Box, Flex, Heading, Text, HStack, Icon } from "@chakra-ui/react";
import { TwitterLogo, InstagramLogo } from "phosphor-react";

const Footer = () => {
  return (
    <Flex h="12vh" alignItems="center">
      <Flex w="full" justifyContent="space-between">
        <Text>Contact</Text>
        <HStack>
          <Icon as={TwitterLogo}/>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Footer;
