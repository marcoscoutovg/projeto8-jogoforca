function Letras({escolherPalavra, setEscolherPalavra}) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="listaLetras">
            {alfabeto.map(a => <button data-test="letter" onClick={() => alert('oi')} disabled={escolherPalavra} className="letra" key={a}>{a}</button>)}
        </div>
    );
}

export default Letras;