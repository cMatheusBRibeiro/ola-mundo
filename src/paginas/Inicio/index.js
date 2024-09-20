import styles from "./Inicio.module.css";

import ListaPosts from "componentes/ListaPosts";
import posts from "json/posts.json";

export default function Inicio() {
    return (
        <div className={styles.listagemPosts}>
            <ListaPosts posts={posts} />
        </div>
    );
}