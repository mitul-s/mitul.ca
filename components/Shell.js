import { Box, Flex } from "@chakra-ui/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Shell = ({ children }) => {
    return (
      <Box>
        <Navigation />
        <Flex
          as="main"
          m="0 auto"
          direction="column"
          px={8}
          maxW="1250px" 
        >
          {children}
          <Footer />
        </Flex>
      </Box>
    );
}

export default Shell;