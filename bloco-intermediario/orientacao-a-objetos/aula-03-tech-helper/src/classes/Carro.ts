//6. Implemente uma classe chamada Carro com as seguintes
//propriedades:

//a. Um veículo tem um certo consumo de combustível (medidos
//   em km / litro) e uma certa quantidade de combustível no
//   tanque.

//b. O consumo é especificado no construtor e o nível de
//   combustível inicial é 0.

//c. Forneça um método andar() que simula o ato de dirigir o
//   veículo por uma certa distância, reduzindo o nível de
//   combustível no tanque de gasolina.

//d. Forneça um método obterGasolina(), que retorna o nível atual
//   de combustível e forneça um método adicionarGasolina(),
//   para abastecer o tanque.

export class Carro {
  consumo: number;
  tanqueCombustivel: number;
  capacidadeTanque: number

  constructor(consumo: number, capacidade: number) {
    this.consumo = consumo
    this.tanqueCombustivel = 20
    this.capacidadeTanque = capacidade
  }

  andar(km: number): void {
    const gasolinaNecessaria = km / this.consumo
    if(gasolinaNecessaria > this.tanqueCombustivel) {
      console.log('Não possui gasolina o suficiente para esta viagem')
      return
    }

    this.tanqueCombustivel -= gasolinaNecessaria
    console.log(`Andou ${km}km's e consumiu ${gasolinaNecessaria.toFixed(2)} litros de gasolina.`)
  }

  obterGasolina(): void {
    console.log(`O nivel de combustivel atual é de: ${this.tanqueCombustivel.toFixed(2)} litros`)
  }

  adicionarGasolina(quantidade: number): void {
    const verificarGasolina = quantidade + this.tanqueCombustivel
    if(verificarGasolina > this.capacidadeTanque) {
      console.log('Capacidade excedida')
      return
    }

    this.tanqueCombustivel += quantidade
    console.log(`Foram abastecidos ${quantidade} litros, capacidade atual: ${this.tanqueCombustivel.toFixed(2)}litros`)
  }
}