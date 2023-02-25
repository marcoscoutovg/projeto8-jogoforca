function Letras({ escolherPalavra, palavraSorteada, letraSelecionada,
    setLetraSelecionada, setArrayUnderline, erros, setErros,
    alfabeto }) {

    function clicouLetra(letra) {
        
        const novaLetraSelecionada = [...letraSelecionada, letra]
        const novoUnder = [...palavraSorteada].map(n => novaLetraSelecionada.includes(n) ? n : "_ ")

        setLetraSelecionada(novaLetraSelecionada);

        (palavraSorteada.includes(letra) ? setArrayUnderline(novoUnder) : setErros(erros + 1));
    }

    return (
        <div className="listaLetras">
            {alfabeto.map(a =>
                <button data-test="letter" onClick={() => clicouLetra(a)}
                    disabled={(!letraSelecionada.includes(a) ? escolherPalavra : letraSelecionada.includes(a))}
                    className={`letra ${(!letraSelecionada.includes(a) && !escolherPalavra && "ativado")}`}
                    key={a}>
                    {a.toUpperCase()}
                </button>)}
        </div>
    );
}

export default Letras;