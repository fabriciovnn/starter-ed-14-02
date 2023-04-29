// const mes = Number(prompt('Digite um numero correspondente ao mês de um ano'));

// switch(mes) {
//   case 1:
//     console.log('Janeiro')
//   break;
//   case 2:
//     console.log('Fevereiro');
//   break;
//   case 3:
//     console.log('Março');
//   break;
//   case 4:
//     console.log('Abril')
//   break;
//   case 5:
//     console.log('Maio')
//   break;
//   case 6:
//     console.log('Junho')
//   break;
//   case 7:
//     console.log('Julho')
//   break;
//   case 8:
//     console.log('Agosto')
//   break;
//   case 9:
//     console.log('Setembro')
//   break;
//   case 10:
//     console.log('Outubro')
//   break;
//   case 11:
//     console.log('Novembro')
//   break;
//   case 12:
//     console.log('Dezembro')
//   break;
//   default:
//     console.log('Numero Invalido')
// }

// 1 - REPETICOES POR QUANTIDADE DE VEZES DEFINIDAS


// FOR
// sintaxe
// 1 - declaracao da variavel que ficará controlando as repeticoes
// 2 - teste logico para saber se continua repetindo ( se for true, vai pra parte do bloco e executa o codigo, depois vai pro incremento)
// 3 INCREMENTO ( é a ultima coisa a ser executado dentro do for)
// for(let i = 1; i <= 10; i++) {
//   console.log('oi');
// }


// Letícia Leal:
// Faça um algoritmo que pergunte ao usuário um número inteiro e positivo 
// qualquer e mostre uma contagem até esse valor:

// Exemplo:
// Input: 35
// Output: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

// let x = Number(prompt('Digite um numero inteiro e positivo'));
// if(x <= 0) {
//   alert('Numero invalido')
// } else {
//   for(let y = 0; y <= x; y++) {
//     if(y % 2 !== 0) {
//     console.log(y);
//     }
//   }
// }






// 2 - REPETICOES POR QUANTIDADE DE VEZES INDEFINIDAS

// WHILE


// let condicao = confirm('Esta pronto para cadastrar os nomes?');

// while(condicao) {
//   let nome = prompt('Digite um nome para cadastro')
//   alert(`O nome digitado foi ${nome}`);

//   condicao = confirm('gostaria de digitar um novo nome?');
// }
//   let condicao = false



// DO WHILE
// do {
//   let nome = prompt("digite um nome para cadastro")
//   alert(`O nome digitado foi ${nome}`);

//   condicao = confirm('Gostaria de digitar um novo nome?')
// } while(condicao)

// let valor = Number(prompt('Digite um numero'));

// do {
//   alert(valor)
//   valor --
// } while(valor >= 1)


// Faça um programa que leia a idade de 
// várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou 
// não continuar a digitar dados. No final, quando o usuário decidir parar, mostre 
// na tela:

// a) Quantas idades foram digitadas
// b) Qual é a média entre as idades digitadas
// c) Quantas pessoas têm 21 anos ou mais.



  // let contador = 0;
  // let condicao = false;
  // let condicao21 = 0;
  // let soma = 0;

  // do {
  //    let idade = Number(prompt('Digite a idade de uma pessoa'));
  //    contador++
  //    soma += idade
  //    if(idade >= 21) {
  //        condicao21++
  //       }
  //      condicao = confirm('Deseja inserir outra idade?')
  // } while(condicao)

  // console.log(`Foram digitadas ${contador} idades`);
  // console.log(`A média das idades é de ${soma / contador}`)
  // console.log(`As pessoas que tem 21 anos ou mais sao ${condicao21}`)

