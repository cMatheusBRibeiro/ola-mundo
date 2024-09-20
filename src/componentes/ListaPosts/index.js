import PostCard from "componentes/PostCard";
import styles from "./ListaPosts.module.css";

export default function ListaPosts({ posts }) {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    );
}