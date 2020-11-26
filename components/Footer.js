import { Box, Flex, Heading, Text, HStack, Icon } from "@chakra-ui/react";
import { TwitterLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

const Footer = () => {
  return (
    <Flex h="12vh" alignItems="center">
      <Flex w="full" justifyContent="space-between">
        <Text>Contact</Text>
        <HStack>
          <Icon fontSize="lg" as={TwitterLogo}/>
          <Icon fontSize="lg" as={InstagramLogo}/>
          <Icon fontSize="lg" as={LinkedinLogo} />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Footer;
