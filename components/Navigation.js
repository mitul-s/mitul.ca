import React from "react"
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
    <IconButton bg="transparent" order={["1", null, 0]} p={0} onClick={toggleColorMode} icon={colorMode === "light" ? <Moon /> : <Sun />} />
  )
}

const NavButton = React.forwardRef((props, ref) => {
  const { colorMode } = useColorMode()
  return (
    <Button
      // className="underline-animation"
      colorScheme="trueGray"
      fontSize="lg"
      fontWeight="400"
      sx={{
        ":hover:after": {
          transform: "scaleX(1)",
          transformOrigin: "bottom left",
        },
      }}
      as="a"
      variant="link"
      _hover={{
        textDecoration: "none",
        color: colorMode === "light" ? "blueGray.900" : "blueGray.50",
      }}
      _after={{
        content: '""',
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "1px",
        bottom: 0,
        left: 0,
        borderRadius: 2,
        backgroundColor: colorMode === "light" ? "blueGray.900" : "blueGray.50",
        marginBottom: "-5px",
        transformOrigin: "bottom right",
        transition: "transform 0.35s ease-out",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
})

const NavLinks = ({ ...rest }) => (
  <Stack spacing={4} alignItems={["center", null, "flex-end"]} {...rest}>
    <NextLink href="/">
      <NavButton>Home</NavButton>
    </NextLink>
    <NextLink href="/about">
      <NavButton>About</NavButton>
    </NextLink>
      <NavButton disabled>
        Bookshelf
        <Badge ml={2}>WIP</Badge>
      </NavButton>
    <NavButton
      href="mailto:mitulxshah@gmail.com?subject=Hi Mitul"
    >
      Contact
    </NavButton>
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
      mt={[2, null, 24]}
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