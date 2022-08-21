import { Box, Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { title } from "process";
import GlichText from "../components/GlichText";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
     <Meta title="About" />

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
