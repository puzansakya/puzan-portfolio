import { Box, Container, Flex, List, ListItem } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

import Head from "next/head";
import BlogLink from "../components/BlogLink";
import Navbar from "../components/Navbar";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const title = "Test Blog";
  const description = "Welcome to my Notion Blog.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={"description"} title={"description"} content={description} />
        <meta name={"og:title"} title={"og:title"} content={title} />
        <meta name={"og:description"} title={"og:description"} content={title} />
      </Head>

      <Navbar />
      <Box color="gray.100" minH="100vh">
        <Container maxW="container.md">
          <Flex justifyContent="center" h="100vh" alignItems="center">
            <List>
              {posts.map((post, index) => (
                <ListItem key={index}>
                  <BlogLink post={post} />
                </ListItem>
              ))}
            </List>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
