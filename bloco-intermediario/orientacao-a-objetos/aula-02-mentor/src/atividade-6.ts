import {User, Diretor} from './types'

export function mostrarDadosDiretor(diretor1: Diretor) {
  const salario = diretor1.salario ? `R$${diretor1.salario}` : 'N/A'

  console.log(`nome ${diretor1.nome}, idade ${diretor1.idade} ,comissao nivel ${diretor1.comissao}, salario ${salario}`)
}