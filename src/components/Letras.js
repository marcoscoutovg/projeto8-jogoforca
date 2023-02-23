function Letras() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function escolherLetra() {
        console.log('funciona');
    }

    return (
        <div className="listaLetras">
            {alfabeto.map(a => <button data-test="letter" onClick={escolherLetra} disabled={true} className="letra" key={a}>{a}</button>)}
        </div>
    );
}

export default Letras;