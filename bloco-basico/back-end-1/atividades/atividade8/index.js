// 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
// inteiros já preenchido e imprima todos os valores pares.
//  let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//  for(let elemento of elementos) {
//    if( elemento % 2 === 0) {
//      console.log(elemento)
//    }
//  }
// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
// inteiros e no final mostre a soma de todos os elementos.
//  let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//  let soma = 0

//  for( let i = 0; i < elementos.length; i++) {
//    soma += elementos[i]
//  }

//  console.log(soma);

// 3. Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.
//  let perfectNumber = []
//  let number = 2
//  let divisorSum = 0

//  while(perfectNumber.length < 4) {
//    for(let i = 1; i < number; i++) {
//      if(number % i === 0) {
//        divisorSum += i
//      }
//    }
//    if(divisorSum === number) {
//      perfectNumber.push(number)
//    }
//    divisorSum = 0
//    number++
//  }
//  console.log(perfectNumber)

// 4. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
  // retorne a união dos dois em um novo vetor.
//   const vetor1 = []
//   const vetor2 = []
//   const vetorX = []
//   for(let x = 0; x < 10; x++) {
//     vetor1.push(prompt('digite um valor inteiro'))
//   }
//   for(let x = 0; x < 10; x++) {
//    vetor2.push(prompt('digite um valor inteiro'))
//  }

//   for(let elemento of vetor1) {
//     vetorX.push(elemento)
//   }

//   for(let elemento of vetor2) {
//     vetorX.push(elemento)
//   }

//   console.log(vetorX)

// 5. Crie uma função que recebe um vetor de inteiros e um número
// inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
// se não faz parte.
// let inteiros = []
// let condicao = true
// while(condicao) {
//   inteiros.push(prompt('digite um valor inteiro'))
//   condicao = confirm('deseja adicionar mais um valor?')
// }

// let numInteiro = prompt('digite um num para verificar o vetor')
// let fazParte = false
// for(let x = 0; x <= inteiros.length; x++) {
//   if(numInteiro === inteiros[x]) {
//     fazParte = true
//   }
// }
//   if(fazParte) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }

// 6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.
  //  let nomes = []
  //  const nomesReverso = []
  //  for(let x = 0; x < 5; x++) {
  //    nomes.push(prompt('digite 5 nomes'));
  //  }
  //  console.log(nomes)
   
  //  for(let nome of nomes) {
  //    nomesReverso.unshift(nome)
  //   }    
  //   console.log(nomesReverso)

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson
