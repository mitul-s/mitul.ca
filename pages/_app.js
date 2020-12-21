import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import theme from "@/styles/theme.js"
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

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
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default App
