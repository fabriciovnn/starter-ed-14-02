import { isFuture } from "date-fns";
import { useState } from "react";
import ButtonStyled from "../components/ButtonStyled";
import InputStyled from "../components/InputStyled";
import LiStyled from "../components/LiStyled";
import TextAreaStyled from "../components/TextAreaStyled";
import WrapperForm from "../components/WrapperForm";
import FlexContainerStyled from "../shared/FlexContainerStyled";

interface LivrosType {
  titulo: string;
  autor: string;
  ano: string;
  genero: string;
  descricao: string;
  id: string;
}

function Formulario() {
  const [formulario, setFormulario] = useState({
    titulo: "",
    autor: "",
    ano: "",
    genero: "",
    descricao: "",
  });

  const [livros, setLivros] = useState<LivrosType[]>([]);

  function enviarDados() {
    if (!formulario.titulo) {
      alert("é necessário enviar um título");
      return;
    }

    if (!formulario.autor) {
      alert("é necessário enviar um autor");
      return;
    }

    if (!formulario.genero) {
      alert("é necessário enviar um gênero");
      return;
    }

    if (!formulario.descricao) {
      alert("é necessário enviar uma descrição");
      return;
    }

    const data = new Date(formulario.ano);
    const dataFutura = isFuture(data);

    if (dataFutura) {
      alert("É necessário que não seja uma data futura");
      return;
    }

    setLivros([
      ...livros,
      {
        titulo: formulario.titulo,
        ano: formulario.ano,
        genero: formulario.genero,
        descricao: formulario.descricao,
        autor: formulario.autor,
        id: '123',
      },
    ]);

    alert("Livro enviado com sucesso");
    setFormulario({
      titulo: "",
      autor: "",
      ano: "",
      genero: "",
      descricao: "",
    });
  }

  function mudaEstado(
    evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormulario({
      ...formulario,
      [evento.target.name]: evento.target.value,
    });
  }

  return (
    <FlexContainerStyled>
      <WrapperForm>
        <h1>Livrópolis</h1>
        <span>Cadastre seu livro aqui!</span>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            enviarDados();
          }}
        >
          <InputStyled
            value={formulario.titulo}
            onChange={mudaEstado}
            type="text"
            name="titulo"
            placeholder="Título"
          />
          <InputStyled
            value={formulario.autor}
            onChange={mudaEstado}
            type="text"
            name="autor"
            placeholder="Autor"
          />
          <InputStyled
            value={formulario.ano}
            onChange={mudaEstado}
            type="date"
            name="ano"
            placeholder="Ano de Publicação"
          />
          <InputStyled
            value={formulario.genero}
            onChange={mudaEstado}
            type="text"
            name="genero"
            placeholder="Gênero"
          />
          <TextAreaStyled
            name="descricao"
            placeholder="Descrição"
            onChange={mudaEstado}
            value={formulario.descricao}
          ></TextAreaStyled>
          <ButtonStyled modo="cadastrar" type="submit">
            Cadastrar
          </ButtonStyled>
        </form>
      </WrapperForm>

      <WrapperForm>
        <ul>
          {livros.map((item, index) => (
            <LiStyled>
              <strong>Título: </strong>{item.titulo} | <strong>Autor: </strong> {item.autor}
              <ButtonStyled
                modo="ver mais"
                onClick={() => {
                  alert(
                    `Título: ${item.titulo}\nAutor: ${item.autor}\nDescrição: ${item.descricao} \nAno: ${item.ano} \nGênero: ${item.genero}\nId: ${item.id}`
                  );
                }}
              >
                ver mais
              </ButtonStyled>
              <ButtonStyled
                modo="atualizar"
                onClick={() => {
                  console.log(`Atualizar livro de indice ${index}`);
                  const novoNome = prompt("Informe o novo titulo: ");
                  const novoTelefone = prompt("Informe o novo autor");

                  const aux = [...livros];
                  aux[index].titulo = novoNome ?? aux[index].titulo;
                  aux[index].autor = novoTelefone ?? aux[index].autor;

                  setLivros(aux);
                }}
              >
                atualizar
              </ButtonStyled>
              <ButtonStyled
                modo="excluir"
                onClick={() => {
                  const confirma = confirm(
                    "Tem certeza que seja excluir o livro?"
                  );

                  if (confirma) {
                    const aux = [...livros];
                    aux.splice(index, 1);
                    setLivros(aux);
                  }
                }}
              >
                excluir
              </ButtonStyled>
            </LiStyled>
          ))}
        </ul>
      </WrapperForm>
    </FlexContainerStyled>
  );
}

export default Formulario;
