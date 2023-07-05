// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;


//  let maiorAltura = 0;
//  let menorAltura = 0;

//  for(let i = 1; i <= 15; i++) {
//    let altura = Number(prompt(`Digite a altura de uma pessoa. nº${i}`))
//  console.log(altura)
//    if(i == 1) {
//      menorAltura = altura
//    }

//    if(altura > maiorAltura) {
//      maiorAltura = altura
//    }

//    if(altura < menorAltura) {
//      menorAltura = altura
//    }
//  }
//  console.log(`A maior altura foi de ${maiorAltura}`)
//  console.log(`A menor altura foi de ${menorAltura}`)


// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

// let pedro = 1.50
// let lucas = 1.10
// let contador = 0
// while(pedro >= lucas) {
//   pedro += 0.02
//   lucas += 0.03
//   contador++
// }

// console.log(`Sao necessarios ${contador} anos para lucas ser da mesma altura que pedro`)
// console.log(`Sao necessarios ${++contador} anos para lucas ser maior que pedro`)

// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...

  // let n = Number(prompt('digite o número que quer multiplicar'))
  // let i = Number(prompt('digite a quantidade de iterações'))
  // let contador = 1
  // let resultado = 0

  // while(contador <= i) {
  //   resultado = n * contador
  //   console.log(`${n} * ${contador} = ${resultado}`)
  //   contador++
  // }


// 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

// for(let n = 1;n <= 250; n++ ) {
// if (Number.isInteger(n / 3)) {
//   console.log(`Multiplo de 3: ${n}`)
// }

// if (Number.isInteger(n / 5)) {
//   console.log(`Multiplo de 5: ${n}`)
// }
// }

// 5. Faça um programa usando a estrutura “for” que leia um número
// inteiro positivo e mostre na tela uma contagem de 0 até o valor
// digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
//  const x = Number(prompt('Digite um numero inteiro positivo'));
//  if(x < 0 || !Number.isInteger(x) || isNaN(x)) {
//    alert('Digite um numero inteiro e positivo por favor')
//  } else {
//    for(let n = 0; n <= x; n++) {
//      console.log(n)
//    }
//    console.log('FIM!')
//  }


// 6. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

//  for(let i = 30; i >= 1; i--) {
//    let numeroPrimo = true
//    if(i === 1) {
//       console.log(i);
//       continue 
//     }
//    for(let n = 2; n <= i; n++) {
//      if((i !== n) && (i % n === 0)) {
//       numeroPrimo = false
//       break;
//      }
//    }
//    if(numeroPrimo) {
//      console.log(`[${i}]`)
//    } else {
//      console.log(`${i}`)
//    }
//  }

// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.
// let total = 0
// let positivos = 0
// let negativos = 0
// let aux = 0

// for(let i = 1; i <= 10; i++) {
//   const n = Number(prompt('digite um numero'))
//   total += n
//   aux++
//   if(n > 0) {
//     positivos++
//   } else {
//     negativos++
//   }
// }
// console.log(`a média aritmética dos valores totais é de: ${total / aux}`)
// console.log(`A quantidade de valores positivos é de: ${positivos}`)
// console.log(`A quantidade de valores negativos é de: ${negativos}`)
// console.log(`O percentual é de: ${negativos * 100 / aux}% negativos e ${positivos * 100 / aux}% positivos`)