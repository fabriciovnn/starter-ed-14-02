/*c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional.*/
import {Ingresso} from './Ingresso'

export class Camarote extends Ingresso {

  constructor(valor: number) {
    super(valor)
    this._valor += (this._valor * 40) / 100
  }
  
  imprimeValor(): void {
    console.log(`O ingresso camarote com adicional de 40% custou R$${this._valor.toFixed(2)}`)
  }
}