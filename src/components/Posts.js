import Post from './Post';

export default function Posts() {
    const posts = [
        {
            nomeUsuario: "meowed",
            nomeConteudo: "gato-telefone",
            nomeCurtidas: "respondeai",
            quantidadeCurtidas: 101523
        },
        {
            nomeUsuario: "barked",
            nomeConteudo: "dog",
            nomeCurtidas: "adorable_animals",
            quantidadeCurtidas: 99159
        }
    ];

    return (
        <div className="posts">
            {posts.map((post) => <Post
                nomeUsuario={post.nomeUsuario}
                nomeConteudo={post.nomeConteudo}
                nomeCurtidas={post.nomeCurtidas}
                quantidadeCurtidas={post.quantidadeCurtidas}
                key={post.nomeUsuario}
            />)}
        </div>
    );
}
