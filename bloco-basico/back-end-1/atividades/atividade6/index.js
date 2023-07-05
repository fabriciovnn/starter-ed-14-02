// 1. Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

// const idade = Number(prompt('digite a idade'))
// if(idade >= 18) {
//   document.write('Pode dirigir')
// } else {
//   document.write('Não pode dirigir')
// }

// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

// const idade = Number(prompt('informe sua idade'))
// let habilitado = false;

// if(idade >= 18) {
//   habilitado = confirm('voce tem habilitacao?')
// }

// if(idade < 18 || !habilitado) {
//   document.write('nao pode dirigir')
// } else {
//   document.write('pode dirigir')
// }

// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

// let dia = Number(prompt('digite um numero de 1 a 7'))
// if((dia <= 0) || (dia > 7) || (!Number.isInteger(dia))) {
//   console.log('Dia não conhecido')
// } else {
//   if(dia === 1) {
//     console.log('Domingo')
//   } else if(dia === 2) {
//     console.log('Segunda')
//   } else if(dia === 3) {
//     console.log('Terça')
//   } else if(dia === 4) {
//     console.log('Quarta')
//   } else if(dia === 5) {
//     console.log('Quinta')
//   } else if(dia === 6) {
//     console.log('Sexta')
//   } else if(dia === 7) {
//     console.log('Sábado')
//   }
// }

// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

// let dia = Number(prompt('digite um numero de 1 a 7'))
// switch(dia) {
//   case 1:
//     console.log('domingo')
//   break;
//   case 2:
//     console.log('segunda')
//   break;
//   case 3:
//     console.log('terça')
//   break;
//   case 4:
//     console.log('quarta')
//   break;
//   case 5:
//     console.log('quinta')
//   break;
//   case 6:
//     console.log('sexta')
//   break;
//   case 7:
//     console.log('sábado')
//   break;
//   default:
//     console.log('dia não conhecido')
// }


// 5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
// os números pares.

// for(let n = 1; n <= 10; n++) {
//   if(n % 2 == 0) {
//     console.log(n)
//   }
// }

// 6. Insira no html 30 ( trinta ) números ímpares.

//  let n = 1;
//  for(let i = 1; i <= 30; i++) {
//    if(n % 2 != 0) {
//      document.write(`<p>${n}</p>`)
//      i--
//    }
//    n++
//  }

// 7. Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.

// let i = 10
// let x = 10
//  do {
//   x += i
//   i++
//  } while(i <= 100)
// console.log(x)

// 8. Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".
// const salario = Number(prompt('digite o seu salário'))
// if(salario < 1903.98) {
//   document.write('<p>ISENTO DE IR</p>')
// } else {
//   document.write('<p>TRIBUTADO NO IR</p>')
// }

// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.

//  const valor = Number(prompt('digite um numero'))
//  let divisores = 0
//  for(let i = 1; i <= valor; i++ ) {
//    if(valor % i == 0) {
//      divisores++;
//    } 
//  }
//  if(divisores === 2) {
//    console.log('é primo')
//  } else {
//    console.log('não é primo')
//  }


// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
// forma: 1 para sexo feminino e 2 para sexo masculino) de uma
// pessoa, construa um programa que calcule e mostre seu peso ideal,
// utilizando as seguintes fórmulas:
// - para homens: (72.7 * Altura) – 58
// - para mulheres: (62.1 * Altura) – 44.7

// const altura = Number(prompt('Digite a sua altura'))
// const sexo = Number(prompt('Digite 1 para sexo feminino e 2 para sexo masculino'))
// if(sexo === 1) {
//   console.log(`O peso ideal para mulheres nessa altura é de: ${(62.1 * altura) - 44.7}`)
// } else if(sexo === 2) {
//   console.log(`O peso ideal para homens nessa altura é de: ${(72.7 * altura) - 58}`)
// } else(
//   alert('Valor inválido')
// )

// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

//  const turno = prompt('digite "M" para matutino ou "V" para vespertino ou "N" para noturno').toUpperCase()
//  switch(turno) {
//    case 'M':
//      alert('Bom dia!')
//    break;
//    case 'V':
//      alert('Boa tarde')
//    break;
//    case 'N':
//      alert('Boa noite')
//    break;
//    default:
//      alert('Valor inválido')
//  }

// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).

// const idade = Number(prompt('qual sua idade?'))
// if((idade < 0) || (isNaN(idade)) || (!Number.isInteger(idade))) {
//   alert('Valor inválido, digite a idade apenas em anos')
// } else {
// if((idade >= 18) && (idade <= 67)) {
//   console.log('Pode doar sangue')
// } else {
//   console.log('Não pode doar sangue')
// }
// }

// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

  // const n = Number(prompt('digite um numero'))
  // if((n <= 0) || (!Number.isInteger(n))) {
  //   alert('digite um numero inteiro positivo')
  // } else {
  //  for(let i = 0; i < n; i++) {
  //    if(i % 2 !== 0) {
  //      console.log(i)
  //    }
  //  }
  // }
// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

// const n = Number(prompt('Digite um numero'))
// let soma = 0
// while(soma < 500) {
//   const aux = soma + n * 3
//   if(aux >= 500) {
//     console.log(soma)
//     soma = 501;
//   } else {
//    soma += (n * 3)
//   }
// }

// 15. Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

// const a = Number(prompt('digite o lado A do triangulo'))
// const b = Number(prompt('digite o lado B do triangulo'))
// const c = Number(prompt('digite o lado C do triangulo'))
// if((a < (b + c)) && (b < (a + c)) && (c < (a + b))) {
//   if((a == b) && (b == c)) {
//     console.log('triangulo equilatero')
//   } else if((a !== b) && (b !== c) && (a !== c)) {
//     console.log('triangulo escaleno')
//   } else {
//     console.log('triangulo isósceles')
//   }
// } else {
//   alert('Não é um triangulo')
// }

// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

// const ano = 2023;
// const nascimento = Number(prompt('em que ano voce nasceu?'))
// const votar = ano - nascimento
// if(nascimento < 0 || isNaN(nascimento) || !Number.isInteger(nascimento)) {
//   alert('Data de nascimento inválida')
// } else {
// if(votar >= 18) {
//   console.log('pode votar')
// } else {
//   console.log('não pode votar')
// }
// }

// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

  // const totalVotos = Number(prompt('Digite o total de eleitores nesse município'))
  // const votosValidos = Number(prompt('Digite a quantidade de votos válidos'));
  // const votosNulos = Number(prompt('Digite a quantidade de votos nulos'));
  // const votosBrancos = Number(prompt('Digite a quantidade de votos brancos'));


  // const nulosPorcentagem = (votosNulos * 100) / totalVotos
  // const brancosPorcentagem = (votosBrancos * 100) / totalVotos
  // const validosPorcentagem = (votosValidos * 100) / totalVotos

  // document.write(`<p>O total de eleitores foi de ${totalVotos}</p>`);
  // document.write(`<p>O total de votos válidos foi de ${votosValidos} votos representando ${validosPorcentagem.toFixed(2)}% do total de votos</p>`);
  // document.write(`<p>O total de votos nulos foi de ${votosNulos} votos representando ${nulosPorcentagem.toFixed(2)}% do total de votos</p>`);
  // document.write(`<p>O total de votos brancos foi de ${votosBrancos} votos representando ${brancosPorcentagem.toFixed(2)}% do total de votos</p>`);


// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

//à vista ...................... descondo de 2,5% sobre o preço de tabela;
//De 2 até 5 vezes ........ preço de tabela sem desconto ou acréscimo.
//De 6 até 10 vezes...... juros de 6% sobre o preço de tabela;
//De 11 até 15 vezes ....... juros de 13% sobre o preço de tabela

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

// let total = Number(prompt('digite o total da compra'))

// if(total < 0 || isNaN(total)) {
//   alert('Valor inválido')
// } else {
//   const parcelas = Number(prompt('deseja parcelar em quantas vezes?'))
//  if(parcelas == 1) {
//    total -= total * 2.5 / 100
//    console.log(`O total da compra foi de R$${total.toFixed(2)}`)
//    console.log(`Parcelado em ${parcelas}x de R$${(total / parcelas).toFixed(2)}`)
//  } else if((parcelas >= 2) && (parcelas <= 5)) {
//    console.log(`O total da compra foi de R$${total.toFixed(2)}`)
//    console.log(`Parcelado em ${parcelas}x de R$${(total / parcelas).toFixed(2)}`)
//  } else if((parcelas >= 6) && (parcelas <= 10)) {
//      total += total * 6 / 100
//      console.log(`O total da compra foi de R$${total.toFixed(2)}`)
//      console.log(`Parcelado em ${parcelas}x de R$${(total / parcelas).toFixed(2)}`)
//  } else if((parcelas >= 11) && (parcelas <= 15)) {
//      total += total * 13 / 100
//      console.log(`O total da compra foi de R$${total.toFixed(2)}`)
//      console.log(`Parcelado em ${parcelas}x de R$${(total / parcelas).toFixed(2)}`)
//  } else {
//      alert('Parcelamos apenas de 1 até 15 vezes')
//  }
// }