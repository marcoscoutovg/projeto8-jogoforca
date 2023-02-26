function Letras({ palavraSorteada, letraSelecionada,
    setLetraSelecionada, setArrayUnderline, erros, setErros,
    alfabeto, setCor, desativarBotao, setDesativarBotao, sortearPalavra, palavras,
    setPalavraSorteada }) {

    function clicouLetra(letra) {

        const novaLetraSelecionada = [...letraSelecionada, letra];
        const novoUnder = [...palavraSorteada].map(n => novaLetraSelecionada.includes(n) ? n : "_ ");
        const errosMaximos = 6;

        setLetraSelecionada(novaLetraSelecionada);

        (palavraSorteada.includes(letra) ? setArrayUnderline(novoUnder) : setErros(++erros));
        function VerificaGanhaJogo() {
            if (novoUnder.toString() === palavraSorteada.toString()) {
                setCor('verde');
                setDesativarBotao(true);
                palavras.sort(sortearPalavra);
                setPalavraSorteada(palavras[0]);
            }
        }

        function VerificaPerdeJogo() {
            if (erros >= errosMaximos) {
                setCor('vermelho');
                setArrayUnderline(palavraSorteada);
                setDesativarBotao(true);
                palavras.sort(sortearPalavra);
                setPalavraSorteada(palavras[0]);
            }
        }

        VerificaGanhaJogo();

        VerificaPerdeJogo();
    }

    return (
        <div className="listaLetras">
            {alfabeto.map(a =>
                <button data-test="letter" onClick={() => clicouLetra(a)}
                    disabled={(!letraSelecionada.includes(a) ? desativarBotao : letraSelecionada.includes(a))}
                    className={`letra ${((!letraSelecionada.includes(a)) && !desativarBotao && "ativado")}`}
                    key={a}>
                    {a.toUpperCase()}
                </button>)}
        </div>
    );
}

export default Letras;