import type { NextPage } from "next";
import GlichText from "../components/GlichText";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";

import NextLink from "next/link";

import { Link } from "@chakra-ui/react";

const Home: NextPage = () => {
  const authorName = "Puzan Sakya";

  return (
    <>
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
            <NextLink href="/blog" passHref>
              <Link>
                <p>Blog</p>
              </Link>
            </NextLink>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
