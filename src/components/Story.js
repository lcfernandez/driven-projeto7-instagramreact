export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img alt={`Foto de ${props.nome}`} src={`assets/img/${props.nome}.svg`} />
            </div>
            <div className="usuario">
                {props.nome}
            </div>
        </div>
    );
}
