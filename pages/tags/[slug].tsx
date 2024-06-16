import "highlight.js/styles/atom-one-dark.css";
import type { GetStaticPaths, GetStaticProps } from "next";
import { PostMeta, getAllPosts } from "../../@services/api.service";
import Meta from "../../components/Meta";
import Navbar from "../../components/Navbar";
import { ArticleList } from "../../components/article-list";

const TagPage = ({ slug  ,posts }: {slug:string,  posts: PostMeta[] }) => {
  const title = `Tag: ${slug}`;
  return (
    <div className="relative bg-stone-800 h-full text-gray-50 min-h-screen">

      <Meta title={title} />

      <div className="bg-stone-800 h-full text-gray-50 min-h-screen">

        <Navbar />

        <div id="sgl5RoIW1e2Hzs5_y9ywg" className="mx-auto space-y-4 max-w-screen-lg sm:px-5 sm:py-24 xl:px-0 px-5 py-24">
          <h3 className="text-3xl" >
            Tag: {slug}
          </h3>

          <ArticleList posts={posts} />
        </div>
      </div>
    </div>
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
