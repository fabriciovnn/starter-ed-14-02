//Crie um tipo que seja composto por um User OU por um Diretor
//usando união de tipos. Desenvolva uma função que receba
//uma lista desse novo tipo e, para cada item da lista, imprima:
//a. O mesmo que o exercício 5, em caso de objeto User.
//b. O mesmo que o exercício 6, em caso de objeto Diretor.
import {Funcionario, User, Diretor} from './types'

export function listar(funcionarios: Funcionario[]) {
  funcionarios.forEach((funcionario) => {
    const salario = funcionario.salario ? `R$${funcionario.salario}` : 'N/A'
    if('comissao' in funcionario) {

      console.log(`nome ${funcionario.nome}, idade ${funcionario.idade} ,comissao nivel ${funcionario.comissao}, salario ${salario}`)
      return
    }

    console.log(`nome ${funcionario.nome}, idade ${funcionario.idade},ocupacao ${funcionario.ocupacao} ,salario ${salario}`)
  })
}

