import { Flex, Link, HStack, Icon } from "@chakra-ui/react";
import { TwitterLogo, InstagramLogo, GithubLogo } from "phosphor-react";


const FooterIcon = ({ icon, link }) => (
    <Link href={link} isExternal>
      <Icon fontSize="lg" as={icon} />
    </Link>
)

const Footer = () => {
  return (
    <Flex h="12vh" alignItems="center">
      <Flex w="full" justifyContent="flex-end">
        <HStack>
          <FooterIcon icon={TwitterLogo} link="https://twitter.com/typicalmitul" />
          <FooterIcon icon={InstagramLogo} link="https://instagram.com/typicalmitul" />
          <FooterIcon icon={GithubLogo} link="https://github.com/mitul-s"/>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Footer;
