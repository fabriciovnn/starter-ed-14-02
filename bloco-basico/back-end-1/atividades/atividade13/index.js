// 1. Deve ser desenvolvido um programa que realize um CRUD(create read update delete) de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:
 alert('Bem-vindo ao sistema de CRUD de veículos!')
const carrosLista = []

// No momento, o sistema tem X carros cadastrados
 alert(`No momento, o sistema tem ${carrosLista.length} carros cadastrados`)

// Escolha uma das opções para interagir com o sistema:
 alert('Escolha uma das opçõs a seguir para interagir com o sistema: ')

// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática



function cadastrarVeiculo() {
  const carro = {}
  carro.id = new Date().valueOf()
  carro.modelo = prompt('Digite o modelo do carro:')
  carro.marca = prompt(`Digite a marca do carro:`).toUpperCase()
  carro.ano = Number(prompt('Digite o ano do carro:'))
  carro.cor = prompt('Digite a cor do carro:')
  carro.preco = Number(prompt('Digite o preco do carro:'))

  carrosLista.push(carro)
}



// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos
// com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000

 function listarVeiculos () {

 const veiculosOrdenados = [...carrosLista].sort((a,b) => {
     if (a.preco < b.preco) return -1;
     if (a.preco > b.preco) return 1;
     return 0;
 })

      veiculosOrdenados.forEach((carro) => {
      console.log(`ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} | Preço: R$ ${(carro.preco).toFixed(2)}`)
    })
  }



// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

function filtrarVeiculos() {
  const marca = prompt('Digite a marca que deseja filtrar:').toUpperCase()
  const listaMarcas = carrosLista.filter((carro) => carro.marca === marca)
  const veiculosOrdenados = [...listaMarcas].sort((a,b) => {
    if (a.preco < b.preco) return -1;
    if (a.preco > b.preco) return 1;
    return 0;
})

  veiculosOrdenados.forEach((car) => {
    console.log(`ID: ${car.id} | Modelo: ${car.modelo} | Ano: ${car.ano} | Cor: ${car.cor} | Preço: R$ ${(car.preco).toFixed(2)}`)
  })
}




// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário
// atualize somente a cor e o preço.


function atualizarVeiculo() {
  const identificador = Number(prompt('Digite o identificador:'))
  const indexEncontrado = carrosLista.findIndex((carro) => carro.id === identificador)
 
 if(indexEncontrado !== -1) {
  carrosLista[indexEncontrado].cor = prompt('digite a nova cor')
  carrosLista[indexEncontrado].preco = Number(prompt('digite o novo preço'))
 } else {
  console.log('Veiculo não encontrado')
 }
 

}

// 5 - Remover veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo

function removerVeiculo() {
  const identificador = Number(prompt('digite o identificador'))
  const indexEncontrado = carrosLista.findIndex((carro) => carro.id === identificador)
 
 if(indexEncontrado !== -1) {
  carrosLista.splice(indexEncontrado, 1)
 } else {
  console.log('Veiculo não encontrado')
 }
}



// 6 - Sair do sistema

// Regras:
// - Os dados de um veículo são: identificador, modelo, marca,
// ano, cor, preco

// - A opção de filtro deve ser por marca e ordenada pelo preco
// - A lista de veículos deve estar ordenada pelo preco.
// - Só deve ser possível atualizar a cor e o preço do veículo.
