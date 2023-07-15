//Crie uma classe para implementar uma conta corrente. A classe
//deve possuir os seguintes atributos:
  //a. Número da conta
  //b. Nome do correntista
  //c. Saldo

//Os métodos são os seguintes:
  //a) Alterar nome
  //b) Deposito
  //c) Saque

//No construtor, o saldo é opcional, com valor padrão zero e os
//demais atributos são obrigatórios. A conta não pode ficar com saldo
//negativo.

export class ContaCorrente {
  numeroConta: string;
  nomeCorrentista: string
  saldo: number;

  constructor(numeroConta: string, nomeCorrentista: string, saldo?: number) {
    this.numeroConta = numeroConta
    this.nomeCorrentista = nomeCorrentista
    this.saldo = saldo ? saldo : 0
   }

  alterarNome(novoNome: string): void {
    this.nomeCorrentista = novoNome
  }

  realizarDeposito(valor: number): void {
    this.saldo += valor
    if(this.saldo < 0) {
      console.log()
      return undefined
    }
    else {
      console.log('deposito realizado com sucesso')
      console.log(`Seu novo saldo é de R$${this.saldo}`)
      return undefined
    }
  }

  realizarSaque(valor: number): void {
    if(this.saldo < valor) {
      console.log('Não foi possível realizar o saque')
      return undefined
    } else {
      this.saldo -= valor
      console.log('Saque realizado com sucesso')
      console.log(`Seu novo saldo é de R$${this.saldo}`)
    }
  }
}