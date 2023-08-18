import FeedBackStyled from "./FeedBackStyled";

interface FeedBackProps {
  cor: 'sucess' | 'error' | 'info' | 'warning' | '';
  texto: string;
  show?: boolean; 
}

function Feedback(props: FeedBackProps) {
  return (
    <FeedBackStyled color={props.cor} mostrar={props.show}>
      <p>{props.texto}</p>
    </FeedBackStyled>
  );
}

export default Feedback;