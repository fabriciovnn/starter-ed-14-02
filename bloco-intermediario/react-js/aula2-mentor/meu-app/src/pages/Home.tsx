import { Link } from "react-router-dom";
import BotaoFlutuante from "../components/BotaoFlutuante";
import MeuBotao from "../components/MeuBotao";
import MeuNavbar from "../components/MeuNavBarEstilo";
import MeuTitulo from "../components/MeuTitulo";

function Home() {
  return (
    <>
      <MeuNavbar>
        <ul>
          <li><Link to={}>Home</Link></li>
          <li><Link to={}>Contatos</Link></li>
        </ul>
      </MeuNavbar>
      <MeuTitulo textoTitulo="Home" textoSubtitulo="pagina home"/>
      <MeuBotao tituloBotao="Clique aqui" primario/>
      <MeuBotao tituloBotao="Outro botao" />

      <BotaoFlutuante>+</BotaoFlutuante>
    </>
  )
}

export default Home;