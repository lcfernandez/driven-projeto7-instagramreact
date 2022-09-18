import React from 'react';

export default function Post(props) {
    const [tipo, setTipo] = React.useState("-outline");

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img alt={`Foto de ${props.nomeUsuario}`} src={`assets/img/${props.nomeUsuario}.svg`} />
                    {props.nomeUsuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img alt={`Post de ${props.nomeUsuario}`} src={`assets/img/${props.nomeConteudo}.svg`} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={`bookmark${tipo}`}  onClick={() => setTipo("")}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img alt={`Foto de ${props.nomeCurtidas}`} src={`assets/img/${props.nomeCurtidas}.svg`} />
                    <div className="texto">
                        Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>outras {props.quantidadeCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
