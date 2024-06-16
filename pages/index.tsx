import type { InferGetStaticPropsType, NextPage } from "next";

import Navbar from "../components/Navbar";


import Meta from "../components/Meta";
import { NewLanding } from "../components/new-landing";
import { getAllPosts } from "../@services/api.service";
 
export const getStaticProps = async () => {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
};

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Meta title="Puzan Sakya" />
      <Navbar isDark ={false} />
      <NewLanding posts={posts}  />
      {/* <Flex direction="column" flex={1} h="full">
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
      </Flex> */}
    </>
  );
};

export default Home;
