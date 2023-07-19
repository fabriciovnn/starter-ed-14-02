import {Imovel} from './Imovel'

export class Novo extends Imovel {
  private _valorAdicional: number;
  
  constructor(endereco: string, preco: number, valorAdicional: number) {
    super(endereco, preco)
    this._valorAdicional = valorAdicional
  }

  imprimirValor(): void {
    this.preco += this._valorAdicional
    console.log(`O valor do Novo imóvel é: R$${(this.preco + this._valorAdicional).toFixed(2)}`)
  }
}