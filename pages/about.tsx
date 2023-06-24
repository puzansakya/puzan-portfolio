import { Box, Container, Flex, Link } from "@chakra-ui/react";
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
      <Box
        color="gray.100"
        minH="100vh"
      >
        <Container maxW="container.md">
          <Flex
            justifyContent="center"
            h="100vh"
            alignItems="center"
          >
            <Link
              href="puzan_shakya_resume.pdf"
              // download

              target="_blank"
              rel="noopener noreferrer"
            >
              <GlichText text="Download Resume" />
            </Link>

            {/* <a
              href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Download CV</button>
            </a> */}
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default About;
