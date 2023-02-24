import forca0 from '../assets/img/forca0.png';
import palavras from '../palavras';


function Jogo({ escolherPalavra, setEscolherPalavra, palavraEscolhida, setPalavraEscolhida, palavraSorteada, arrayUnderline}) {
    
    function iniciarJogo() {
        setEscolherPalavra(false);
        setPalavraEscolhida(arrayUnderline.fill("_ "))
        console.log(arrayUnderline)
        console.log(palavraSorteada)
    }

    return (
        <div className="jogo">
            <div className="esquerda">
                <img data-test="game-image" className="forca" src={forca0} alt="forca"></img>
            </div>

            <div className="direita">
                <button data-test="choose-word" onClick={iniciarJogo} className="iniciarJogo"><p className="textoBotao">Escolher Palavra</p></button>
                <div data-test="word" className="linhas">{(palavraEscolhida)}</div>
            </div>

        </div>
    );
}

export default Jogo;