import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { randomUUID } from 'crypto';


const app = express();

//converte o arquivo JSON para um objeto js
app.use(express.json());
app.use(cors());

const porta = process.env.PORTA

app.listen(porta, () => {
  console.log(`Server is running on port ${porta}`)
})

//rota raiz
app.get('/', (request, response) => {
  //.send para enviar outro tipo de arquivo, além de json
  //.json para enviar arquivo json
  return response.status(200).send('<h1>Api Growdev rodando</h1>')
})

//ROTAS PARA TRANSAÇÕES
const carteira = {
  saldo: 0,
  transacoes: []
}

//CADASTRO
//POST
app.post('/transacoes', (request, response) => {
  //desconstroi o objeto recebido
  const { valor, tipo } = request.body;

  //validar se existe .valor dentro do body
  if(!valor) {
    return response.status(400).json({
      mensagem: 'É preciso informar o valor da transação'
    })
  }

  const valorConvertido = Number(valor)

  if(isNaN(valorConvertido) || valorConvertido < 0) {
    return response.status(400).json({
      mensagem: 'O dado enviado para valor não é um dado numérico válido'
    })
  }

  //validar se existe .tipo dentro do body
  if(!tipo) {
    return response.status(400).json({
      mensagem: 'É preciso informar o tipo da transação'
    })
  }
  
  //validar se o que esta dentro de .tipo é 'entrada' ou 'saida'
  let tipoConvertido;
  if(typeof tipo === 'string') {
    tipoConvertido = tipo.toLowerCase()
  }

  if(tipoConvertido !== 'entrada' && tipoConvertido !== 'saida') {
    return response.status(400).json({
      mensagem: 'O tipo precisa ser "entrada" ou "saida"'
    })
  }

  //aqui pra baixo esta tudo validado
  const novaTransacao = {
    id: randomUUID(), // "12345-454878-45454-45454"
    valor: valorConvertido,
    tipo: tipoConvertido
  }

  if(tipoConvertido === 'entrada') {
    carteira.saldo += valorConvertido
  } else {
    if(carteira.saldo < valorConvertido) {
      return response.status(400).json({
        mensagem: 'Saldo insuficiente'
      })
    }

    carteira.saldo -= valorConvertido
  }

  carteira.transacoes.push(novaTransacao)

  return response.status(201).json({
    mensagem: `Transação realizada com sucesso. Seu novo saldo é de R$ ${carteira.saldo.toFixed(2)}`,
    transacoes: carteira.transacoes
  })
})