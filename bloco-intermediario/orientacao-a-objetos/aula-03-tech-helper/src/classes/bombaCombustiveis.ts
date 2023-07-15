/*
Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro

iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.
*/

export class BombaCombustivel {
  tipoCombustivel: string
  valorLitro: number
  quantidadeCombustivel: number

  constructor(tipo: string, vLitro: number, qtd: number ) {
    this.tipoCombustivel = tipo
    this.valorLitro = vLitro
    this.quantidadeCombustivel = qtd
  }

  abastecerPorValor(money: number): void {

    if(money < this.valorLitro) {
      console.log('o valor não é suficiente')
    } else {
      const abastecido = money / this.valorLitro
      
      if(abastecido>this.quantidadeCombustivel) {
        console.log('não há gasolina suficiente')
      } else {
        this.quantidadeCombustivel -= abastecido
        console.log(`Você abasteceu ${abastecido.toFixed(3)} litros`)
      }
    }

  }
  abastecerPorLitro(litros: number): void {
    if(litros < this.quantidadeCombustivel) {
      console.log('não há gasolina suficiente')
      return
    } 

      const valorAPagar = litros * this.valorLitro
      this.quantidadeCombustivel -= litros
      console.log(`o valor a ser pago é de R$${valorAPagar.toFixed(2)}`)
  }
  alterarValor(valor: number): void {
    this.valorLitro = Number(valor.toFixed(3))
    console.log(`o valor do litro foi alterado para ${this.valorLitro}.`)
  }
  alterarCombustivel(tipoCombustivel: string): void {
    this.tipoCombustivel = tipoCombustivel
    console.log(`o valor do litro foi alterado para ${this.tipoCombustivel}.`)
  }
  alterarQuantidadeCombustivel(quantidade: number): void {
   if(this.quantidadeCombustivel > quantidade) {
    console.log('não é possivel inserir um valor menor que o valor atual')
    return
   }
    
    this.quantidadeCombustivel = quantidade
    console.log(`a nova quantidade de combustivel é ${this.quantidadeCombustivel.toFixed(2)}`)
  }

}