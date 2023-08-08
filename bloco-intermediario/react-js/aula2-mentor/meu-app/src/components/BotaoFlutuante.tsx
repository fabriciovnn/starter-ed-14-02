import styled from 'styled-components';

const BotaoFlutuante = styled.button`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${props => props.theme.colorTitulo};
  border: none;
  font-size: 28px;
  color: ${props => props.theme.colorFont};

  &:hover {
    background-color: transparent;
    border: 2px solid ${props => props.theme.colorTitulo};
    color: ${props => props.theme.colorTitulo};
    transition: .5s;
  }

`

export default BotaoFlutuante