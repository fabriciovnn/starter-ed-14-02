const api = axios.create({
  baseURL: 'http://localhost:8080'
})

const containerRecados = document.getElementById('container-recados')
const userTitle = document.getElementById('user-title')

document.addEventListener('DOMContentLoaded', async () => {
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado')
  )

  if (!usuario) {
    window.location.href = './index.html'
  }

  userTitle.innerHTML = `Bem-vindo, ${usuario.nome}!`
  const recados = await pegarRecadosUsuario(usuario.dados)

  montarCardRecado(recados)
})

function montarCardRecado(listaRecados) {
  listaRecados.forEach(recado => {
    const divCol = document.createElement('div')
    divCol.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3')

    const divCard = document.createElement('div')
    divCard.classList.add('card', 'img-bg-todo')

    const divCardBody = document.createElement('div')
    divCardBody.classList.add('card-body')

    const divCardHeader = document.createElement('div')
    divCardHeader.classList.add('w-100', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-2')

    const divCardTitleContainer = document.createElement('div')

    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = recado.titulo

    const cardDate = document.createElement('h6')
    cardDate.classList.add('card-subtitle', 'text-body-secondary')
    cardDate.innerHTML = '10/06/2023'

    const icon = document.createElement('i')
    icon.classList.add('bi', 'bi-pin-angle-fill', 'text-primary', 'fs-1')

    const cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerText = recado.descricao

    const divButtonsContainer = document.createElement('div')
    divButtonsContainer.classList.add('w-100', 'd-flex', 'gap-2')

    const buttonEdit = document.createElement('button')
    buttonEdit.classList.add('btn', 'btn-outline-success')
    const iconPencil = document.createElement('i')
    iconPencil.classList.add('bi', 'bi-pencil')

    const buttonDelete = document.createElement('button')
    buttonDelete.classList.add('btn', 'btn-outline-danger')
    const iconTrash = document.createElement('i')
    iconTrash.classList.add('bi', 'bi-trash3')


    buttonEdit.appendChild(iconPencil)
    buttonDelete.appendChild(iconTrash)
    divButtonsContainer.appendChild(buttonEdit)
    divButtonsContainer.appendChild(buttonDelete)
    divCardTitleContainer.appendChild(cardTitle)
    divCardTitleContainer.appendChild(cardDate)
    divCardHeader.appendChild(divCardTitleContainer)
    divCardHeader.appendChild(icon)
    divCardBody.appendChild(divCardHeader)
    divCardBody.appendChild(cardText)
    divCardBody.appendChild(divButtonsContainer)
    divCard.appendChild(divCardBody)
    divCol.appendChild(divCard)

    containerRecados.append(divCol)
  })
}

async function pegarRecadosUsuario(usuario) {
  const resposta = await api.get('/recados')
  // const resposta = await api.get(`/users/${usuario.id}/messages`)

  console.log(resposta)
  return resposta.data.dados
}