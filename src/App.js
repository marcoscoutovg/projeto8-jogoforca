import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import "./css/reset.css";
import "./css/style.css";

function App() {

  function sortearPalavra() {
    return Math.random() -0.5;
  }

  palavras.sort(sortearPalavra);
  console.log(palavras[0]);

  return (
    <div className="container">
      <Jogo />
      <Letras />
    </div>
  );
}

export default App;
