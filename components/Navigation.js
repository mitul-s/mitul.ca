import { Box, Stack, Flex, Icon, Text, Link, Button, HStack } from "@chakra-ui/react"
import { TwitterLogo, InstagramLogo, GithubLogo, LinkedinLogo } from "phosphor-react";
import NextLink from "next/link"

const FooterIcon = ({ icon, link }) => (
  <Link href={link} isExternal>
    <Icon fontSize="lg" as={icon} />
  </Link>
);

const NavLinks = ({ ...rest }) => (
  <Stack spacing={3} alignItems="flex-end" {...rest}>
    <NextLink href="/">
      <Button colorScheme="blueGray" as="a" variant="link">
        Home
      </Button>
    </NextLink>
    <NextLink href="/about">
      <Button colorScheme="blueGray" as="a" variant="link">
        About
      </Button>
    </NextLink>
    <Button
      colorScheme="blueGray"
      as="a"
      variant="link"
      href="mailto:mitulxshah@gmail.com?subject=Hi Mitul"
    >
      Contact
    </Button>
  </Stack>
);



const MobileNav = () => (
  <Flex px={8} h="10vh" alignItems="center" justifyContent="space-between">
    <Box>🏄‍♂️</Box>
    <NavLinks direction="row" />
  </Flex>
);



const DesktopNav = ({ ...rest }) => {
    return (
      <Flex {...rest}>
        <Flex
          justifyContent="space-between"
          textAlign="right"
          px={8}
          mt={24}
          flexDirection="column"
          h="20vh"
          position="fixed"
          as="nav"
        >
          <Box>🏄‍♂️</Box>
          <NavLinks />
          <HStack>
            <FooterIcon
              icon={TwitterLogo}
              link="https://twitter.com/typicalmitul"
            />
            <FooterIcon
              icon={InstagramLogo}
              link="https://instagram.com/typicalmitul"
            />
            <FooterIcon icon={GithubLogo} link="https://github.com/mitul-s" />
            <FooterIcon
              icon={LinkedinLogo}
              link="https://www.linkedin.com/in/heymitul/"
            />
          </HStack>
        </Flex>
      </Flex>
    );
}

const Navigation = ({ isDesktop, styles, ...rest }) => {
  return isDesktop ? <DesktopNav className={styles} {...rest} /> : <MobileNav />;
};

export default Navigation;