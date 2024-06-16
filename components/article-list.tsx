import { Article } from "./article"

export const ArticleList = ({ posts, learnMoreLink }: { posts: any[] , learnMoreLink?:any}) => {
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

