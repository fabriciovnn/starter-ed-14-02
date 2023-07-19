import {Imovel} from './Imovel'

export class Velho extends Imovel {
  private _valorDesconto: number;
  
  constructor(endereco: string, preco: number, valorDesconto: number) {
    super(endereco, preco)
    this._valorDesconto = valorDesconto
  }

  imprimirValor(): void {
    this.preco -= this._valorDesconto
    console.log(`O valor do velho imóvel é: R$${(this.preco - this._valorDesconto).toFixed(2)}`)
  }
}