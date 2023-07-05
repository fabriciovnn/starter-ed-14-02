// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).

// function calcularMedia(n1, n2, n3, letra) {
//   if(letra === 'A') {
//     let media = (n1 + n2 + n3) / 3
//     console.log(`a média aritmética é: ${media}`)
//   } else if(letra === 'P') {
//     let media = ((5 * n1) + (3 * n2) + (2 * n3)) / 10
//     console.log(`a média ponderada é: ${media}`)
//   }
// }

// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

//  function verificarImpar(n) {
//    if(Number.isInteger(n)) {
//      if(n % 2 !== 0) {
//        return true
//      } else {
//        return false
//      }
//    }
//  }

// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

// function verificarPrimo(n) {
//   if(n > 0 && Number.isInteger(n)) {  
//     let divisores = 0
//     for(let i = 1; i <= n; i++ ) {
//       if(n % i == 0) {
//         divisores++;
//       } 
//     }
//     if(divisores === 2) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.
// Ex:
// Entrada: 3672
// Saída: 1:1:12

// function tempoFabrica(segundos) {
//   let hour = parseInt(segundos / 3600)
//   segundos %= 3600
//   let minute = parseInt(segundos / 60 )
//   segundos %= 60
//   let seconds = segundos

//   return `Saída: ${hour}:${minute}:${seconds}`
  
// }

// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.
// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

// function verificarPerfeito(n) {
//   let divisorSoma = 0 
//     for(let i = 1; i < n; i++) {
//       if(n % i === 0) {
//         divisorSoma += i
//       }
//     }
//     if(divisorSoma === n) {
//       return true
//     } 
//     return false
//   }

// 6. Crie uma função chamada acessoAoSite() que não tenha
// parâmetro. Esta função será chamada ao abrir a página e mostrará
// um alerta informando “Bem vindo ao site”.

// acessoAoSite()
// function acessoAoSite() {
//   alert('Bem vindo ao site')
// }

// 7. Crie uma função chamada mostrarMensagem() que não tenha
// parâmetro. Esta função será chamada ao abrir a página e mostrará
// uma mensagem no console.log() informando “Acesso à aplicação
// NomeAplicação” e um alerta informando “Bem vindo à aplicação
// NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
// uma variável para mostrar nas mensagens.

// mostrarMensagem()
// function mostrarMensagem() {
//   const lojaVirtual = 'Loja Virtual'
//   console.log(`Acesso à aplicação ${lojaVirtual} `)
//   alert(`Bem vindo à aplicação ${lojaVirtual}`)
// }

// 8. Crie uma função chamada mostrarDobro(num), que recebe um
// parâmetro sendo um número inteiro. Esta função será chamada ao
// abrir a página e mostrará um alerta com o resultado. Exemplo: “O
// dobro do número 5 é 10.”

// mostrarDobro(5)
// function mostrarDobro(num) {
//   alert(`O dobro do numero ${num} é ${num + num}`)
// }

// 9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
// nome), que recebe 4 parâmetros sendo três inteiros e um texto
// (String). Esta função será chamada ao abrir a página e mostrará um
// alerta com a média. Exemplo: “João, sua média é 70.” A função
// também deve mostrar no console.log() as notas recebidas. Exemplo
// “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

// calcularMedia(60, 70, 80, 'João')
// function calcularMedia(nota1, nota2, nota3, nome) {
//   alert(`${nome} sua média é ${(nota1 + nota2 + nota3) / 3}`)
// }