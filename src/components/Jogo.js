


function Jogo() {
    return (
        <div className="jogo">
            <div className="esquerda">
                <img className="forca" src="./assets/img/forca0.png" alt="forca" />
            </div>
            
            <div className="direita">
                <button className="iniciarJogo"><p className="textoBotao">Escolher Palavra</p></button>
                <input type="text" className="linhas" disabled placeholder="_ _ _ _ _ _ _ _"/>
            </div>

        </div>
    );
}

export default Jogo;