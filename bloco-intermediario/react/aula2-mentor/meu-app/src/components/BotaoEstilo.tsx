import React from 'react';
import styled, { css } from 'styled-components'

interface BotaoEstiloProps {
  primary?: boolean;
}

const BotaoEstilo = styled.button<BotaoEstiloProps & React.CSSProperties>`
  height: ${(props) => props.height};
  border-radius: 3px;
  border: 2px solid ${props => props.theme.colorTitulo};
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary
      ? css`
        background-color: ${props => props.theme.colorTitulo};
        color: ${props => props.theme.colorFont};
        `
      : css`
          background-color: transparent;
          color: ${props => props.theme.colorFont};
        `}
`;

export default BotaoEstilo