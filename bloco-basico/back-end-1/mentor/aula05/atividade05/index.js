// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade do grupo
    // let alunos = 0
    // let totalIdade = 0
    // let i = true
    // do {
    // let idade = Number(prompt('digite a idade'))
    // totalIdade += idade
    // alunos++
    // if(totalIdade >= 999) {
    //  i = false
    // }
    // } while(i)

    // console.log(`Existem ${alunos} alunos e a média da turma é ${totalIdade / alunos}`)


// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

//  let salarioM = 0
//  let salarioF = 0
//  let condicao = true
//  while(condicao) {
//    const salario = Number(prompt('Digite o salário do funcionário'))
//    const sexo = prompt('Digite se o sexo é feminino ou masculino').toLowerCase()
//    if(sexo === 'masculino') {
//      salarioM += salario
//    } else if(sexo === "feminino"){
//      salarioF += salario
//    } else {
//      alert('Digite masculino ou feminino por favor')
//    }
//    condicao = confirm('Deseja continuar?')
//  }

//  console.log(`O total de salários pagos aos homens é de ${salarioM}`)
//  console.log(`O total de salários pagos as mulheres é de ${salarioF}`)

// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

  // const v = Number(prompt('Digite o primeiro Valor'))
  // const u = Number(prompt('Digite o ultimo Valor'))
  // const i = Number(prompt('Digite o incremento'))

  // for(let x = v; x <= u; x += i) {
  //   console.log(x)
  // }
  // console.log('Acabou!')

// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto
// const nome = prompt('qual seu nome?').toUpperCase()
// const sexo = prompt('você é do sexo masculino ou feminino?').toLowerCase()
// let compras = Number(prompt('Qual o valor das compras?'));
// if(sexo === 'masculino') {
//   compras -= compras * 5 / 100
//   console.log(`Cliente ${nome}, o valor total com 5% de desconto ficou em R$${compras}`)
// } else if(sexo === 'feminino') {
//   compras -= compras * 13 / 100
//   console.log(`Cliente ${nome}, o valor total com 13% de desconto ficou em R$${compras}`)
// } else {
//   alert('Informação inválida, por favor tente novamente')
// }

// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.
// const km = Number(prompt('Que distancia em KM quer percorrer?'))
// let passagem = 0;
// if(km <= 200) {
//   passagem = km * 0.5
//   console.log(`O preço total da viagem ficou em R$${passagem}`)
// } else {
//   passagem = km * 0.45
//   console.log(`O preço total da viagem ficou em R$${passagem}`)
// }

// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP
// const largura = Number(prompt('Qual a largura do terreno?'))
// const comprimento = Number(prompt('Qual o comprimento do terreno?'))
// const area = largura * comprimento
// if((area >= 0) && (area < 100)) {
//   console.log('Terreno Popular')
// } else if( (area >= 100) && (area <= 500)) {
//   console.log('Terreno master')
// } else if(area > 500) {
//   console.log('terreno vip')
// } else (
//   alert('Valor inválido')
// )
