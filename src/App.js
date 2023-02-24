import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import "./css/reset.css";
import "./css/style.css";
import { useState } from "react";


function App() {

  const [palavraSorteada, setPalavraSorteada] = useState(palavras[0].split(""));
  const [arrayUnderline, setArrayUnderline] = useState([...palavraSorteada]);
  const [escolherPalavra, setEscolherPalavra] = useState(true);
  const [imagemForca, setImagemForca] = useState('../assets/img/forca0.png');
  const [palavraEscolhida, setPalavraEscolhida] = useState([]);

  const erros = 0;

  return (
    <div className="container">
      <Jogo
        escolherPalavra={escolherPalavra}
        setEscolherPalavra={setEscolherPalavra}
        palavraEscolhida={palavraEscolhida}
        setPalavraEscolhida={setPalavraEscolhida} 
        palavraSorteada={palavraSorteada}
        arrayUnderline={arrayUnderline}/>

      <Letras
        escolherPalavra={escolherPalavra}
        setEscolherPalavra={setEscolherPalavra}
      />
    </div>
  );
}

function sortearPalavra() {
  return Math.random() - 0.5;
}

palavras.sort(sortearPalavra);
console.log(palavras[0])

export default App;
