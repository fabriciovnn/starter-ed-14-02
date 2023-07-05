

// 1- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação e número de páginas.

// let livro = {
//     titulo: 'A caçada ao Lobo de Wallstreet',
//     autor: 'Jordan Belfort',
//     ano: 2014,
//     numeroDePaginas: 459 
// }

// 2 - Crie um array de objetos de livros com base no modelo criado no exercício anterior.

//  let livros = [
//      {
//      titulo: 'A caçada ao lobo de wallstreet', 
//      autor: 'Jordan Belfort', 
//      ano: 2014, 
//      numeroDePaginas: 459 
//      }, {
//      titulo: 'Dentes de Dragão', 
//      autor: 'Michael Crichton', 
//      ano: 2017, 
//      numeroDePaginas: 299
//      }, {
//      titulo: 'Triste Fim de Policarpo Quaresma', 
//      autor: 'Lima Barreto', 
//      ano: 1915, 
//      numeroDePaginas: 459 
//      } ,{
//      titulo: 'As cronicas de narnia', 
//      autor: 'Michael Crichton', 
//      ano: 2010, 
//      numeroDePaginas: 299
//      }
//    ]

// 3 - Escreva um algoritimo que receba um array de objetos de livros e retorne o título do livro mais antigo.

// let livroMenorAno = livros[0];
// for(let index in livros) {
//     if(livros[index].ano < livroMenorAno.ano) {
//       livroMenorAno = livros[index];
//     }
//   }

// console.log(livroMenorAno.titulo);

// 4 - Escreva um algoritimo que receba um array de objetos de livros e retorne uma nova matriz contendo apenas os livros publicados no século 21.

//  const livrosSec21 = []

//  for(let i in livros) {
//    if(livros[i].ano >= 2000) {
//      livrosSec21.push(livros[i])
//    }
//   }


//   console.log('Livros publicados no século 21:')
//   for(let livro of livrosSec21) {
//     console.log(`Título: ${livro.titulo}, Publicação: ${livro.ano}`)
//   }


// 5 - Escreva um algoritimo que receba um array de objetos de livros e retorne uma nova matriz contendo apenas os títulos dos livros.

//  let titulosLivro = [];

//  for(let livro of livros) {
//    titulosLivro.push({ titulo: livro.titulo})
//  }
//  for(let key of titulosLivro) {
//    console.log(key.titulo)
//  }


// 6 - Crie um objeto que represente uma pessoa com propriedades como nome, idade e endereço.

// const usuario = {
//   nome: 'fabricio', 
//   idade: '27',
//   endereco: 'imbituba'
// }

// 7 - Crie um array de objetos de pessoas com base no modelo criado no exercício anterior.
  // const pessoas = [
  //   {
  //     nome: 'fabricio', 
  //     idade: 27,
  //     endereco: 'imbituba, rua do conde n1 - 000-000'
  //   }, {
  //     nome: 'joao', 
  //     idade: 17,
  //     endereco: 'Sao Paulo, rua do conde n2 - 999-999'
  //   }, {
  //     nome: 'guilherme', 
  //     idade: 22,
  //     endereco: 'tres coroas, rua do conde n3 - 888-888'
  //   }, {
  //     nome: 'emerson', 
  //     idade: 34,
  //     endereco: 'campo bom, rua do conde n4 - 777-777'
  //   },
  // ]



// 8 - Escreva um algoritimo que receba um array de objetos de pessoas e retorne uma nova matriz contendo apenas as pessoas com idade entre 18 e 30 anos.
// const idadeIdeal = []

// for(let key of pessoas) {
//   if((key.idade >= 18) && (key.idade <= 30)) {
//     idadeIdeal.push(key)
//   }
// }

// console.log('Pessoas entre 18 e 30 anos:')
// for(let key of idadeIdeal) {
//   console.log(`Nome: ${key.nome}, Idade: ${key.idade}, Endereco: ${key.endereco} `)
// }



// 9 - Escreva um algoritimo que receba um array de objetos de pessoas e retorne o nome da pessoa mais velha.

//  let maisVelha = pessoas[0];
//  for(let index in pessoas) {
//      if(pessoas[index].idade > maisVelha.idade) {
//        maisVelha = pessoas[index];
//      }
//    }

//    console.log(`O nome da pessoa mais velha é: ${maisVelha.nome}`)



// 10 - Escreva um algoritimo que receba um array de objetos de pessoas e retorne uma nova matriz contendo apenas os endereços das pessoas.

  // const enderecoPessoas = []

  // for(let key of pessoas) {
  //    enderecoPessoas.push({ endereco: key.endereco})
  // }

  // for(let key of enderecoPessoas) {
  // console.log(`Endereços das pessoas: ${key.endereco}`)
  // }