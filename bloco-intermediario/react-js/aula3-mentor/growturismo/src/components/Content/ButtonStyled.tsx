import { styled } from "styled-components";


const ButtonStyled = styled.button`
  background-color: #122a57;
  color: white;
  border-radius: 40px;
  border: none;
  width: 200px;
  padding: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #4b5f87;
  }
`

export default ButtonStyled