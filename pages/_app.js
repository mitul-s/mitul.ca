import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css"
import theme from "@/styles/theme.js"
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("../node_modules/react-animated-cursor"), {
  ssr: false,
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <DefaultSeo {...SEO} />
        <AnimatedCursor color='94, 234, 212' />
        <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App
