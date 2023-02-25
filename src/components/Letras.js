function Letras({ palavraSorteada, letraSelecionada,
    setLetraSelecionada, setArrayUnderline, erros, setErros,
    alfabeto, setCor, desativarBotao, setDesativarBotao }) {

    function clicouLetra(letra) {

        const errosAtualizados = erros + 1;
        const novaLetraSelecionada = [...letraSelecionada, letra];
        const novoUnder = [...palavraSorteada].map(n => novaLetraSelecionada.includes(n) ? n : "_ ");

        setLetraSelecionada(novaLetraSelecionada);

        (palavraSorteada.includes(letra) ? setArrayUnderline(novoUnder) : setErros(errosAtualizados));
        
        function VerificaGanhaJogo() {
            if (novoUnder.toString() === palavraSorteada.toString()) {
                setCor('verde');
                setDesativarBotao(true);
            }
        }

        function VerificaPerdeJogo() {
            if (errosAtualizados >= 6) {
                setCor('vermelho');
                setArrayUnderline(palavraSorteada);
                setDesativarBotao(true);
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