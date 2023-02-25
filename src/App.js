import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import "./css/reset.css";
import "./css/style.css";
import { useState } from "react";

function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [palavraSorteada, setPalavraSorteada] = useState(palavras[0].split(""));
  const [arrayUnderline, setArrayUnderline] = useState([]);
  const [escolherPalavra, setEscolherPalavra] = useState(true);
  const [letraSelecionada, setLetraSelecionada] = useState([]);
  const [erros, setErros] = useState(0);
  const [cor, setCor] = useState('');
  const [desativarBotao, setDesativarBotao] = useState(true);


  return (
    <div className="container">
      <Jogo
        escolherPalavra={escolherPalavra}
        setEscolherPalavra={setEscolherPalavra}
        palavraSorteada={palavraSorteada}
        arrayUnderline={arrayUnderline}
        setArrayUnderline={setArrayUnderline}
        erros={erros}
        cor={cor}
        setDesativarBotao={setDesativarBotao}
      />

      <Letras
        letraSelecionada={letraSelecionada}
        setLetraSelecionada={setLetraSelecionada}
        palavraSorteada={palavraSorteada}
        setArrayUnderline={setArrayUnderline}
        erros={erros}
        setErros={setErros}
        alfabeto={alfabeto}
        setCor={setCor}
        desativarBotao={desativarBotao}
        setDesativarBotao={setDesativarBotao}
      />
    </div>
  );
}

function sortearPalavra() {
  return Math.random() - 0.5;
}

palavras.sort(sortearPalavra);
console.log('palavra que foi sorteada -', palavras[0])

export default App;
