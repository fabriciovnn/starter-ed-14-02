import { Base } from "./Base";
import { Item } from "./Item";

export class Pedido extends Base {
  public itens: Array<Item>
  public valorTotal: number

  constructor() {
    super()
    this.itens = []
    this.valorTotal = 0
  }

  adicionarItem(item: Item) {
    this.itens.push(item)

    this.valorTotal += item.valor
  }

  public mostrarDados(): void {
    this.itens.forEach(item => {
      console.log(`${item.nome}`)
    })
    console.log(this.valorTotal.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'}))
  }
}