import "highlight.js/styles/atom-one-dark.css";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { getPostFromSlug, getSlugs, PostMeta } from "../../@services/api.service";
import Meta from "../../components/Meta";
import Navbar from "../../components/Navbar";
import YouTube from "../../components/YouTube";
import { Footer } from "../../fsd/shared/ui/footer";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <div className="relative bg-stone-800 h-full text-gray-50 min-h-screen">
      <Meta title={post.meta.title} />

      <Navbar />

      <div id="sgl5RoIW1e2Hzs5_y9ywg" className="mx-auto max-w-screen-lg sm:px-5 sm:py-24 xl:px-0 px-5 py-24">

        <h1 >{post.meta.title}</h1>

        <MDXRemote {...post.source} components={{ YouTube, Image }} />

      </div>

      <Footer/>

    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
