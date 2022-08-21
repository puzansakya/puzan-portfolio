import Link from "next/link";
import styles from "../styles/Articles.module.css";
import { PostMeta } from "../@services/api.service";
import GlichText from "./GlichText";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <div className={styles.title}>
            <Link href={`/posts/${post.slug}`}>
                {post.title}
            </Link>
          </div>
          <p>{post.excerpt}</p>
          <p className={styles.tags}>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}
// <GlichText text={post.title} />
