import { InferGetStaticPropsType } from "next";


import Link from "next/link";
import { getAllPosts } from "../@services/api.service";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import { Footer } from "../fsd/shared/ui/footer";

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
    <div className="relative bg-stone-800 text-stone-50">

      <Meta title="Articles" />
      <Navbar />
      <ArticleList posts={posts} />
      <Footer/>
      {/* <Heading mb={4} fontSize={"3xl"}>
        Articles
      </Heading> */}

      {/* <Articles posts={posts} /> */}
    </div>
  );
};

export default Blog;

const ArticleList = ({ posts, learnMoreLink }: { posts: any[] , learnMoreLink?:any}) => {
  return <div id="KxLB2fL0bhZ3eze-8xPNF" className="mx-auto max-w-screen-lg xl:px-0 py-24 px-5">
      <div id="gbz4NsxbdA4AYF9HzM6_q" className="flex justify-between items-center">
          <h1 id="b8TkhUXTlueQTKQiXgrGm" className="font-bold w-1/2 text-4xl">Articles</h1>
      </div>
      <div id="Ffb7l9CrzhH9tvfVp_xpe" className="flex justify-between items-center gap-5 mt-5">
          <p id="WpKzIVutq3ZqooQE7yDUl" className="pr-24 w-full md:w-1/2">Doumentation and useful knowledge base
              for day to day development work.</p>
      </div>
      <div id="PUdRwwwdyq6KjKZLpxkYI" className="flex mt-12 flex-col gap-10 items-start">
          {posts?.map(post => {
              return <Article key={post.slug} post={post} />
          })}

          {learnMoreLink}
      </div>
  </div>
}

export const Article = ({ post }: { post: any }) => {
  return <div id="xnnZhAQUhNZEUAdXPtfHH" className="flex flex-col items-start">

      <Link href={`/posts/${post.slug}`}>
          <a id="mwrqfBOJwbVRIGJ7A4bIk"
              className="transition-all duration-150 font-medium text-xl text-amber-400">
              {post.title}
          </a>
      </Link>

      <p id="IVygcVMKS-VNC3i__VWn6" className="">{post.excerpt}</p>
      <div id="QRH47HJS4FndTE3sMCUDV" className="flex gap-1 items-center text-sm">
          {post.tags.map((tag: any) => (
              <Link key={tag} href={`/tags/${tag}`} passHref>
                  <a  id="-Fk5vKG4XU-3qZgfz9d73" className="after:content-['\00a0.'] last:after:content-['']">
                      {tag}
                  </a>
              </Link>
          ))}
         
      </div>
  </div>

}