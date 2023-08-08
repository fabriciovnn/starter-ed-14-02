import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial
  }

  body {
    background-color: ${props => props.theme.bgColor};
  }

  h1 {
    color: ${props => props.theme.colorTitulo}
  }

`;
export default EstiloGlobal