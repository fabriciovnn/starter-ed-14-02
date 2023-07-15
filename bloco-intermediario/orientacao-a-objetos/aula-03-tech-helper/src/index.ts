import { Contador } from './classes/Contador'
import { Bola } from './classes/Bola'
import { ContaCorrente } from './classes/ContaCorrente'
import { Calculadora } from './classes/Calculadora'
import { BombaCombustivel } from './classes/bombaCombustiveis'
import { Carro } from './classes/Carro'


//atividade 1
console.log('ATIVIDADE 1')
const contador = new Contador(6)

contador.retornarValor()
contador.incrementar()
contador.zerar()

//atividade 2
console.log('ATIVIDADE 2')
const bola = new Bola('azul', 20, 'plastico')

console.log(bola)
bola.trocarCor('verde')
bola.mostrarCor()

//atividade 3
console.log('ATIVIDADE 3')
const pessoa1 = new ContaCorrente('875-10', 'fabricio')

const pessoa2 = new ContaCorrente('123-456','pedro', 1000)
console.log(pessoa2)

console.log(pessoa1)
pessoa1.alterarNome('joao')
console.log(pessoa1)
pessoa1.realizarDeposito(100)
pessoa1.realizarSaque(50)
pessoa1.realizarSaque(100)

//atividade 4
const calculadora = new Calculadora()

calculadora.somar(1, 1)
calculadora.diminuir(2, 1)
calculadora.dividir(4, 4)
calculadora.multiplicar(3, 4)
calculadora.visualizarHistorico()

//atividade 5
console.log('ATIVIDADE 5')
const bomba1 = new BombaCombustivel('Etanol', 6, 20)

bomba1.abastecerPorLitro(4) // 1.17 litros
bomba1.abastecerPorValor(7) // 4 litros
bomba1.alterarCombustivel('alcool')
bomba1.alterarQuantidadeCombustivel(14.84)
bomba1.alterarValor(10)

console.log(bomba1)

//atividade 6
const fusca = new Carro(15, 40)
console.log(fusca)
fusca.andar(1000)
fusca.obterGasolina()
fusca.adicionarGasolina(5)
fusca.adicionarGasolina(22)
