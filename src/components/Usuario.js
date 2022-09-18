import React from 'react';

export default function Usuario() {
    const [nome, setNome] = React.useState("Catana");

    return (
        <div className="usuario">
            <img alt="Foto de catanacomics" src="assets/img/catanacomics.svg" />
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
