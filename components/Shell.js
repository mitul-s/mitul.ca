import {
  Box,
  Flex,
  Button,
  Grid,
  Heading,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from ".././styles/sidebar.module.css";
import { HouseSimple, Sun } from "phosphor-react";

const NavBtn = ({ children }) => {
  return (
    <Button
      bgColor="#040415"
      color="white"
      // border="1px solid white"
      w={28}
      rounded="3xl"
      shadow="lg"
    >
      {children}
    </Button>
  );
};

// const Nav = () => {
//   return (
//     <Box
//       position="fixed"
//       bottom="12"
//       width="min(60ch, calc(100% - 64px))"
//       // m="0 auto"
//       zIndex="99999"
//       // bgColor="black"
//       rounded="md"
//       // py={4}
//       sx={{
//         left: "50%",
//         transform: "translateX(-50%)",
//       }}
//     >
//       <Box w="fit-content" m="0 auto">
//         <HStack spacing={3} alignItems="center" justifyContent="center">
//           <NavBtn>About</NavBtn>
//           <NavBtn>Journal</NavBtn>
//           <Button bgColor="#F15223" w={0} rounded="full" shadow="lg">
//             <Icon as={HouseSimple} />
//           </Button>
//           <Button bgColor="trueGray.800" w={0} rounded="full" shadow="lg">
//             <Icon as={Sun} />
//           </Button>
//         </HStack>
//       </Box>
//     </Box>
//   );
// };

// const Nav = () => {
//   return <Box>Hello</Box>;
// };

const Shell = ({ children }) => {
  return (
    <>
      <Navigation />
      {/* <Nav /> */}
      <Box className={styles.grid}>
        <Box as="main">
          {children}
          <Footer />
        </Box>
      </Box>
    </>
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
