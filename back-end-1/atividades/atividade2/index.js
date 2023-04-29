// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
// calcular e escrever o valor correspondente em graus Fahrenheit.
// const celsius = Number(prompt('Digite a temperatura em graus celsius'));
// const fahrenheit = celsius * 1.8 + 32;
// document.write(`<p>${fahrenheit} graus fahrenheit </p>`);


// 2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.
// const numero = Number(prompt('Digite um número de 1 a 7'))
// switch(numero) {
//   case 1:
//     document.write('<p>Segunda feira</p>');
//     break;
//   case 2:
//     document.write('<p>Terça feira</p>');
//     break;
//   case 3:
//     document.write('<p>Quarta feira</p>');
//     break;
//   case 4:
//     document.write('<p>Quinta feira</p>');
//     break;
//   case 5:
//     document.write('<p>Sexta feira</p>');
//     break;
//   case 6:
//     document.write('<p>Sábado</p>');
//     break;
//   case 7:
//     document.write('<p>Domingo</p>');
//     break;  
//   default:
//     alert('Digite um número entre 1 e 7 por favor');
// }


// 3. Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.
// const numero = Number(prompt('Digite um número'))

// if(numero > 0) {
//   document.write('É positivo');
// } else if(numero < 0) {
//   document.write('É negativo');
// } else {
//   document.write('É zero');
// }

// 4. O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.
// const custoFabrica = Number(prompt('Digite o custo de fabrica'));
// const percentual = (28 * custoFabrica) / 100 //280
// const impostos = (45 * custoFabrica) / 100 // 450
// const total = custoFabrica + percentual + impostos
// document.write(`O custo final do carro é de R$${total}`);


// 5. Desenvolva um algoritmo que faça o cálculo do índice de massa
// corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// que digite sua altura, em seguida solicitar que digite seu peso e que
// lhe exiba o status. O status vai variar da seguinte forma:
// a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// “Você está abaixo da faixa de peso ideal”;
// b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// “Você está acima da faixa de peso ideal”;

// c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// 24,99, o status a ser mostrado será “Você está dentro da faixa
// de peso ideal”.
// const altura = Number(prompt('Digite sua altura em metros'));
// const peso = Number(prompt('Digite seu peso'));
// const imc = peso / altura**2;

// if(imc < 18.5) {
//   document.write('Você está abaixo da faixa de peso ideal')
// } else if(imc > 24.99) {
//   document.write('Você está acima da faixa de peso ideal');
// } else {
//   document.write('Você está dentro da faixa de peso ideal');
// }

// 6. Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.
// const a = Number(prompt('Digite o primeiro numero'))
// const operador = prompt('Digite a operação matemática');
// const b = Number(prompt('Digite o segundo numero'))
//   switch(operador) {
//     case '+':
//      let adicao = a + b;
//       document.write(`${adicao}`);
//     break;
//     case '-':
//      let subtracao = a - b;
//       document.write(`${subtracao}`);
//     break;
//     case '/':
//      let divisao = a / b;
//       document.write(`${divisao}`);
//     break;
//     case '*':
//      let multiplicacao = a * b;
//       document.write(`${multiplicacao}`);
//     break;
//     case '%':
//       let modulo = a % b;
//       document.write(`${modulo}`);
//     break;
//       case '**':
//         let expoente = a**b;
//         document.write(`${expoente}`)
//       break;
//     default:
//       document.write('insira um operador aritmetico válido por favor')
//   }

// 7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.
// const contaUsuario = 1000;
// const taxa = 4.5
// const retirar = Number(prompt('Digite quanto deseja retirar em valores multiplos de 5'));
// const saldoFinal = contaUsuario - retirar - taxa

// if(saldoFinal <= 0) {
//   document.write('Saldo Insuficiente');
// } else if(retirar % 5 !== 0) {
//   document.write('Insira um valor multiplo de 5 por favor')
// } else if(retirar < 0) {
//   document.write('insira um valor positivo');
// } else {
//    document.write(`Deu tudo certo! Saldo restante é de R$${saldoFinal}`)
// }


// 8. Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

// const idade = Number(prompt('Digite sua idade'))
// const peso = Number(prompt('Digite seu peso'))

// if(idade <= 12) {
//   document.write('<p>Infantil</p>')
// } else if(idade >= 13 && idade <= 16) {
//   if(peso <= 40) {
//     document.write ('<p>Juvenil leve</p>')
//   } else {
//     document.write('<p>Juvenil pesado</p>')
//   }
// } else if(idade >= 17 && idade <= 24) {
//   if(peso <= 45) {
//     document.write('<p>Sênior leve</p>')
//   } else if(peso <= 60){
//     document.write('<p>Sênior médio</p>')
//   } else {
//     document.write('<p>Sênior pesado</p>')
//   }
// } else {
//   document.write('<p>Sênior Veterano</p>')
// }

// 9. Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

// const velocidade = Number(prompt('Qual a velocidade do carro?'))
// const multa = (velocidade - 80) * 5
// if(velocidade > 80) {
//   document.write(`Você foi multado em R$${multa.toFixed(2)}, por andar à ${velocidade - 80}km/h acima do limite estabelecido`)
// }