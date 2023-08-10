import ContentStyled from "../components/shared/ContentStyled";
import FlexContainerStyled from "../components/shared/FlexContainerStyled";
import TittleStyled from "../components/shared/TittleStyled";
import imgAeroporto from '/assets/aeroporto.svg';

function QuemSomos() {
	return (
	<FlexContainerStyled modo="content">
		<ContentStyled>
			<img src={imgAeroporto} alt="aeroporto" />
		</ContentStyled>
		<ContentStyled>
			<TittleStyled tamanho="lg" primario>
				| Quem Somos
			</TittleStyled>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat voluptatum, hic quisquam amet illum non ab eaque assumenda deleniti laboriosam</p>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat voluptatum, hic quisquam amet illum non ab eaque assumenda deleniti laboriosam</p>
		</ContentStyled>
	</FlexContainerStyled>
	);
}

export default QuemSomos;
