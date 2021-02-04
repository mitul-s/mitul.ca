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
          
          @font-face {
            font-family: "Inter";
            font-style: normal;
            font-weight: 100 900;
            font-display: optional;
            src: url(/fonts/inter-var-latin.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
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
