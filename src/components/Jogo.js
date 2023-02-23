


function Jogo() {

    function iniciarJogo(linhas) {

    }

    return (
        <div className="jogo">
            <div className="esquerda">
                <img data-test="game-image" className="forca" src="./assets/img/forca0.png" alt="forca" />
            </div>
            
            <div className="direita">
                <button data-test="choose-word" onClick={iniciarJogo} className="iniciarJogo"><p className="textoBotao">Escolher Palavra</p></button>
                <input data-test="word" type="text" className="linhas" disabled={true} placeholder=""/>
            </div>

        </div>
    );
}

export default Jogo;