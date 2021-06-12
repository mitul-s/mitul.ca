/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Box, Flex, Button, Grid, Heading, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from ".././styles/sidebar.module.css"
import { HouseSimple, Sun } from "phosphor-react";



const Shell = ({ children }) => {

  return (
    <>
    {/* <Nav /> */}
    {/* <Navigation styles={styles.nav} /> */}
    <Box className={styles.grid}>
      <Box as="main">
        {children}
        <Footer />
      </Box>
    </Box>
    </>
  );
}

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