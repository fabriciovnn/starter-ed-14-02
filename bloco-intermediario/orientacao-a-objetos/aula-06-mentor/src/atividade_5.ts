interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void

  recuperarValorTotal(): number;
}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;
  
  removeItem(item: string): void

}

class ItemPedido implements ValorPedido, Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }

  removeItem(item: string): void {
    
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    
  }
}

class Pedido extends ItemPedido implements ValorPedido {
  itens: ItemPedido[] = [];
  
  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return total;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.valor * porcentagem;
    this.valor -= descontoEmReais;
  }

  aplicarDescontoEmReais(desconto: number): void {
    
  }

}
