import {
  Box,
  Grid,
} from "@chakra-ui/react";
import Nav from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "@/styles/wrapper.module.css";

const Shell = ({ children }) => {
  return (
      <Grid
        gridTemplateColumns="1fr min(60ch, calc(100% - 64px)) 1fr"
        gridColumnGap="32px"
        className={styles.wrapper}
        as="main"
      >
        <Nav />
        {children}
        <Footer />
      </Grid>
  );
};

export default Shell;