import { useParams } from "react-router-dom";

export default function Post() {
    const parametros = useParams();
    
    return <h1>Post {parametros.id}</h1>;
}