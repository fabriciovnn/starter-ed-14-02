//Crie um programa para mostrar informações de usuários (User) de
//uma empresa. Crie o tipo User com as seguintes propriedades:
//nome, idade, ocupação e salário (opcional). Caso o salário do
//usuário não seja informado, mostre o valor “N/A”. Exemplo:
//a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
//b. “Daphne, 23 anos, analista de TI, salário N/A”
import {User} from './types'

export function mostrarDados(user: User) {
  let salario = 'N/A'

  if(user.salario) {
    salario += `R$ ${user.salario}`
  }
  console.log(user)
}

