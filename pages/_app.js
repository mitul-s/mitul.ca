import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import theme from "@/styles/theme.js"

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
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default App