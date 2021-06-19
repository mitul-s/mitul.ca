import {
  Box,
  Grid,
} from "@chakra-ui/react";
import Nav from "@/components/Navigation";
import Footer from "@/components/Footer";

const Shell = ({ children }) => {
  return (
    <Grid gridTemplateColumns="1fr min(60ch, calc(100% - 64px)) 1fr" gridColumnGap="32px">
    <Box></Box>
      <Box as="main">
      <Nav />
        {children}
        <Footer />
      </Box>
    </Grid>
  );
};

export default Shell;