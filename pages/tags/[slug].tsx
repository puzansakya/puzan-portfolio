import { Heading } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getAllPosts, PostMeta } from "../../@services/api.service";
import Articles from "../../components/Articles";
import Meta from "../../components/Meta";
import Navbar from "../../components/Navbar";

export default function TagPage({ slug, posts }: { slug: string; posts: PostMeta[] }) {
  const title = `Tag: ${slug}`;
  return (
    <>
     <Meta title={title} />
      <Navbar />

      <pre>{JSON.stringify(slug)}</pre>
      <Heading mb={4} fontSize={"3xl"}>
        Tag: {slug}
      </Heading>

      <Articles posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
