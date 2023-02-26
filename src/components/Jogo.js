import forca0 from '../assets/img/forca0.png';
import forca1 from '../assets/img/forca1.png';
import forca2 from '../assets/img/forca2.png';
import forca3 from '../assets/img/forca3.png';
import forca4 from '../assets/img/forca4.png';
import forca5 from '../assets/img/forca5.png';
import forca6 from '../assets/img/forca6.png';

function Jogo({ escolherPalavra, setEscolherPalavra, palavraSorteada, setPalavraSorteada,
    arrayUnderline, setArrayUnderline, erros, setErros, cor, setCor, setDesativarBotao,
    palavras, setLetraSelecionada }) {

    const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    function iniciarJogo() {

        reiniciarJogo();

        setEscolherPalavra(false);
        setArrayUnderline([...palavraSorteada].fill("_ "));
        setDesativarBotao(false);
    }

    function reiniciarJogo() {
        if (cor === 'verde' || cor === 'vermelho') {
            setEscolherPalavra(false);
            setPalavraSorteada(palavras[0].split(""));
            setArrayUnderline([palavraSorteada].fill(""));
            setEscolherPalavra(true);
            setLetraSelecionada([]);
            setErros(0);
            setCor('');
        }
    }

    return (
        <div className="jogo">
            <div className="esquerda">
                <img data-test="game-image" className="forca" src={imagens[erros]} alt="forca"></img>
            </div>

            <div className="direita">
                <button data-test="choose-word" onClick={iniciarJogo} className="iniciarJogo"><p className="textoBotao">Escolher Palavra</p></button>
                <div data-test="word" className={`linhas ${cor}`}>{(!escolherPalavra && arrayUnderline)}</div>
            </div>

        </div>
    );
}

export default Jogo;