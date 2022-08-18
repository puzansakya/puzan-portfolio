import { Box, Button, Container, Flex, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GlichText from "../components/GlichText";
import styles from "../styles/Home.module.css";
import gstyles from "../styles/Glich.module.css";

const Home: NextPage = () => {
  const authorName = "Puzan Sakya";

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.title}>
            <span className={styles.block}></span>
            <h1>
              {authorName}
              <span></span>
            </h1>
          </div>

          <GlichText text="Full Stack Developer" />

          {/* <div className={styles.role}>
            <div className={styles.block}></div>
            <p>Full Stack Developer</p>
          </div> */}

          <div className={styles.aboutMe}>
            <div className={styles.block}></div>
            <p>About Me</p>
          </div>

          <div className={styles.blog}>
            <div className={styles.block}></div>
            <p>Blog</p>
          </div>

        </div>
      </div>

      {/* <Box bg="gray.900" color="gray.100" minH="100vh">
        <Container bg="gray.800" maxW="container.md">
          <Flex justifyContent="center" h="100vh" alignItems="center">
            <GlichText />
          </Flex>
        </Container>
      </Box> */}
    </>
  );
};

export default Home;
