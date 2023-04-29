// function helloWorld() {
//   console.log('Hello World')
// }

// let name = 'carlos' // esta variável não entra no escopo da função, já que o JS dá prioridade para o parâmetro que tem o mesmo nome
// function salutation(name = 'maria') {
//   console.log(`Hello ${name}`)
// }
// 'maria' é o valor padrão caso nenhum argumento seja passado na hora da execução da função
// salutation('fabricio')

// function sum(n1, n2) {
//   let sum = n1 + n2
//   return sum
// }

// let result = sum(4, 5)

// function calcule(operation, n1, n2) {
//   switch(operation) {
//     case '+':
//       return  n1 + n2
//     case '-':
//       return  n1 - n2
//     case '/':
//     if(n2 === 0) {
//       return  'Não é possível dividir por zero.'
//     } else {
//       return  n1 / n2 
//     }
//     case '*':
//       return  n1 * n2
//     default:
//       console.log('Operador inválido!')
//   }

// }

// let num1 = Number(prompt('Informe o numero 1: '))
// let operator = prompt('Digite um operador')
// let num2 = Number(prompt('Informe o numero 2: '))

// let result = calcule(operator, num1, num2) // aqui está sendo chamada a função

// console.log(`${num1} ${operator} ${num2} = ${result}`)
