/* b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.*/
import {Ingresso} from './Ingresso'

export class Vip extends Ingresso {

  constructor(valor: number) {
    super(valor)
    this._valor += (this._valor * 20) / 100
  }

  imprimeValor(): void {
    console.log(`O ingresso vip com adicional de 20% custou R$${this._valor.toFixed(2)}`)
  }
}