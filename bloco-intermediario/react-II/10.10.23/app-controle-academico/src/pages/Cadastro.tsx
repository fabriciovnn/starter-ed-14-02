import { Button, TextField, Typography, Box } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { cadastro } from "../services/auth.service";

function Cadastro() {
  const navigate = useNavigate();

  async function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    //document.getElementById('nome').value
    //document.getElementById('email').value
    //document.getElementById('password').value
    // console.log(evento.currentTarget.nome.value);
    // console.log(evento.currentTarget.email.value);
    // console.log(evento.currentTarget.password.value);

    const aluno = {
      nome: evento.currentTarget.nome.value,
      email: evento.currentTarget.email.value,
      senha: evento.currentTarget.senha.value,
    }

    const resposta = await cadastro(aluno);

    if(resposta.ok === false) {
      alert(resposta.mensagem);
      return
    }

    const confirmou = confirm(`${resposta.mensagem}. Deseja ser direcionado para a pagina de login?`)

    if(confirmou) {
      navigate('/');
    }

    //RESET DO FORMULARIO
    evento.currentTarget.nome.value = '';
    evento.currentTarget.email.value = '';
    evento.currentTarget.password.value = '';
  }

  return (
    <Box component='main' height='100vh' display='flex' alignItems='center' justifyContent='center'>
      <Box component='section'>
        <Typography variant="h3" component='h1' textAlign='center'> Cadastre-se </Typography>
        <form onSubmit={handleSubmit} >
          <TextField id="nome" type="text" label="Nome completo" variant="outlined" fullWidth margin='dense'/>
          <TextField id="email" type="email" label="E-mail" variant="outlined" fullWidth margin='dense'/>
          <TextField id="password" type="password" label="Password" variant="outlined" fullWidth margin='dense'/>
          <Button type='submit' variant="contained" color="primary" fullWidth sx={{marginY: '6px'}} size='large'>Criar Conta</Button>
        </form>
        <Typography textAlign='center'>Já possui conta? <Link to={'/'}>Acesse</Link></Typography>
      </Box>
    </Box>
  )
}

export default Cadastro;