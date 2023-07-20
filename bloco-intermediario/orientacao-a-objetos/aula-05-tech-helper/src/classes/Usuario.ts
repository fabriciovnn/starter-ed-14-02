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

  public addProduto(produto: Produto): void {
    this._carrinho.push(produto)
    console.log('produto adicionado ao carrinho.')
  }

  public removeProduto(id: string): void {}

  public visualizarProdutos(): void {}
}