/*
Padrão do nome do arquivo => PascalCase
extensão => .tsx
*/

interface MeuBotaoParametro {
  tituloBotao: string;
}

function MeuBotao(prop: MeuBotaoParametro) {
  return (
    <button>{prop.tituloBotao}</button>
  )
}

export default MeuBotao