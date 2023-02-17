import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import "./css/reset.css";
import "./css/style.css";

function App() {
  return (
    <div className="container">
      <Jogo />
      <Letras />
    </div>
  );
}

export default App;
