import { Box, Container, Flex, Link } from "@chakra-ui/react";
import GlichText from "../components/GlichText";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import { NewAbout } from "../components/new-about";
import { Footer } from "../fsd/shared/ui/footer";

export function getStaticProps() {
  return { props: { msg: "hello world" } };
}

const About = () => {
  return (
    <>
      <Meta title="About" />
      <Navbar />
      <NewAbout />
      <Footer/>
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
