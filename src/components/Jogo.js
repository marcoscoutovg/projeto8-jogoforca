import forca0 from '../src/assets/img/forca0.png';


function Jogo({escolherPalavra, setEscolherPalavra}) {

    function iniciarJogo() {

    }

    return (
        <div className="jogo">
            <div className="esquerda">
                <img data-test="game-image" className="forca" src={forca0} alt="forca" />
            </div>
            
            <div className="direita">
                <button data-test="choose-word" onClick={() => setEscolherPalavra(false)} className="iniciarJogo"><p className="textoBotao">Escolher Palavra</p></button>
                <input data-test="word" type="text" className="linhas" disabled={true} placeholder=""/>
            </div>

        </div>
    );
}

export default Jogo;