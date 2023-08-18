import CardStyled from "./CardStyled";

interface CardProps {
  imgUrl: string;
  imgAlt: string;
  label: string;
}

function Card(props: CardProps) {
  return (
    <CardStyled>
      <div>
        <img src={props.imgUrl} alt={props.imgAlt} />
        <h2>{props.label}</h2>
        <button>Saiba Mais</button>
      </div>
    </CardStyled>
  )
}

export default Card