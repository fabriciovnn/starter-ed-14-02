import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  :root {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
