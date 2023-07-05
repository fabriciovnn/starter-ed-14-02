//  const computador = {
//    memoria: 4,
//    armazenamento: 1,
//    modelo: 'intel',
//    processador: 'i7'
//  }

//  const pessoa = {
//    nome: 'marcelo',
//    cpf: 00000000-00,
//    altura: 1.7,
//    peso: 50,
//    reprovado: true,
//    genero: 'masculino',
//    notas: [9.8, 7.1, 6],
//    matricula: {
//     codigo: '12345',
//     curso: 'Starter Fullstack',
//     turma: 'Growdev'
//    }
//  }

//  const carro = {
//    modelo: 'civic',
//    marca: 'honda',
//    potencia: 1.8,
//    cor: 'vermelho',
//    quantidade_portas: 4,
//  }

//  const produto = {
//      codigo: 1,
//      nome: 'Computador da xuxa',
//      preco: 300.00,
//      disponibilidade: false,
//  }


// O QUE SAO OBJETOS ?
// são variaveis estruturadas que serao capazes de armazenas diversos dados sobre uma mesma coisa

// Para acessar propriedades utilizar o "."

// Como adicionar dados a um objeto. Da mesma forma para atualizar uma propriedade existente
//  pessoa.matricula.edicao = prompt('Edição do programa de formação')
// pode-se adicionar mesmo em uma variavel do tipo const

// Como remover dados de um objeto
// delete pessoa.reprovado

// FOR IN
// utilizado para acessar propriedades de um objeto, onde a variavel key é cada propriedade do objeto pessoa
// podemos parar o for in com uma verificação
// for(let key in pessoa) {
//   console.log(key, pessoa[key])

//   if(key === 'reprovado') {
//     break;
//   }
// }
