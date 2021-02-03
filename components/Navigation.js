import { Box, Stack, Flex, Icon, Text, Link, Button, IconButton, HStack, useColorMode, Badge } from "@chakra-ui/react"
import { TwitterLogo, InstagramLogo, GithubLogo, LinkedinLogo, Sun, Moon } from "phosphor-react";
import NextLink from "next/link"

const FooterIcon = ({ title, icon, link }) => (
  <Link
    href={link}
    isExternal
    data-splitbee-event={title}
    data-splitbee-event-type="Social"
  >
    <Icon
      fontSize="xl"
      transition="150ms ease-in-out"
      _hover={{ color: "cyan.600" }}
      as={icon}
    />
  </Link>
);

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton bg="transparent" p={0} onClick={toggleColorMode} icon={colorMode === "light" ? <Moon /> : <Sun />} />
  )
}

const NavButton = ({ link, children, ...rest }) => (
  <NextLink href={link}>
    <Button colorScheme="trueGray" as="a" variant="link" {...rest}>
      {children}
    </Button>
  </NextLink>
);

const NavLinks = ({ ...rest }) => (
  <Stack spacing={4} alignItems={["center", null, "flex-end"]} {...rest}>
    <NavButton link="/">Home</NavButton>
    <NavButton link="/about">About</NavButton>
    <NavButton link="/" disabled>
      Bookshelf
      <Badge ml={2}>WIP</Badge>
    </NavButton>
    <Button
      colorScheme="trueGray"
      as="a"
      variant="link"
      href="mailto:mitulxshah@gmail.com?subject=Hi Mitul"
    >
      Contact
    </Button>
  </Stack>
);


const Navigation = ({ styles }) => (
  <Flex className={styles}>
    <Flex
      as="nav"
      px={8}
      h={["10vh", null, "30vh"]}
      alignItems={["center", null, "flex-end"]}
      justifyContent="space-between"
      mt={[0, null, 24]}
      position={["block", null, "fixed"]}
      flexDirection={["row", null, "column"]}
      w={["100%", null, "min-content"]}
    >
      {/* <Box>🏄‍♂️</Box> */}
      <ToggleColorMode />
      <NavLinks direction={["row", null, "column"]} />
      <HStack display={["none", null, "flex"]}>
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
          link="https://www.linkedin.com/in/heymitul/"
        />
      </HStack>
    </Flex>
  </Flex>
);


export default Navigation;