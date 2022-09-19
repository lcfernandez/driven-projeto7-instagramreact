import React from 'react';

export default function Post(props) {
    const likePost = () => {
        setTipoCorIconeLike("");
        setCorIcone("curtido");
        if (tipoCorIconeLike === "-outline") {
            setQuantidadeCurtidas(quantidadeCurtidas + 1);
        }
    }

    const [tipoIconeSalvar, setTipoIconeSalvar] = React.useState("-outline");
    const [tipoCorIconeLike, setTipoCorIconeLike] = React.useState("-outline");
    const [quantidadeCurtidas, setQuantidadeCurtidas] = React.useState(props.quantidadeCurtidas);
    const [corIcone, setCorIcone] = React.useState("");

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
                <img alt={`Post de ${props.nomeUsuario}`} src={`assets/img/${props.nomeConteudo}.svg`} onClick={likePost} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={`heart${tipoCorIconeLike}`} onClick={tipoCorIconeLike === "-outline" ? likePost : 
                            () => {
                                setTipoCorIconeLike("-outline");
                                setQuantidadeCurtidas(quantidadeCurtidas - 1);
                                setCorIcone("");
                            }
                        } class={corIcone}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={`bookmark${tipoIconeSalvar}`} onClick={
                            () => tipoIconeSalvar === "-outline" ? setTipoIconeSalvar("") : setTipoIconeSalvar("-outline")
                        }></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img alt={`Foto de ${props.nomeCurtidas}`} src={`assets/img/${props.nomeCurtidas}.svg`} />
                    <div className="texto">
                        Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>outras {quantidadeCurtidas.toLocaleString('pt-BR')} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
