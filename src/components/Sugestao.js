export default function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img alt={`Foto de ${props.nome}`} src={`assets/img/${props.nome}.svg`} />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">{props.razao}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}
