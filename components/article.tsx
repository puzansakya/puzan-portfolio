import Link from "next/link"

export const Article = ({ post }: { post: any }) => {
    return <div id="xnnZhAQUhNZEUAdXPtfHH" className="flex flex-col items-start">

        <Link href={`/posts/${post.slug}`}>
            <a id="mwrqfBOJwbVRIGJ7A4bIk"
                className="transition-all duration-150 font-medium text-xl text-amber-400">
                {post.title}
            </a>
        </Link>

        <p id="IVygcVMKS-VNC3i__VWn6" className="">{post.excerpt}</p>

        <div className="flex gap-1 items-center text-sm">
            {post.tags.map((tag: any) => (
                <Link key={tag} href={`/tags/${tag}`} passHref>
                    <a className="after:content-['\00a0.'] last:after:content-['']">
                        {tag}
                    </a>
                </Link>
            ))}

        </div>
    </div>

}