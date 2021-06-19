import React from "react";
import {
  Box,
  Stack,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  IconButton,
  HStack,
  useColorMode,
  Divider,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Circle,
  Badge,
} from "@chakra-ui/react";
import {
  TwitterLogo,
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  List,
  Sun,
  Moon,
} from "phosphor-react";
import styles from ".././styles/sidebar.module.css";
import NextLink from "next/link";

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
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      bg={colorMode === "light" ? "trueGray.100" : "trueGray.900"}
      order={["1", null, 0]}
      p={0}
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <Moon /> : <Sun />}
    />
  );
};

const NavButton = React.forwardRef((props, ref) => {
  const { colorMode } = useColorMode();
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
});

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
    <NavButton href="mailto:mitulxshah@gmail.com?subject=Hi Mitul">
      Contact
    </NavButton>
  </Stack>
);

const Navigation = ({ styles }) => (
  <Box m="0 auto">
    <Box
      display={["none", "none", "none", "flex"]}
      mt={24}
      w="auto"
      position="fixed"
      alignItems="flex-end"
      justifyContent="space-between"
      flexDirection="column"
      h="30vh"
    >
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
    </Box>
  </Box>
);


const SocialButton = ({ icon, link }) => {
  const { colorMode } = useColorMode();
  return (
    <Circle
      as="a"
      href={link}
      target="_blank"
      size="40px"
      bgColor={
        colorMode === "light"
          ? "rgba(245, 245, 245, 0.45)"
          : "rgba(13, 16, 19, 0.45)"
      }
      transitionDuration="250ms"
      _hover={{
        borderColor: `${colorMode === "light" ? "black" : "white"}`,
      }}
      borderWidth="0.3px"
    >
      <Icon as={icon} />
    </Circle>
  );
};


const ToggleThemeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label="Change theme"
      fontSize="xs"
      letterSpacing={1}
      placement="top"
      bgColor="black"
      color="white"
      rounded="sm"
    >
      <IconButton
        bg={colorMode === "light" ? "trueGray.100" : "trueGray.900"}
        // size="40px"
        rounded="full"
        transitionDuration="200ms"
        borderWidth="0.3px"
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <Moon /> : <Sun />}
        _hover={{
          bgColor: `${colorMode === "light" ? "rgb(245, 245, 245, 0.5)" : "rgb(38, 38, 38, 0.5)"}`,
          transform: "rotate(90deg)",
          border: "1px solid",
          borderColor: "whiteAlpha.800",
        }}
      />
    </Tooltip>
  );
}





const NavBtn = React.forwardRef((props, ref) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      as="a"
      bgColor={
        colorMode === "light" ? "rgb(245, 245, 245, 1)" : "rgba(13, 16, 19, 1)"
      }
      color={colorMode === "light" ? "black" : "white"}
      // border="1px solid transparent"
      w={28}
      rounded="3xl"
      borderWidth="0.3px"
      fontSize="md"
      fontWeight="regular"
      letterSpacing={0.5}
      _hover={{
        // bgColor: "#000",
        borderColor: `${colorMode === 'light' ? "black" : "whiteAlpha.800"}`,
      }}
      sx={{
        fontSmooth: "antialiased",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
});

const Nav = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      position="fixed"
      bottom="12"
      width="min(60ch, calc(100% - 64px))"
      // m="0 auto"
      rounded="full"
      zIndex="99"
      w="fit-content"
      borderWidth="1px"
      // py={4}
      sx={{
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Box
        w="fit-content"
        m="0 auto"
        p={2}
        rounded="full"
        bgColor={
          colorMode === "light"
            ? "rgba(245, 245, 245, 0.45)"
            : "rgba(13, 16, 19, 0.45)"
        }
        className={styles.navBlur}
      >
        <HStack spacing={3} alignItems="center" justifyContent="center">
          <NextLink href="/">
            <NavBtn>Home</NavBtn>
          </NextLink>
          <NextLink href="/about">
            <NavBtn>About</NavBtn>
          </NextLink>
          <Box height="25px">
            <Divider colorScheme="blackAlpha" orientation="vertical" />
          </Box>
          <ToggleThemeBtn />
          <Popover>
            <PopoverTrigger>
              <IconButton
                bgColor="#F15223"
                rounded="full"
                borderColor="#F15223"
                borderWidth="0.3px"
                icon={<List />}
                _hover={{
                  border: "1px",
                  borderColor: "#F15223",
                  bgColor: "rgb(241, 82, 1, 0.5)",
                  transform: "rotate(90deg)",
                }}
              />
            </PopoverTrigger>
            <PopoverContent
              width="50px"
              rounded="full"
              height="auto"
              mb={2}
              px={3}
              py={1}
              bgColor={
                colorMode === "light"
                  ? "rgba(245, 245, 245, 0.45)"
                  : "rgba(13, 16, 19, 0.45)"
              }
              className={styles.navBlur}
            >
              <Flex
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                height={40}
              >
                <SocialButton
                  icon={TwitterLogo}
                  link="https://twitter.com/typicalmitul"
                />
                <SocialButton
                  icon={InstagramLogo}
                  link="https://instagram.com/typicalmitul"
                />
                <SocialButton
                  icon={GithubLogo}
                  link="https://github.com/mitul-s"
                />
              </Flex>
            </PopoverContent>
          </Popover>
        </HStack>
      </Box>
    </Box>
  );
};



export default Nav;