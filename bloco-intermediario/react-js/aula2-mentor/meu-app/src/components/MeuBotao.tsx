/*
Padrão do nome do arquivo => PascalCase
extensão => .tsx
*/

import BotaoEstilo from "./BotaoEstilo";

interface MeuBotaoParametro {
  tituloBotao: string;
  primario?: boolean;
}

function MeuBotao(prop: MeuBotaoParametro) {
  return (
    <BotaoEstilo height={'50px'} primary={prop.primario}>{prop.tituloBotao}</BotaoEstilo>
  )
}

export default MeuBotao;