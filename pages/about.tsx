import { Box, Container, Flex, Link } from "@chakra-ui/react";
import GlichText from "../components/GlichText";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

export function getStaticProps() {
  return { props: { msg: "hello world" } };
}

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
            <Flex
              direction="column"
              gap={3}
            >
              <Link
                href="puzan_shakya_resume_.pdf"
                // download

                target="_blank"
                rel="noopener noreferrer"
              >
                <GlichText text="Download Resume" />
              </Link>

              {/* <Button
                colorScheme="teal"
                onClick={async () => {
                  await generatePDF();
                }}
              >
                Generate Pdf
              </Button> */}
            </Flex>

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

/*

flowchart TB
    a[start]
    b[place sample pdf in assets]
    c[add link tag to download pdf]
    z[end]

    a --> b --> c --> z

*/
