import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";

export default function Post() {
    const parametros = useParams();

    const idPost = Number(parametros.id);
    const post = posts.find((post) => post.id === idPost);
    
    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            Texto...
        </PostModelo>
    );
}