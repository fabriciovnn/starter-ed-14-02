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
    tipo: tipoConvertido,
    dataLancamento: new Date().toLocaleString('pt-BR')
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

//LISTAR POR ID
app.get('/transacoes/:idTransacao', (request, response) => {
  const { idTransacao } = request.params // desconstrução de um objeto

  //buscar um registro em um array e devolver o dado em si
  const transacaoEncontrada = carteira.transacoes.find(transacao => transacao.id === idTransacao)

  if(!transacaoEncontrada) {
    return response.status(404).json({
      mensagem: 'Este ID informado não consta na base de dados'
    })
  }

  // ID -> route params
  return response.status(200).json({
    mensagem: "transação encontrada",
    transacaoEncontrada
  })
})

//Listar Vários
//quando precisamos buscar uma lista de dados ( filtrada ou não ) query params
//deve ser possivel listar todas as transacoes
//deve ser possivel listar somente as transacoes de entrada
//deve ser possivel listar somente as transacoes de saida
//deve ser possivel listar transacoes com um valor minimo
//deve ser possivel listar transacoes com um valor maximo
//deve ser possivel listar transacoes entre um range de valor ( min e max)
// regra: mostrar apenas as propriedades tipo, valor e dataLancamento
app.get('/transacoes', (request, response) => {
  // filtros não pode ser obrigatório
  const {tipoTransacao, valorMin, valorMax} = request.query
  let listaTransacoesFiltrada = [...carteira.transacoes]; //spread operator

  if(tipoTransacao) {
    // "entrada" || "saida"
    if(tipoTransacao !== 'entrada' && tipoTransacao !== 'saida') {
      //erro
      return response.status(400).json({
        mensagem: "parametro inválido para tipo da transação"
      });
    }
    //filter -> sempre retorna uma lista copia com todos os items que atenderem a condicao passada. Caso contrario retorna lista vazia
    listaTransacoesFiltrada = listaTransacoesFiltrada.filter(transacao => transacao.tipo === tipoTransacao)
  }

  if(valorMin && valorMax) {
    const valorMinConvertido = Number(valorMin) // nome tecnico dessa operacao : casting - se der erro retorna NaN
    const valorMaxConvertido = Number(valorMax)

    if(isNaN(valorMinConvertido)) {
      return response.status(400).json({
        mensagem: "parametro invalido para valor minimo"
      })
    }

    if(isNaN(valorMaxConvertido)) {
      return response.status(400).json({
        mensagem: "parametro invalido para valor máximo"
      })
    }

    if(valorMinConvertido > valorMaxConvertido) {
      return response.status(400).json({
        mensagem: "Parametros invalidos. O valor minimo deve ser menor que o valor maximo"
      })
    }

    listaTransacoesFiltrada = listaTransacoesFiltrada.filter(transacao => transacao.valor >= valorMinConvertido && transacao.valor <= valorMaxConvertido)

    return response.status(200).json({
      mensagem: "transacoes listadas com sucesso!",
      transacoes: listaTransacoesFiltrada.map(({valor, tipo, dataLancamento}) => ({valor,tipo, dataLancamento}))
    })

  }

  if(valorMin) {
    // só aplica o filtro do valor minimo
    const valorMinConvertido = Number(valorMin) // nome tecnico dessa operacao : casting - se der erro retorna NaN

    if(isNaN(valorMinConvertido)) {
      return response.status(400).json({
        mensagem: "parametro invalido para valor minimo"
      })
    }

    listaTransacoesFiltrada = listaTransacoesFiltrada.filter(transacao => transacao.valor >= valorMinConvertido)
  }

  if(valorMax) {
    const valorMaxConvertido = Number(valorMax) // nome tecnico dessa operacao : casting - se der erro retorna NaN

    if(isNaN(valorMaxConvertido)) {
      return response.status(400).json({
        mensagem: "parametro invalido para valor maximo"
      })
    }

    listaTransacoesFiltrada = listaTransacoesFiltrada.filter(transacao => transacao.valor <= valorMaxConvertido)
  }

  return response.status(200).json({
    mensagem: "Transações listadas com sucesso",
    // transacoes: listaTransacoesFiltrada.map(transacao => {
    //   const { valor, tipo, dataLancamento } = transacao

    //   return {valor, tipo, dataLancamento}
    // })
    transacoes: listaTransacoesFiltrada.map(({valor, tipo, dataLancamento}) => ({valor,tipo, dataLancamento}))
  })
})