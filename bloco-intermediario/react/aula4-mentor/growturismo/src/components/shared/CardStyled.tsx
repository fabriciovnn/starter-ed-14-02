import { styled } from "styled-components";

const CardStyled = styled.div`
  width: 240px;
  height: 300px;
  padding: 24px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    img {
      width: 100%;
    }

    h2 {
      color: #122a57;
      font-size: 1.8rem;
    }

    button {
      background-color: transparent;
      color: #122a57;
      width: 120px;
      padding: 15px;
      border-radius: 20px;
      border: 2px solid #122a57;
      margin-top: 5px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background-color: #4b5f87;
        color: white;
      }
    }
  }

`

export default CardStyled