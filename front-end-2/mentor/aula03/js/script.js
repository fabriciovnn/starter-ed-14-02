// 1 - construir o layout fixo - ok

// 2 - criar os elementos da dom com base em uma lista de dados
// primeiro lista ficticia - mock
const listaTodos = [
  {
    userID: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userID: 1,
    id: 2,
    title: "quit ut nam facilis et officia qui",
    completed: true
  },
  {
    userId: 1,
    id: 3,
    title: "et porro tempora",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  }
]

//quando a página é carregada - EVENTO - ONLOAD ou DOMCONTENTLOADED
// document.onload = () => {

// }

document.addEventListener('DOMContentLoaded', () => {
  const ulElement = document.getElementById('espaco-todos')

  listaTodos.forEach((item) => {

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

// 3 - integração - trocar o mock por dados reais

async function dispararRequisicao() {
  // JS ASSINCRONO
  // pending - pendente (disparado a req)
  //fulfilled - completo independente do status code
  //rejected - rejeitado (erro do dev)
  const resposta = await apiConfig.get('/todos')
  console.log(resposta)
}
