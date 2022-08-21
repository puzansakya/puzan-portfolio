import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import AppShell from "../components/AppShell";

const theme = extendTheme({
  styles: {
    global: (props: any) => {
      return {
        "html, body": {
          // height: "100vh",
          background: props.colorMode === "dark" ? "#232323" : "#232323",
          color:"white"
        },
        a: {
          color: "#ecb365",
          "text-decoration": "none",
        },
      };
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppShell maxW="container.md">
        <Component {...pageProps} />
      </AppShell>
    </ChakraProvider>
  );
}

export default MyApp;
