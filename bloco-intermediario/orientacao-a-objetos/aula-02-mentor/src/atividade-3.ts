//Crie um programa que simule uma carteira de dinheiro. Este
//programa vai precisar ter uma carteira contendo saldo, transações
//de entrada e saídas. Ou seja, será um objeto com estas
//propriedades. Depois crie uma função para lançar uma entrada e
//uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
//um erro ou avisar.

import {Carteira, Transacao} from './types'

const carteiraFabricio: Carteira = {
  saldo: 5000,
  transacoes: []
};

const transacao: Transacao = {
  tipo: 'ENTRADA',
  valor: 500
}


export function lancarTransacao(novaTransacao: Transacao) {
  switch(novaTransacao.tipo) {
    case "ENTRADA":
      carteiraFabricio.saldo += novaTransacao.valor
      break;
    case "SAIDA":
      if(carteiraFabricio.saldo < novaTransacao.valor) {
          console.log('Não possui saldo suficiente para esta transação')
          return;
        }

      carteiraFabricio.saldo -= novaTransacao.valor;
      break;
    default:
  }

  carteiraFabricio.transacoes.push(novaTransacao)
  console.log(carteiraFabricio)
}
