import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import theme from "@/styles/theme.js"
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("../node_modules/react-animated-cursor"), {
  ssr: false,
});

const GlobalStyle = ({ children }) => {

  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          ::-moz-selection {
            /* Code for Firefox */
            color: #f9fafb;
            background: #14b8a6;
          }

          ::selection {
            color: #f9fafb;
            background: #14b8a6;
          }
        `}
      />
      {children}
    </>
  );
};




function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        <DefaultSeo {...SEO} />
        <AnimatedCursor color='94, 234, 212' />
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default App
