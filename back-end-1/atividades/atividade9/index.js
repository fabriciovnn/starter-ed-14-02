/*

1. Crie um objeto em JavaScript para colocar dois atributos de um
produto. Atribua o preço e descrição do produto com o valor “90” e a
descrição com o valor “Mouse”. Mostre no console o valor dos dois
atributos.

*/
// const produto = {
//   preco: 90,
//   descricao: 'mouse',
// }

// console.log(produto.preco, produto.descricao)

/*

2. Crie um objeto em JavaScript para colocar 5 atributos de um
notebook. Atribua os seguintes atributos:
Processador = i7
Memória = 16GB
Preço = 5000
HD = 1TB
SSD = 256GB
Por fim, mostre o nome e valor de cada atributo no console,
exatamente como está na atividade.

*/
// const notebook = {
//   processador: 'i7',
//   memoria: '16GB',
//   preco: 5000,
//   hd: '1TB',
//   ssd: '256GB'
// }

// for(let key in notebook) {
//   console.log(key, notebook[key])
// }

/*


/*

3. Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.

*/
//  let aluno1 = {
//    nome: '',
//    notas: [],
//  }

//  let aluno2 = {
//    nome: '',
//    notas: [],
//  }

//  aluno1.nome = prompt('digite o nome do aluno 1: ')
//  aluno2.nome = prompt('digite o nome do aluno 2: ')

//  for(let i = 1; i <= 2; i++) {
//    aluno1.notas.push(Number(prompt(`Aluno 1 - Digite a nota ${i}`)))
//  }

//  for(let i = 1; i <= 2; i++) {
//    aluno2.notas.push(Number(prompt(`Aluno 2 - Digite a nota ${i}`)))
//  }

//  let somaAluno1 = 0;
//  let somaAluno2 = 0;
//  for(let indice = 0; indice < 2; indice++) {
//    somaAluno1 += aluno1.notas[indice]
//    somaAluno2 += aluno2.notas[indice]
//  }
// console.log('Aluno 1')
//  for(let key in aluno1) {
//   console.log(key, aluno1[key])
// }

// console.log('Aluno 2')
// for(let key in aluno2) {
//   console.log(key, aluno2[key])
// }

//  aluno1.media = somaAluno1 / aluno1.notas.length
//  aluno2.media = somaAluno2 / aluno2.notas.length

//  let mediaTurma = (aluno1.media + aluno2.media) / 2;

//  console.log(`Media aluno 1: ${aluno1.media.toFixed(2)}`)
//  console.log(`Media aluno 2: ${aluno2.media.toFixed(2)}`)
//  console.log(`Media da turma: ${mediaTurma.toFixed(2)}`)


/*

4- Crie um cadastro de pessoas onde o usuário informe o nome,  idade e se está trabalhando ou não, se a pessoa estiver trabalhando
pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000
*/

//   let pessoas = []
//   let desempregadas = []
//   let salarioMaior = []
//   let salarioMenor = []
//   let condicao = true
//   do{
//     let pessoa = {}
//     pessoa.nome = prompt('digite seu nome')
//     pessoa.idade = Number(prompt('digite sua idade'))
//     pessoa.trabalhando = confirm('Esta trabalhando?')
//     if(pessoa.trabalhando) {
//       pessoa.salario = Number(prompt('digite seu salário'))
//     }
//     pessoas.push(pessoa)
  
//     condicao = confirm('deseja continuar cadastrando?')
//   } while(condicao)

//   for(let elemento of pessoas) {
//    if(elemento.trabalhando) {
//      if(elemento.salario >= 2500) {
//        salarioMaior.push(elemento)
//      } else if(elemento.salario < 2500) {
//       salarioMenor.push(elemento)
//      } 
//    } else {
//     desempregadas.push(elemento)
//    }
//   }


// console.log(`Pessoas desempregadas:`)
// for(let pessoa of desempregadas) {
//   console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`)
// }

// console.log(`Pessoas empregadas com salários menores que 2500:`)
// for(let pessoa of salarioMenor) {
//     console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
// }

// console.log('pessoas empregadas com salarios maiores que 2500:')
// for(let pessoa of salarioMaior) {
//   console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
// }
