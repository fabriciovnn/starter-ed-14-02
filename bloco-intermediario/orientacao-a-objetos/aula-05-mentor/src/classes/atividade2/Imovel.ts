/*2. Crie a classe Imovel, que possui um endereço e um preço.*/
export abstract class Imovel {
  private _endereco: string;
  private _preco: number;

  constructor(endereco: string, preco: number) {
    this._endereco = endereco
    this._preco = preco
  }

  public get endereco(): string {
    return this._endereco
  }

  public get preco(): number {
    return this._preco
  }

  protected set preco(novoPreco: number) {
    this._preco = novoPreco
  }

  imprimirValor(): void {}
}