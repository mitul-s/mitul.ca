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
import Nav from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HouseSimple, InstagramLogo, Sun, TwitterLogo, List } from "phosphor-react";

const Shell = ({ children }) => {
  return (
    <Grid gridTemplateColumns="1fr min(60ch, calc(100% - 64px)) 1fr" gridColumnGap="32px">
      {/* <Navigation /> */}
      <Box>h</Box>
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
