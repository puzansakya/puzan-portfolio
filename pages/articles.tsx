import { Box, Container, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

import Head from "next/head";
import BlogLink from "../components/BlogLink";
import Navbar from "../components/Navbar";
import Articles from "../components/Articles";
import { getAllPosts } from "../@services/api.service";

export const getStaticProps = async () => {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const title = "Test Blog";
  const description = "Welcome to my Notion Blog.";

  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>

      <Navbar />

      <Heading mb={4} fontSize={"3xl"}>
        Articles
      </Heading>
      <Articles posts={posts} />
    </>
  );
};

export default Blog;
