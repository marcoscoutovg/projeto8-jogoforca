import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import "./css/reset.css";
import "./css/style.css";
import { useState } from "react";


function App() {

  /* function sortearPalavra() {
    return Math.random() -0.5;
  }

  palavras.sort(sortearPalavra);
  console.log(palavras[0]);
  */

  const [escolherPalavra, setEscolherPalavra] = useState(true);
  const [imagemForca, setImagemForca] = useState({forca0})

  return (
    <div className="container">
      <Jogo escolherPalavra={escolherPalavra} setEscolherPalavra={setEscolherPalavra}/>
      <Letras escolherPalavra={escolherPalavra} setEscolherPalavra={setEscolherPalavra}/>
    </div>
  );
}

export default App;
