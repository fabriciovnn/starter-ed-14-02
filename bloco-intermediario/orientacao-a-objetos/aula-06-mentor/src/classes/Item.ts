import { randomUUID } from "crypto"
import { Base } from "./Base"

export class Item extends Base {
  public valor: number
  public nome: string
  public descricao: string

  constructor(valor: number, nome: string, descricao: string) {
    super()
    this.valor = valor
    this.nome = nome
    this.descricao = descricao
  }

  public mostrarDados(): void {

    if(this.valor > 0) {
      console.log(`${this.nome} - ${this.valor}`)
    }
  }
}