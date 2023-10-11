import FlexContainerStyled from '../components/shared/FlexContainerStyled';
import imgHome from '/assets/home.svg'
import TittleStyled from '../components/shared/TittleStyled'
import ContentStyled from '../components/shared/ContentStyled';
import ButtonStyled from '../components/Content/ButtonStyled';

function Home() {
	return (
		<>
			<FlexContainerStyled modo='content'>
				<ContentStyled>
					<TittleStyled tamanho='lg' primario>GrowTravel</TittleStyled>
					<p>O melhor serviço para vocẽ</p>
					<ButtonStyled>Saiba mais!</ButtonStyled>
				</ContentStyled>
				<ContentStyled>
					<img src={imgHome} alt="banner apresentação" />
				</ContentStyled>
			</FlexContainerStyled>
		</>
	)
}

export default Home;
