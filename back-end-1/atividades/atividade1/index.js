// 1. Crie uma variável JavaScript e coloque nela o valor de sua idade.
// Mostre no html usando o document.write() o dado contido na
// variável junto da frase "Minha idade é x anos", sendo "x" o valor
// armazenado na sua variável.
// R:
// const idade = 27;
// document.write(`<p>Minha idade é ${idade} anos</p>`);


// 2. Crie três variáveis JavaScript, em duas delas atribua os valores que você quiser e na outra atribua o valor da soma das duas primeiras variáveis. Apresente valor da soma no documento html junto da frase "A resultado da soma de x e y é z", sendo x o valor armazenado na primeira variável, y o valor armazenado segunda variável e z o valor armazenado na terceira variável
// R:
// const x = 5;
// const y = 10;
// const z = x + y;
// document.write(`O resultado da soma de ${x} e ${y} é ${z}`);


//3. Crie três variáveis, na primeira variável coloque o total de uma
// compra, por exemplo 149.90. Na segunda variável coloque a
// quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// o valor da parcela. Apresente no documento html as seguintes
// informações:
// "O valor total da compra foi R$_,_"
// "Forma de pagamento: _x de R$_,_"
// R:
// const totalCompra = 200;
// const parcelas = 4;
// const valorParcela = totalCompra / parcelas;
// document.write(`<p>O valor total da compra foi R$${totalCompra}</p> <p>Forma de pagamento: ${parcelas}x de R$${totalCompra}</p>`);


// 4. Crie duas variáveis. Na primeira coloque um total de minutos e
// defina um valor para ela (por exemplo, minutos = 120). Na segunda
// coloque o total em segundos destes minutos armazenados na
// primeira variável. Apresente no documento html a seguinte
// informação: "_ minutos equivale à _ segundos!" 
// R:
// const minutos = 120;
// const totalSegundos = minutos * 60;
// document.write(`informação: ${minutos} minutos equivale à ${totalSegundos} segundos!`);


// 5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
// segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
// Calcule a média das notas e armazene na quinta variável criada.
// Apresente no documento html a seguinte informação:
// "O aluno _____ ficou com média _,_"
// R:
//  const aluno = 'fabricio';
//  const nota1 = 5.2;
//  const nota2 = 7.5;
//  const nota3 = 9;
//  const media = (nota1 + nota2 + nota3) / 3;
//  document.write(`O aluno ${aluno} ficou com média ${media.toFixed(2)}`);


// 6. Desenvolva um algoritmo que armazene o valor 10 em uma variável
// A e o valor 20 em uma variável B. A seguir (utilizando apenas
// atribuições entre variáveis) troque os seus conteúdos fazendo com
// que o valor que está em A passe para B e vice-versa. Ao final,
// escrever os valores que ficaram armazenados nas variáveis.
// R:
// let a = 10;
// let b = 20;
// let aux = a;
// a = b;
// b = aux;
// document.write(`A variavel A contem: ${a} e a B: ${b}`);


// 7. Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.
//R:
//  const totalVotos = Number(prompt('Digite o total de eleitores nesse município'))
//  const votosValidos = Number(prompt('Digite a quantidade de votos válidos'));
//  const votosNulos = Number(prompt('Digite a quantidade de votos nulos'));
//  const votosBrancos = Number(prompt('Digite a quantidade de votos brancos'));


//  const nulosPorcentagem = (votosNulos * 100) / totalVotos
//  const brancosPorcentagem = (votosBrancos * 100) / totalVotos
//  const validosPorcentagem = (votosValidos * 100) / totalVotos

//  document.write(`<p>O total de eleitores foi de ${totalVotos}</p>`);
//  document.write(`<p>O total de votos válidos foi de ${votosValidos} votos representando ${validosPorcentagem.toFixed(2)}% do total de votos</p>`);
//  document.write(`<p>O total de votos nulos foi de ${votosNulos} votos representando ${nulosPorcentagem.toFixed(2)}% do total de votos</p>`);
//  document.write(`<p>O total de votos brancos foi de ${votosBrancos} votos representando ${brancosPorcentagem.toFixed(2)}% do total de votos</p>`);


// 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.
//R:
// const valor1 = Number(prompt("digite o primeiro valor"));
// const valor2 = Number(prompt("digite o segundo valor"));

// if(valor1 === valor2) {
//   alert('numeros iguais');
// } else if(valor1 > valor2) {
//   alert('primeiro é maior');
// } else {
//   alert('segundo é maior');
// }



// 9. As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
//R:
// const macasCompradas = Number(prompt("Digite quantas maçãs quer comprar"));
// let totalCompra = 0; 
// if(macasCompradas < 12) {
//   totalCompra = macasCompradas * 0.30
//   document.write(`As maçãs vão custar ${totalCompra}`);
// } else {
//   totalCompra = macasCompradas * 0.25
//   document.write(`As maçãs vão custar ${totalCompra}`);
// }


// 10. Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome, a idade e o ano
// de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
// em 2000”.
// OBS: Pegue o ano atual como base
//R:
// const nome = prompt("Digite seu nome");
// const idade = prompt("Digite sua idade");
// console.log(`Nome: ${nome}, Idade: ${idade} anos, nasceu em ${2023 - idade}`);


// 11. Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;
//R:
// const numero = Number(prompt("Digite um numero inteiro positivo"));

// if(numero % 2 === 0) {
//   document.write('par')
// } else {
//   document.write('impar')
// }

// 12. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).
//R:
// const anoAtual = 2023;
// const idadeUsuario = prompt("Digite o ano em que você nasceu. Ex: 1995, 2000 ...");
// if(anoAtual - idadeUsuario >= 18) {
//   console.log("Pode votar!");
// } else {
//   console.log('Não pode votar!');
// }

console.log('oi')