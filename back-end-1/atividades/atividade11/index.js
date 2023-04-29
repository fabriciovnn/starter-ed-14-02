// 1. Considere o seguinte array:
 const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
 1290.00, 15000.00];

// a. Imprima no console o índice do primeiro salário maior que
// 7.500 utilizando o findIndex
// const salarioMaior = salarios.findIndex((salario) => salario > 7500)
// console.log(`O índice do primeiro salario maior que 7500 é: ${salarioMaior}`)

// b. Crie uma nova lista filtrada com os salários que são maior que
// 8.000 utilizando o filter

// const novaListaSalarios = salarios.filter((salario) => salario > 8000)
// console.log(novaListaSalarios)

// 2. James estava criando uma array com as cores do arco-íris, e ele
// esqueceu algumas cores. As cores padrão de um arco-íris são
// normalmente listadas nesta ordem:
// const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
// "Roxo"];

// mas James tinha isto:
  const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

// Usando somente o método splice insira as cores que faltam na array e
// remova a cor "Preto", seguindo estes passos:
// a. Remova "Preto"
// b. Adicione "Amarelo" e "Verde"
rainbow.splice(2, 1, 'Amarelo', 'Verde')
// c. Adicione "Roxo"
rainbow.splice(5, 1, 'Roxo')

// 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

const cadastroPessoas = []
let condicao = true;
do{
  const pessoa = {}
  pessoa.nome = prompt('digite o nome')
  pessoa.idade = Number(prompt('digite a idade'))
  pessoa.trabalhando = prompt('você está trabalhando? Responda: sim ou nao').toLowerCase()
  if(pessoa.trabalhando === 'sim') {
    pessoa.salario = Number(prompt('qual o seu salário?'))
  }

  cadastroPessoas.push(pessoa)
  condicao = confirm('deseja continuar cadastrando?')
} while(condicao)

const pessoaDesempregada = cadastroPessoas.filter((pessoa) => pessoa.trabalhando === 'nao')
const salarioMaior =  cadastroPessoas.filter((pessoa) => pessoa.salario >= 2500)
const salarioMenor =  cadastroPessoas.filter((pessoa) => pessoa.salario < 2500)

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28
console.log('Pessoas desempregadas:')
for(let pessoa of pessoaDesempregada) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`)
}

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400
console.log('Pessoas empregadas com salários menores que 2500:')
for(let pessoa of salarioMenor) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
}
// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000
console.log('Pessoas empregadas com salários maiores que 2500:')
for(let pessoa of salarioMaior) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
}