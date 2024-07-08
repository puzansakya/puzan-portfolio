import "highlight.js/styles/atom-one-dark.css";
import type { GetStaticPaths, GetStaticProps } from "next";
import { PostMeta, getAllPosts } from "../../@services/api.service";
import Meta from "../../components/Meta";
import Navbar from "../../components/Navbar";
import { ArticleList } from "../../components/article-list";
import { Footer } from "../../fsd/shared/ui/footer";
import { SectionWrapper } from "../../components/page-wrapper";

const TagPage = ({ slug, posts }: { slug: string, posts: PostMeta[] }) => {
  const title = `Tag: ${slug}`;
  return (
    <div className=" bg-stone-800 text-stone-50">

      <Meta title={title} />
      <Navbar />

      <SectionWrapper className="flex flex-col gap-4">
        <h3 className="text-3xl" >
          Tag: {slug}
        </h3>
        <ArticleList posts={posts} />
      </SectionWrapper>

      <Footer />
    </div >
  );
}

export default TagPage;

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
  // const paths = getSlugs().map((slug) => ({ params: { slug } }));
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  // console.log(JSON.stringify({tags, paths_xx,paths}, null, 2))
  return {
    paths,
    fallback: false,
  };


  // return {
  //   paths,
  //   fallback: false,
  // };
};
