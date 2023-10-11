import { styled } from "styled-components";

const ContentStyled = styled.div`
  max-width: 50%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  h1 {
    margin-bottom: 10px;
  }

  p {
    font-size: 2rem;
  }

  img {
    width: 450px;
  }
`

export default ContentStyled