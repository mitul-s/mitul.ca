import { Flex, Link, HStack, Icon } from "@chakra-ui/react";
import { TwitterLogo, InstagramLogo, GithubLogo, LinkedinLogo } from "phosphor-react";


const FooterIcon = ({ title, icon, link }) => (
  <Link
    href={link}
    isExternal
    data-splitbee-event={title}
    data-splitbee-event-type="Social"
    aria-label={title}
  >
    <Icon
      fontSize="lg"
      transition="150ms ease-in-out"
      _hover={{ color: "cyan.600" }}
      as={icon}
    />
  </Link>
);

const Footer = () => {
  return (
    <Flex h="12vh" alignItems="center">
      <Flex w="full" justifyContent="flex-end">
        <HStack>
          <FooterIcon
            title="twitter"
            icon={TwitterLogo}
            link="https://twitter.com/typicalmitul"
          />
          <FooterIcon
            title="instagram"
            icon={InstagramLogo}
            link="https://instagram.com/typicalmitul"
          />
          <FooterIcon
            title="github"
            icon={GithubLogo}
            link="https://github.com/mitul-s"
          />
          <FooterIcon
            title="linkedin"
            icon={LinkedinLogo}
            link="https://linkedin.com/in/heymitul"
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Footer;
