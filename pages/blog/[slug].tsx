import { Box, Container } from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import Navbar from "../../components/Navbar";
import CustomSyntaxHighlighter from "../../components/SyntaxHighlighter";

const components = { CustomSyntaxHighlighter };

const PostPage = ({ frontMatter, mdxSource }: any) => {
  const { title } = frontMatter;
  return (
    <>
      <Navbar />
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"></link> */}
      <Box  color="gray.100" minH="100vh" pt={12}>
        <Container  maxW="container.md">
          <h1>{title}</h1>
          <MDXRemote {...mdxSource} components={components} />
        </Container>
      </Box>
    </>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
