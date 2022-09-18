import React from 'react';

export default function Post(props) {
    const [tipoIconeSalvar, setTipoIconeSalvar] = React.useState("-outline");
    const [tipoCorIconeLike, setTipoCorIconeLike] = React.useState("-outline");
    const [quantidadeCurtidas, setQuantidadeCurtidas] = React.useState(props.quantidadeCurtidas);

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
                        <ion-icon name={`heart${tipoCorIconeLike}`} onClick={
                            () => {
                                tipoCorIconeLike === "-outline" ? setTipoCorIconeLike("") : setTipoCorIconeLike("-outline");
                                tipoCorIconeLike === "-outline" ? setQuantidadeCurtidas(quantidadeCurtidas + 1) : setQuantidadeCurtidas(quantidadeCurtidas - 1)
                            }
                        }>
                        </ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={`bookmark${tipoIconeSalvar}`} onClick={() => setTipoIconeSalvar("")}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img alt={`Foto de ${props.nomeCurtidas}`} src={`assets/img/${props.nomeCurtidas}.svg`} />
                    <div className="texto">
                        Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>outras {quantidadeCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
