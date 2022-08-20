import { Box, Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { title } from "process";
import GlichText from "../components/GlichText";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name={"description"} title={"description"} content="" />
        <meta name={"og:title"} title={"og:title"} content={title} />
        <meta name={"og:description"} title={"og:description"} content={title} />
      </Head>

      <Navbar />
      <Box  color="gray.100" minH="100vh">
        <Container maxW="container.md">
          <Flex justifyContent="center" h="100vh" alignItems="center">
           <GlichText text="about" />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default About;
