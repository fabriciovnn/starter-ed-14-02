import styled, { css } from 'styled-components';

interface FeedBackStyledProps {
  color: 'sucess' | 'error' | 'info' | 'warning' | '';
  mostrar?: boolean;
}

const FeedBackStyled = styled.div<FeedBackStyledProps>`
  padding: 16px;
  color: #fff;
  border-radius: 5px;
  visibility: ${(props) => (props.mostrar ? 'visible' : 'hidden')};

  p {
    font-size: 1.2rem;
  }

  ${(props) => {
    switch(props.color) {
      case 'sucess':
        return css`
          background-color: green;
        `
      case 'error':
        return css`
          background-color: red;
        `
      case 'info':
        return css`
          background-color: blue;
        `
      case 'warning':
        return css`
        background-color: orange;
        `
      default:
    }
  }}
`;

export default FeedBackStyled;