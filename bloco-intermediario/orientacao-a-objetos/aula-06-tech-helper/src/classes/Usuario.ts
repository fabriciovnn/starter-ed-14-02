import { Base } from "./Base"
import { Produto } from "./Produto"

export class Usuario extends Base {
  private _username: string
  private _carrinho: Array<Produto>

  constructor(nome: string, username: string) {
    super(nome)
    this._username = username
    this._carrinho = []
  }

  public get username(): string {
    return this._username
  }

  public addProduto(produto: Produto): void {
    this._carrinho.push(produto)
    console.log('produto adicionado ao carrinho.')
  }

  public removeProduto(produto: Produto): void {
    const indice = this._carrinho.findIndex((item) => item.id === produto.id)

    if(indice === -1) {
      console.log('Produto não encontrado.')
      return
    }

    const [ itemRemovido ] = this._carrinho.splice(indice, 1)
    console.log('Produto removido do carrinho.')
    console.log(itemRemovido)
  }

  public visualizar(): void {
    console.log(`Nome: ${this.nome} - Username: ${this._username}`)
  }

  public visualizarProdutos(): void {
    this._carrinho.forEach((item) => {
      console.log(`${item.nome} - ${item.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
    })
  }

}