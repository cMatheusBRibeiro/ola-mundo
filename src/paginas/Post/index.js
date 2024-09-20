import "./Post.css";
import styles from "./Post.module.css";

import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import ListaPosts from "componentes/ListaPosts";

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => post.id === Number(parametros.id));

    if (!post) {
        return <NaoEncontrada />;
    }
    
    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .reverse()
        .slice(0, 4);

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h3 className={styles.tituloOutrosPosts}>
                    Outros posts que você pode gostar:
                </h3>

                <ListaPosts posts={postsRecomendados} />
            </PostModelo>
        </PaginaPadrao>
    );
}