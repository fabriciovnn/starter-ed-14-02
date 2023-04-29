// funções anonimas
// function nome() {

// }

// nome()


//  function escreverOla(funcao) {
//   const nome = funcao()
//   console.log(`Olá ${nome}`)
//  }


 //sintaxe mais antiga
//  escreverOla(function() {
//   let nome = 'André'
//   return nome
//  })

// arrow function
// escreverOla( () => {
//   let nome = 'Maria'
//   return nome
// })

// escreverOla( () => 'Joana')


// setTimeout( () => {
//   console.log('executou depois de segundos')
// }, [5000])


// setInterval(() => {
//   console.log('oi com intervalo')
// }, [10000])

// metodos arrays

let listaFrutas = ['maca', 'melao', 'uva']


// FIND - percorre a lista de dados e retorna o dado que estamos bucando, aquele que atender a condicional passada para ele
//  let frutaEscolhida = prompt('informe uma fruta qualquer: ')

// let frutaEncontrada = listaFrutas.find((valor, indice, array) => valor === frutaEscolhida)

//undefined, null, '', 0, false = falsy

// if(frutaEncontrada) {
//   console.log(`Sim encontrei a fruta ${frutaEncontrada} na lista`)
// } else {
//   console.log(`A fruta ${frutaEscolhida} não foi encontrada`)
// }

//FINDINDEX => percorre a lista de dados e retorna o indice do dado que estamos buscando, aquele que atender a condicional passada para ele // muito utilizado em atualização e exclusão de itens de uma lista 
// let indiceEncontrado = listaFrutas.findIndex((value, index, array) => value === frutaEscolhida)

// if(indiceEncontrado !== -1) {
//   console.log(`encontrei a fruta na posicao ${indiceEncontrado}`)
// } else {
//   console.log('não foi encontrado o indice desse registro, não existe na lista')
// }

//findindex quando nao encontra, retorna -1

// console.log(indiceEncontrado)

// listaFrutas[indiceEncontrado] = 'laranja'
// console.log(listaFrutas)

//splice - serve para atualizar e excluir itens de uma lista, possui 3 parametros

//atualizar - exclui o valor antigo e substitui pelo 
// indiceEncontrado => [2]
// 1 => quantidade de dados que sofrerão a modificação começando do indiceEncontrado - se for passado o 2, ele substitui o dado no indiceEncontrado, e o próximo indice.
// 'laranja - novo dado que irá substituir o valor do indice passado

// let novosDados = ['laranja', 'melancia', 'bergamota']
// listaFrutas.splice(indiceEncontrado, 2, ...novosDados)
// console.log(listaFrutas)

//excluir
// listaFrutas.splice(indiceEncontrado, 1)

//MAP => // sempre vai retornar uma lista cópia da original
// const novaLista = listaFrutas.map((valor, indice, array) => valor.toUpperCase())
// console.log(novaLista)


//FOREACH => não possui retorno
// listaFrutas.forEach( (valor, index, array) => {
//   if(valor === 'uva') {
//   array[index] = 'butia'}
// })

// console.log(listaFrutas)

//FILTER => filtra uma determinada lista e retorna uma nova lista com todos aqueles itens que atenderem a condicao que passarmos

// const novaListaFiltrada = listaFrutas.filter((valor, indice, array) => valor.length > 4)

// console.log(listaFrutas)
// console.log(novaListaFiltrada)

