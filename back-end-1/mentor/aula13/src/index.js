import express from 'express';
//const express = require('express')
//criacao do app api servidor
const app = express();

//parse / converte o JSON para o formato que o dado for(array, objeto, string, number...)
app.use(express.json());

app.listen(8080, () => console.log("Servidor iniciado"));


//database
const listaUsuarios = []
const listaRecados = []

app.get('/', (req, res) => {
  return res.status(200).send('<h1>Bem vindo a API do Tech Helper</h1>')
})

app.post('/users', (req, res) => {
  const dados = req.body

  //considerar validacao dos dados
  const novoUsuario = {
    id: new Date().getTime(),
    nome: dados.nome,
    email: dados.email,
    senha: dados.senha,
    logado: false
  }

  listaUsuarios.push(novoUsuario)

  return res.status(201).json('Usuario criado com sucesso')
})

//login
app.post('/login', (req, res) => {
  const data = req.body

  //validar email e senha. data.email e data.senha
  const emailCorreto = listaUsuarios.some((user) => user.email === data.email)
  const senhaCorreta = listaUsuarios.some((user) => user.senha === data.senha)
  

  if(!emailCorreto ||  !senhaCorreta) {
    res.status(400).json('Email ou senha estão incorretos')
  }

  listaUsuarios.forEach(user => user.logado = false)
  
  const user = listaUsuarios.find((user) => user.email === data.email)
  
  user.logado = true

  return res.status(200).json('Login com sucesso')

})

app.post('/recados', (req, res) => {
  const dados = req.body


  const usuario = listaUsuarios.find((user) => user.logado === true)

  if(!usuario) {
    return res.status(400).json('É necessário fazer login para criar um recado')
  }

  const novoRecado = {
    id: new Date().getTime(),
    titulo: dados.titulo,
    descricao: dados.descricao,
    autor: usuario
  }

  listaRecados.push(novoRecado)
  return res.status(200).json('recado criado com sucesso')
})

app.delete('/recados/:id', (req, res) => {
  const id = req.params.id

  const recadoExiste = listaRecados.findIndex(recado => recado.id === id )

  //verificar se usuario esta logado para poder deletar
  //verificar se o autor é a pessoa que esta logada
  
  if(recadoExiste < 0) {
    return res.status(400).json('Recado não existe')
  }

  listaRecados.splice(recadoExiste, 1)
  return res.status(200).json('Recado deletado com sucesso!')
})