// let listaCompras = [];
// let continuar = false;
// do{
//   const produto = prompt('Informe um produto a ser adicionado na sua lista de compras')
//   listaCompras.push(produto)
//   continuar = confirm('Deseja continuar cadastrando produtos na sua lista?')
// } while(continuar);

// // console.log(listaCompras);

// // let itemexcluido = listaCompras.pop();
// // console.log(itemexcluido);

// // let item2excluido = listaCompras.shift();
// // console.log(item2excluido);

// // console.log(listaCompras);


// for(let i = 0; i < listaCompras.length; i++) {
//   console.log(listaCompras[i])
// }

// //for of
// for(let item in listaCompras) {
//   console.log(item);
// }

// 7 - Escreva um algoritmo para buscar apenas os numeros positivos da lista
// FOR
  let listas = [-31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4]
//  let listaPositivos = []

// for(let i = 0; i < listas.length; i++) {
//   if(listas[i] > 0) {
//     // console.log(listas[i])
//     listaPositivos.push(listas[i])
//   }
// }

// console.log(listaPositivos)

//FOR OF
// for(let numero of listas) {
//   if(numero > 0) {
//     listaPositivos.push(numero)
//   }
// } 

// 8 - escreva um algoritmo para buscar apenas os numeros impares de lista
 let listaImpares = [];
// for(let i = 0; i < listas.length; i++) {
//   if((listas[i] % 2 === 1) || (listas[i] % 2 === -1)) {
//     listaImpares.unshift(listas[i])
//   }
// }

// console.log(listaImpares)

// for(let numero of listas) {
//   if((numero % 2 === 1) || (numero % 2 === -1)) {
//     listaImpares.unshift(numero)
//   }
// }

// console.log(listaImpares)

// 9 - Escreva um algoritmo para calcular e encontrar a soma de todos os numeros da lista
//  let soma = 0
// for(let i = 0; i < listas.length; i++) {
//   soma += listas[i]
// }
// console.log(soma)

// for(let numero of listas) {
//   soma += numero
// }
// console.log(soma)

// 10 - Escreva um algoritmo para buscar apenas os numeros repetidos da lista

// 11 - Escreva um algoritmo para calcular e encontrar a média de todos os numeros positivos da lista
// console.log(soma / listas.length)

//12 - Escreva um algoritmo para encontrar o maior numero da lista