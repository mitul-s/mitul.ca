import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from ".././styles/sidebar.module.css"

const Shell = ({ children }) => {

  const MotionFlex = motion(Flex);
  
    return (
      <Box
        m="0 auto"
        maxW={["700px", null, "820px"]}
        w="100%"
        className={styles.withSidebar}
      >
        <Box>
          <Navigation styles={styles.sidebar} />
          <MotionFlex
            as="main"
            // m="0 auto"
            direction="column"
            px={8}
            exit={{ opacity: 0 }}
            initial="initial"
            animate="animate"
            className={styles.notSidebar}
          >
            {children}
            <Footer />
          </MotionFlex>
        </Box>
      </Box>
    );
}

export default Shell;