//Crie uma classe abstrata chamada Ingresso que possui um valor
//em reais e um método imprimeValor()

export abstract class Ingresso {
  protected _valor: number;

  constructor(valor: number) {
    this._valor = valor
  }

  imprimeValor(): void {}
}