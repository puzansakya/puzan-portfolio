import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import AppShell from "../components/AppShell";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AppShell >
        <Component {...pageProps} />
      </AppShell>
  );
}

export default MyApp;
