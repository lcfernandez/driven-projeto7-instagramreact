export default function App() {
    return (
        <div>
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div className="separador"></div>
                        <img alt="" src="assets/img/logo.png" />
                    </div>

                    <div className="logo-mobile">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>

                    <div className="instagram-mobile">
                        <img alt="" src="assets/img/logo.png" />
                    </div>

                    <div className="pesquisa">
                        <input type="text" placeholder="Pesquisar" />
                    </div>

                    <div className="icones">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>

                    <div className="icones-mobile">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                </div>
            </div>
            
            <div className="corpo">
                <div className="esquerda">
                    <div className="stories">
                        <div className="story">
                            <div className="imagem">
                                <img alt="" src="assets/img/9gag.svg" />
                            </div>
                            <div className="usuario">
                                9gag
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                                <img alt="" src="assets/img/meowed.svg" />
                            </div>
                            <div className="usuario">
                                meowed
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                                <img alt="" src="assets/img/barked.svg" />
                            </div>
                            <div className="usuario">
                                barked
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                                <img alt="" src="assets/img/nathanwpylestrangeplanet.svg" />
                            </div>
                            <div className="usuario">
                                nathanwpylestrangeplanet
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                                <img alt="" src="assets/img/wawawicomics.svg" />
                            </div>
                            <div className="usuario">
                                wawawicomics
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                                <img alt="" src="assets/img/respondeai.svg" />
                            </div>
                            <div className="usuario">
                                respondeai
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                                <img alt="" src="assets/img/filomoderna.svg" />
                            </div>
                            <div className="usuario">
                                filomoderna
                            </div>
                        </div>

                        <div className="story">
                            <div className="imagem">
                                <img alt="" src="assets/img/memeriagourmet.svg" />
                            </div>
                            <div className="usuario">
                                memeriagourmet
                            </div>
                        </div>

                        <div className="setinha">
                            <ion-icon name="chevron-forward-circle"></ion-icon>
                        </div>
                    </div>

                    <div className="posts">
                        <div className="post">
                            <div className="topo">
                                <div className="usuario">
                                    <img alt="" src="assets/img/meowed.svg" />
                                    meowed
                                </div>
                                <div className="acoes">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                            </div>

                            <div className="conteudo">
                                <img alt="" src="assets/img/gato-telefone.svg" />
                            </div>

                            <div className="fundo">
                                <div className="acoes">
                                    <div>
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                    <div>
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </div>
                                </div>

                                <div className="curtidas">
                                    <img alt="" src="assets/img/respondeai.svg" />
                                    <div className="texto">
                                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post">
                            <div className="topo">
                                <div className="usuario">
                                    <img alt="" src="assets/img/barked.svg" />
                                    barked
                                </div>
                                <div className="acoes">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                            </div>

                            <div className="conteudo">
                                <img alt="" src="assets/img/dog.svg" />
                            </div>

                            <div className="fundo">
                                <div className="acoes">
                                    <div>
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                    <div>
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </div>
                                </div>

                                <div className="curtidas">
                                    <img alt="" src="assets/img/adorable_animals.svg" />
                                    <div className="texto">
                                        Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <div className="usuario">
                        <img alt="" src="assets/img/catanacomics.svg" />
                        <div className="texto">
                            <strong>catanacomics</strong>
                            <span>
                                Catana
                                <ion-icon name="pencil"></ion-icon>
                            </span>
                        </div>
                    </div>

                    <div className="sugestoes">
                        <div className="titulo">
                            Sugestões para você
                            <div>Ver tudo</div>
                        </div>

                        <div className="sugestao">
                            <div className="usuario">
                                <img alt="" src="assets/img/bad.vibes.memes.svg" />
                                <div className="texto">
                                    <div className="nome">bad.vibes.memes</div>
                                    <div className="razao">Segue você</div>
                                </div>
                            </div>

                            <div className="seguir">Seguir</div>
                        </div>

                        <div className="sugestao">
                            <div className="usuario">
                                <img alt="" src="assets/img/chibirdart.svg" />
                                <div className="texto">
                                    <div className="nome">chibirdart</div>
                                    <div className="razao">Segue você</div>
                                </div>
                            </div>

                            <div className="seguir">Seguir</div>
                        </div>

                        <div className="sugestao">
                            <div className="usuario">
                                <img alt="" src="assets/img/razoesparaacreditar.svg" />
                                <div className="texto">
                                    <div className="nome">razoesparaacreditar</div>
                                    <div className="razao">Novo no Instagram</div>
                                </div>
                            </div>

                            <div className="seguir">Seguir</div>
                        </div>

                        <div className="sugestao">
                            <div className="usuario">
                                <img alt="" src="assets/img/adorable_animals.svg" />
                                <div className="texto">
                                    <div className="nome">adorable_animals</div>
                                    <div className="razao">Segue você</div>
                                </div>
                            </div>

                            <div className="seguir">Seguir</div>
                        </div>

                        <div className="sugestao">
                            <div className="usuario">
                                <img alt="" src="assets/img/smallcutecats.svg" />
                                <div className="texto">
                                    <div className="nome">smallcutecats</div>
                                    <div className="razao">Segue você</div>
                                </div>
                            </div>

                            <div className="seguir">Seguir</div>
                        </div>
                    </div>

                    <div className="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                        Hashtags • Idioma
                    </div>

                    <div className="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>
                
            <div className="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    );
}
