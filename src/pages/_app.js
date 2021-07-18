import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "@/styles/theme.js";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
