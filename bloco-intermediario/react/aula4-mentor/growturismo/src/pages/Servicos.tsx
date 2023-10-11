import Card from "../components/shared/Card";
import FlexContainerStyled from "../components/shared/FlexContainerStyled";
import imgHospedagem from '/assets/hotel.svg';
import imgRoteiro from '/assets/roteiro.svg';
import imgPacotes from '/assets/viagens.svg';

interface ServicosType {
  imgUrl: string;
  imgAlt: string;
  label: string;
}

const servicos: ServicosType[] = [
  {
    imgUrl: imgHospedagem,
    imgAlt: 'serviços de hospedagem',
    label: 'Hospedagem'
  },
  {
    imgUrl: imgRoteiro,
    imgAlt: 'roteiros personalizados',
    label: 'Roteiros'
  },
    {
    imgUrl: imgPacotes,
    imgAlt: 'Pacotes de Viagem',
    label: 'Pacotes'
  }
];

function Servicos() {
  return (
    <FlexContainerStyled modo="content">
      {servicos.map(item => (
        <Card imgUrl={item.imgUrl} imgAlt={item.imgAlt} label={item.label}/>
      ))}
    </FlexContainerStyled>
  );
}

export default Servicos;
