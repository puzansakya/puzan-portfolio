import { Article } from "./article"

export const ArticleList = ({ posts, learnMoreLink }: { posts: any[], learnMoreLink?: any }) => {
    return <div>
        <div className="flex justify-between items-center">
            <h1 className="font-bold w-1/2 text-4xl">Articles</h1>
        </div>
        <div className="flex justify-between items-center gap-5 mt-5">
            <p className="pr-24 w-full md:w-1/2">Doumentation and useful knowledge base
                for day to day development work.</p>
        </div>
        <div className="flex mt-12 flex-col gap-10 items-start">
            {posts?.map(post => {
                return <Article key={post.slug} post={post} />
            })}

            {learnMoreLink}
        </div>
    </div>
}

