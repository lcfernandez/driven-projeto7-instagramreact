import React from 'react';

export default function Usuario() {
    // função para validação do formato das URL fornecidas
    const validateURL = (url) => {
        let test;
    
        try {
            test = new URL(url);
        } catch (_) {
            return false;
        }
    
        return test.protocol === "http:" || test.protocol === "https:";
    }

    const [nome, setNome] = React.useState("Catana");
    const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg");

    return (
        <div className="usuario">
            <img alt="Foto de catanacomics" src={imagem} onClick={
                () => {
                    let novaImagem;
                    
                    novaImagem = prompt("Qual é o link para sua nova imagem de perfil? (use 'http:' ou 'https:')");
                    
                    if (validateURL(novaImagem)) {
                        setImagem(novaImagem);
                    }
                }
            }/>
            <div className="texto">
                <strong>catanacomics</strong>
                <span>
                    {nome}
                    <ion-icon name="pencil" onClick={
                        () => {
                            let novoNome;
                            
                            novoNome = prompt("Qual será o seu novo nome de usuário?");
                            
                            if (!(novoNome === null || !novoNome.trim())) {
                                setNome(novoNome);
                            }
                        }
                    }>
                    </ion-icon>
                </span>
            </div>
        </div>
    );
}
