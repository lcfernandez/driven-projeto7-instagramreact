import React from 'react';

export default function Usuario() {
    const [nome, setNome] = React.useState("Catana");
    const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg");

    return (
        <div className="usuario">
            <img alt="Foto de catanacomics" src={imagem} onClick={() => setImagem(prompt("Deseja alterar a sua imagem de perfil com qual link?"))}/>
            <div className="texto">
                <strong>catanacomics</strong>
                <span>
                    {nome}
                    <ion-icon name="pencil" onClick={() => setNome(prompt("Deseja alterar o seu nome usuário para qual nome?"))}></ion-icon>
                </span>
            </div>
        </div>
    );
}
