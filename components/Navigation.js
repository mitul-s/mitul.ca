import { Box, Stack, Flex, Icon, Text, Link, Button, IconButton, HStack, useColorMode } from "@chakra-ui/react"
import { TwitterLogo, InstagramLogo, GithubLogo, LinkedinLogo, Sun, Moon } from "phosphor-react";
import NextLink from "next/link"

const FooterIcon = ({ icon, link }) => (
  <Link href={link} isExternal>
    <Icon fontSize="lg" as={icon} />
  </Link>
);

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton bg="transparent" p={0} onClick={toggleColorMode} icon={colorMode === "light" ? <Moon /> : <Sun />} />
  )
}

const NavLinks = ({ ...rest }) => (
  <Stack spacing={3} alignItems={["center", null, "flex-end"]} {...rest}>
    {/* <NextLink href="/">
      <Button colorScheme="trueGray" as="a" variant="link">
        Home
      </Button>
    </NextLink>
    <NextLink href="/about">
      <Button colorScheme="trueGray" as="a" variant="link">
        About
      </Button>
    </NextLink> */}
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


// const DesktopNav = ({ ...rest }) => {
//   return (
//     <Flex {...rest}>
//       <Flex
//         justifyContent="space-between"
//         textAlign="right"
//         px={8}
//         mt={24}
//         flexDirection="column"
//         h="20vh"
//         position="fixed"
//         as="nav"
//       >
//         <Box>🏄‍♂️</Box>
//         <NavLinks />
//         <HStack>
//           <FooterIcon
//             icon={TwitterLogo}
//             link="https://twitter.com/typicalmitul"
//           />
//           <FooterIcon
//             icon={InstagramLogo}
//             link="https://instagram.com/typicalmitul"
//           />
//           <FooterIcon icon={GithubLogo} link="https://github.com/mitul-s" />
//           <FooterIcon
//             icon={LinkedinLogo}
//             link="https://www.linkedin.com/in/heymitul/"
//           />
//         </HStack>
//       </Flex>
//     </Flex>
//   );
// };



const Navigation = ({ styles }) => (
  <Flex className={styles}>
    <Flex
      as="nav"
      px={8}
      h={["10vh", null, "20vh"]}
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


export default Navigation;