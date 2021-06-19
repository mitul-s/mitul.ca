import {
  Box,
  Flex,
  Button,
  Grid,
  Heading,
  HStack,
  Icon,
  Circle,
  Tooltip,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from ".././styles/sidebar.module.css";
import { HouseSimple, InstagramLogo, Sun, TwitterLogo, List } from "phosphor-react";

const NavBtn = ({ children }) => {
  return (
    <Button
      bgColor="rgba(13, 16, 19, 1)"
      color="white"
      borderWidth="0.3px"
      // borderColor="trueGray.500"
      w={28}
      rounded="3xl"
      shadow="lg"
      fontSize="md"
      fontWeight="regular"
      letterSpacing={0.5}
      _hover={{
        bgColor: "#000",
      }}
      sx={{
        fontSmooth: "antialiased"
      }}
    >
      {children}
    </Button>
  );
};

const Nav = () => {
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
        transform: "translateX(-50.9%)",
      }}
    >
      <Box
        w="fit-content"
        m="0 auto"
        p={2}
        rounded="full"
        bgColor="rgb(13, 16, 19, 0.45)"
        className={styles.navBlur}
      >
        <HStack spacing={3} alignItems="center" justifyContent="center">
          <NavBtn>Home</NavBtn>
          <NavBtn>About</NavBtn>
          <Box height="25px">
            <Divider colorScheme="blackAlpha" orientation="vertical" />
          </Box>
          <Tooltip
            label="Change theme"
            fontSize="xs"
            letterSpacing={1}
            placement="top"
            bgColor="black"
            color="white"
            rounded="sm"
            // closeDelay={200}
            // openDelay={300}
            // mb={2}
          >
            <Circle
              as="button"
              bgColor="trueGray.800"
              size="40px"
              rounded="full"
              shadow="lg"
              role="group"
              transitionDuration="200ms"
              border="1px solid transparent"
              _hover={{
                transform: "rotate(90deg)",
                bgColor: "white",
                color: "black",
                border: "1px solid",
                borderColor: "trueGray.800",
              }}
            >
              <Icon as={Sun} />
            </Circle>
          </Tooltip>
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                bgColor="#F15223"
                w={0}
                rounded="full"
                shadow="lg"
                border="1px solid transparent"
                role="group"
                _hover={{
                  border: "1px",
                  borderColor: "#F15223",
                  bgColor: "rgb(241, 82, 1, 0.5)",
                  transform: "rotate(90deg)",
                }}
              >
                <Icon as={List} />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              width="50px"
              rounded="full"
              height="auto"
              mb={2}
              px={3}
              py={1}
              bgColor="rgba(13, 16, 19, 0.5 )"
            >
              <Flex
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                height="18vh"
              >
                <Circle
                  size="40px"
                  bgColor="rgba(13, 16, 19, 1)"
                  borderWidth="0.3px"
                >
                  <Icon as={TwitterLogo} />
                </Circle>
                <Circle
                  size="40px"
                  bgColor="rgba(13, 16, 19, 1)"
                  borderWidth="0.3px"
                >
                  <Icon as={InstagramLogo} />
                </Circle>
                <Circle
                  size="40px"
                  bgColor="rgba(13, 16, 19, 1)"
                  borderWidth="0.3px"
                >
                  <Icon as={TwitterLogo} />
                </Circle>
              </Flex>
            </PopoverContent>
          </Popover>
        </HStack>
      </Box>
    </Box>
  );
};

// const Nav = () => {
//   return (
//   <Box h="100vh" margin="0 auto">
//     <Flex
//       mt={24}
//       w="auto"
//       position="fixed"
//       alignItems="center"
//       justifyContent="center"
//       flexDirection="column"
//     >
//       Hello
//     </Flex>
//   </Box>);
// };

const Shell = ({ children }) => {
  return (
    <Grid gridTemplateColumns="1fr min(60ch, calc(100% - 64px)) 1fr" gridColumnGap="32px">
      <Navigation />
      <Nav />
      <Box as="main">
        {children}
        <Footer />
      </Box>
    </Grid>
  );
};

export default Shell;

{
  /* <Navigation styles={styles.nav} /> */
}
// return (
//   <Box
//     m="0 auto"
//     maxW={["700px", null, "820px"]}
//     w="100%"
//     className={styles.withSidebar}
//   >
//     <Box>
//       <Navigation styles={styles.sidebar} />
//       <MotionFlex
//         as="main"
//         // m="0 auto"
//         direction="column"
//         px={8}
//         exit={{ opacity: 0 }}
//         initial="initial"
//         animate="animate"
//         className={styles.notSidebar}
//       >
//         {children}
//         <Footer />
//       </MotionFlex>
//     </Box>
//   </Box>
// );
