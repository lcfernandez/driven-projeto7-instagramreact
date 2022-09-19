import React from 'react';

export default function Usuario() {
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
                    do {
                        novaImagem = prompt("Qual é o link para sua nova imagem de perfil? (use 'http:' ou 'https:')")
                    } while (
                        !validateURL(novaImagem)
                    );
                    setImagem(novaImagem)
                }
            }/>
            <div className="texto">
                <strong>catanacomics</strong>
                <span>
                    {nome}
                    <ion-icon name="pencil" onClick={
                        () => {
                            let novoNome;
                            do {novoNome = prompt("Qual será o seu novo nome de usuário?")} while (novoNome === null || !novoNome.trim());
                            setNome(novoNome)
                        }
                    }>
                    </ion-icon>
                </span>
            </div>
        </div>
    );
}
