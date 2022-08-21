import type { NextPage } from "next";
import GlichText from "../components/GlichText";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";

import NextLink from "next/link";

import { Flex, Link } from "@chakra-ui/react";
import Head from "next/head";
import Meta from "../components/Meta";

const Home: NextPage = () => {
  const authorName = "Puzan Sakya";

  return (
    <>
      <Meta title="Puzan Sakya" />
      <Flex direction="column" flex={1} h="full">
        <Navbar />
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

            <div className={styles.aboutMe}>
              <div className={styles.block}></div>
              <NextLink href="/about" passHref>
                <Link>
                  <p>About Me</p>
                </Link>
              </NextLink>
            </div>

            <div className={styles.blog}>
              <div className={styles.block}></div>
              <NextLink href="/articles" passHref>
                <Link>
                  <p>Articles</p>
                </Link>
              </NextLink>
            </div>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Home;
