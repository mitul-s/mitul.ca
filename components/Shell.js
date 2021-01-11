import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from ".././styles/sidebar.module.css"




const Shell = ({ children }) => {

  const MotionFlex = motion.custom(Flex);
  const [isDesktop] = useMediaQuery("(min-width: 1080px)");
  
    return (
      <Box
        m="0 auto"
        maxW={isDesktop ? "820px" : "700px"}
        w="100%"
        className={isDesktop ? styles.withSidebar : ""}
      >
        <Box>
          <Navigation isDesktop={isDesktop} styles={styles.sidebar} />
          <MotionFlex
            as="main"
            // m="0 auto"
            direction="column"
            px={8}
            exit={{ opacity: 0 }}
            initial="initial"
            animate="animate"
            className={isDesktop ? styles.notSidebar : ""}
          >
            {children}
            <Footer />
          </MotionFlex>
        </Box>
      </Box>
    );
}

export default Shell;