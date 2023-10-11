import MeuBotao from "../components/MeuBotao";
import MeuTitulo from "../components/MeuTitulo";

function Contato() {
  return (
    <>
      <MeuTitulo textoTitulo="Contatos" textoSubtitulo="Texto contatos"/>
      <MeuBotao tituloBotao="Entre em contato" primario/>
    </>
  )
}

export default Contato;