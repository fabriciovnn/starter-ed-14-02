//a. crie uma classe Normal, que herda Ingresso..
import {Ingresso} from './Ingresso'

export class Normal extends Ingresso {

  constructor(valor: number) {
    super(valor)
  }

  imprimeValor(): void {
    console.log(`O ingresso normal custou R$${this._valor.toFixed(2)}`)
  }
}
