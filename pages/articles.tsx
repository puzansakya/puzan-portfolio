import { InferGetStaticPropsType } from "next";

import { getAllPosts } from "../@services/api.service";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import { Footer } from "../fsd/shared/ui/footer";
import { ArticleList } from "../components/article-list";
import { SectionWrapper } from "../components/page-wrapper";

export const getStaticProps = async () => {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div className="relative bg-stone-800 text-stone-50">

      <Meta title="Articles" />
      <Navbar />
      <SectionWrapper >
        <ArticleList posts={posts} />
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export default Blog;

