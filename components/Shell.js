import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Shell = ({ children }) => {

  const MotionFlex = motion.custom(Flex);
  
    return (
      <Box>
        <Navigation />
        <MotionFlex
          as="main"
          m="0 auto"
          direction="column"
          px={8}
          maxW="700px"
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
        >
          {children}
          <Footer />
        </MotionFlex>
      </Box>
    );
}

export default Shell;