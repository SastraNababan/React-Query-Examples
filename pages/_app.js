import { ChakraProvider, theme } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
