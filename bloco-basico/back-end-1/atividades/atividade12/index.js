// Crie um arquivo com o script necessário para resolução do exercício
// considerando o seguinte array:
 const data = [
 {
 nome: 'Roger Medeiros',
 sexo: 'M',
 salario: 3250,
 },
 {
 nome: 'Carolina Silva',
 sexo: 'F',
 salario: 1200,
 },
 {
 nome: 'Cristina Avila',
 sexo: 'F',
 salario: 8100,
 },
 {
 nome: 'Gustavo Hoffman',
 sexo: 'M',
 salario: 5200.35,
 },
 {
 nome: 'Eva Trindade',
 sexo: 'F',
 salario: 2501,
 },
 {
 nome: 'Andre Mathias',
 sexo: 'M',
 salario: 1750,
 },
 {
 nome: 'Joice Castro da Silva',

 sexo: 'F',
 salario: 3350.25,
 },
 ];

// 1. Imprima no console a quantidade de pessoas Total.
console.log(`A quantidade de pessoas total é: ${data.length}`)
// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.
const sexoF = data.filter((pessoa) => pessoa.sexo === 'F')
console.log(`A quantidade de pessoas do sexo feminino é: ${sexoF.length}`)
// 3. Imprima no console a soma do salário de todas as pessoas.
let soma = 0
data.forEach((pessoa) => {
  soma += pessoa.salario
})
console.log(`A soma do salário de todas as pessoas é: R$${(soma).toFixed(2)}`)
// 4. Imprima no console a média do salário de todas as pessoas.
console.log(`A média do salário de todas as pessoas é: R$${(soma / data.length).toFixed(2)}`)
// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino
let somaM = 0
const sexoM = data.filter((pessoa) => pessoa.sexo === 'M')
sexoM.forEach((pessoa) => {
  somaM += pessoa.salario
})
console.log(`A soma do salário de todas as pessoas do sexo masculino é: R$${(somaM).toFixed(2)}`)
// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino
console.log(`A média do salário de todas as pessoas do sexo masculino é: R$${(somaM / sexoM.length).toFixed(2)}`)

// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.

const salarioSuperior = data.some((valor) => valor.salario > 7000)
console.log(salarioSuperior)
// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
const indexEncontrado = data.findIndex((pessoa) => pessoa.nome === 'Eva Trindade')
console.log(`A pessoa ${data[indexEncontrado].nome} está no índice: ${indexEncontrado}`)
// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
const sobrenomeSilva = data.filter((pessoa) => pessoa.nome.endsWith('Silva') )
console.log(sobrenomeSilva)
// 10. Imprima os nomes utilizando o MAP
 data.map((pessoa) => console.log(pessoa.nome))