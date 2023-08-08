import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types';

// definição do tema
const temaLight: DefaultTheme = {
    bgColor: '#fff',
    colorFont: '#3a3a3a',
    colorTitulo: '#00ffff',
    btnColor: 'red'
};

const temaDark: DefaultTheme = {
    bgColor: '#3a3a3a',
    colorFont: 'white',
    colorTitulo: 'purple',
    btnColor: 'purple',

}

interface TemaPadraoProps {
  children: React.ReactNode;
}
// componente que precisará ser utilizado na app
function TemaPadrao(props: TemaPadraoProps) {
  return (
    <ThemeProvider theme={temaLight}>
      {props.children}
    </ThemeProvider>
  )
}

export default TemaPadrao;