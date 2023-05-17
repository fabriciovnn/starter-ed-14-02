// 1 - construir o layout fixo - ok

// 2 - criar os elementos da dom com base em uma lista de dados
// primeiro lista ficticia - mock
// const listaTodos = [
//   {
//     userID: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false
//   },
//   {
//     userID: 1,
//     id: 2,
//     title: "quit ut nam facilis et officia qui",
//     completed: true
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "et porro tempora",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: true
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false
//   }
// ]

let listaDados = [];
listaUsuarios = [];

//quando a página é carregada - EVENTO - ONLOAD ou DOMCONTENTLOADED
// document.onload = () => {

// }

document.addEventListener('DOMContentLoaded', async () => {
  await requisitarUsuarios()
  await requisitarDados()
  console.log(listaUsuarios)
  console.log(listaDados)
  // async e await para os dados serem preenchidos antes de executar as linhas abaixo

  const ulElement = document.getElementById('espaco-todos')

   listaUsuarios.forEach((usuario) => {
    const listaFiltrada =  listaDados.filter((dado) => dado.userId === usuario.id )
    console.log(listaFiltrada)
    ulElement.innerHTML += `
    <h2>Nome Usuário: ${usuario.name}</h2>
      <h3>Id Usuário: ${usuario.id}</h3>
    `
    listaFiltrada.forEach((item) => {
          //cria elementos utilizando o JS
    const liElement = document.createElement('li') // <li></li>
    liElement.setAttribute('id', `${item.id}`)//<li id="1"></li>

    liElement.classList.add('tarefa')

    //se item.completed for true add class completo
    if(item.completed) {
      liElement.classList.add('completo')//<li class="completo"></li>
    }

    liElement.innerText = item.title // <li class="completo"> tarefa 1</li>


    //criar a li dentro da ul - appendChild
    ulElement.appendChild(liElement)
    })

   })
})

// 3 - integração - trocar o mock por dados reais

async function requisitarDados() {
  // JS ASSINCRONO
  // pending - pendente (disparado a req)
  //fulfilled - completo independente do status code
  //rejected - rejeitado (erro do dev)
  try {
    const resposta = await apiConfig.get('/todos')
    // console.log(resposta.data)
    listaDados = resposta.data
    // console.log(listaDados)
  } catch {
    console.log('Verifique os dados e tente novamente!')
  }
}

async function requisitarUsuarios() {
  try{
    const resposta = await apiConfig.get('/users')
    listaUsuarios = resposta.data
  } catch {
    console.log('Verifique os dados e tente novamente')
  }
}