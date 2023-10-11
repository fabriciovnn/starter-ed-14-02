import { useState } from 'react';
import Feedback from '../components/Content/Feedback';
import Input from '../components/Content/Input';
import InputStyled from '../components/Content/InputStyled';
import WrapperForm from '../components/Content/WrapperForm';
import FlexContainerStyled from '../components/shared/FlexContainerStyled';
import TittleStyled from '../components/shared/TittleStyled';

//const valorInput = 'Le';
// const teste = 10;

interface FeedbackType {
  cor: 'sucess' | 'error' | 'info' | 'warning' | '';
  texto: string;
  mostrar: boolean;
}

// COMPARTILHAMENTO DE ESTADOS ENTRE COMPONENTES
function Contato() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const [feedback, setFeedback] = useState<FeedbackType>({
    cor: '',
    texto: '',
    mostrar: false
  })

  function enviarDados() {
    
    if(!formulario.nome) {
      setFeedback({
        cor: 'warning',
        mostrar: true,
        texto: 'É preciso informar o nome'
      });

      return;
    }

    if(!formulario.email) {
      setFeedback({
        cor: 'warning',
        mostrar: true,
        texto: 'É preciso informar o email'
      })

      return;
    }

    if (!formulario.telefone) {
      setFeedback({
        cor: 'warning',
        mostrar: true,
        texto: 'É preciso informar o telefone'
      });

      return;
    }

    if(!formulario.mensagem) {
      setFeedback({
        cor: 'warning',
        mostrar: true,
        texto: 'É preciso informar uma mensagem'
      })

      return;
    }

    setFeedback({
      cor: 'info',
      mostrar: true,
      texto: 'Enviando seus dados...'
    });

    setTimeout(() => {
      console.log(formulario)
      setFeedback({
        cor: 'sucess',
        mostrar: true,
        texto: 'Dados Recebidos, Em breve entraremos em contato'
      })

      setFormulario({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      })
    }, 4000)

    setTimeout(() => {
      setFeedback({
        cor: '',
        mostrar: false,
        texto: ''
      })
    }, 6000);
  }

  function mudaEstado(evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });
  }

  return (
    <FlexContainerStyled modo="content">
      <WrapperForm>
        <TittleStyled tamanho="sm" primario>
          Formulário
        </TittleStyled>

        <form
          action=""
          onSubmit={(ev) => {
            ev.preventDefault();
            enviarDados();
          }}
        >
          <Input
            elemento="input"
            nomeInput="nome"
            tipoInput="text"
            valor={formulario.nome}
            textoLabel="Nome"
            funcaoOnChange={mudaEstado}
          />

          <Input
            elemento="input"
            tipoInput="email"
            nomeInput="email"
            valor={formulario.email}
            textoLabel="E-mail"
            funcaoOnChange={mudaEstado}
          />

          <Input
            elemento="input"
            tipoInput="text"
            nomeInput="telefone"
            valor={formulario.telefone}
            textoLabel="Telefone"
            funcaoOnChange={mudaEstado}
          />

          <Input 
          elemento='textarea'
          nomeInput='mensagem'
          valor={formulario.mensagem}
          textoLabel='Mensagem'
          funcaoOnChange={mudaEstado}
           />

          <InputStyled>
            <button type="submit">Enviar</button>
          </InputStyled>
        </form>

        <Feedback cor={feedback.cor} texto={feedback.texto} show={feedback.mostrar}/>
      </WrapperForm>
    </FlexContainerStyled>
  );
}

export default Contato;
