const botaoPrev = document.getElementById('botao-prev')
const botaoAtual = document.getElementById('botao-atual')
const botaoNext = document.getElementById('botao-next')
let paginaAtual = 1


// domContentLoad
document.addEventListener('DOMContentLoaded', async () => {
  const respostaApi = await buscarPersonagens()
  const characterList = respostaApi.results

  const spanTotalPersonagens = document.getElementById('total-personagens')
  spanTotalPersonagens.innerHTML = `${respostaApi.info.count}`

  const spanTotalLocalizacoes = document.getElementById('total-localizacoes')
  const respostaLocation = await api.get('/location')
  const totalLocalizacoes = respostaLocation.data.info.count
  spanTotalLocalizacoes.innerHTML = `${totalLocalizacoes}`

  const spanTotalEpisodios = document.getElementById('total-episodios')
  const respostaEpisodes = await api.get('/episode')
  const totalEpisodios = respostaEpisodes.data.info.count
  spanTotalEpisodios.innerHTML = `${totalEpisodios}`

  montarCards(characterList)
  mudarBotoes(respostaApi.info.prev, respostaApi.info.next)
})

botaoNext.addEventListener('click', proximaPagina)
botaoPrev.addEventListener('click', paginaAnterior)

// buscar personagens
async function buscarPersonagens(pagina) {
  try{
    const response = await api.get('/character', {
      params: {
        page: pagina || 1
      }
    })
    // console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}

// montarCards
function montarCards(characters) {
  const rowCards = document.getElementById('row-cards')
  rowCards.innerHTML = ''

  characters.forEach(async (character) => {
    const divCol = document.createElement('div')
    divCol.setAttribute('class', 'col-12 col-md-6 col-lg-4')

    const divContainerCards = document.createElement('div')
    divContainerCards.classList.add('container')

    const divCard = document.createElement('div')
    divCard.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.setAttribute('src', `${character.image}`)
    imgCard.setAttribute('alt', 'avatar')
    imgCard.setAttribute('class', 'card-img-top')

    const divBodyCard = document.createElement('div')
    divBodyCard.setAttribute('class', 'card-body px-5')

    const titleCard = document.createElement('h5')
    titleCard.setAttribute('class', 'card-title')
    titleCard.innerText = `${character.name}`
    
    const pCardStatus = document.createElement('p')
    pCardStatus.innerHTML = `${character.status} - ${character.species}`
    pCardStatus.setAttribute('class', 'card-text status')
    if(character.status === 'Alive') {
      pCardStatus.classList.add('alive')
    } else if(character.status === 'Dead') {
      pCardStatus.classList.add('dead')
    } else {
      pCardStatus.classList.add('unknown')
    }

    const dlCard = document.createElement('dl')
    const dtLocation = document.createElement('dt')
    dtLocation.innerText = 'Last Known Location'

    const ddLocation = document.createElement('dd')
    ddLocation.innerText = `${character.location.name}`

    const dtLastSeen = document.createElement('dt')
    dtLastSeen.innerText = 'Last Seen In'

    const ddLastSeen = document.createElement('dd')
    const ultimoEpisodio = character.episode[character.episode.length -1]
    const respostaLocalizacao = await axios.get(`${ultimoEpisodio}`)
    const ultimaLocalizacao = respostaLocalizacao.data.name
    ddLastSeen.innerText = `${ultimaLocalizacao}`

    dlCard.appendChild(dtLocation)
    dlCard.appendChild(ddLocation)
    dlCard.appendChild(dtLastSeen)
    dlCard.appendChild(ddLastSeen)

    divBodyCard.appendChild(titleCard)
    divBodyCard.appendChild(pCardStatus)
    divBodyCard.appendChild(dlCard)

    divCard.appendChild(imgCard)
    divCard.appendChild(divBodyCard)
    divContainerCards.appendChild(divCard)
    divCol.appendChild(divContainerCards)
    rowCards.appendChild(divCol)


    

    /*
        <div class="col-12 col-md-6 col-lg-4">
        <div class="container">         
          <div class="card">
              <img src="./imgs/136.jpeg" class="card-img-top" alt="avatar">
              <div class="card-body px-5">
                <h5 class="card-title">Nome Personagem</h5>

                <p class="card-text status alive">
                  Vivo - Humano
                </p>

                <dl>
                  <dt>Ultima localização conhecida:</dt>
                  <dd>Planeta XPTO</dd>

                  <dt>Visto a última vez em:</dt>
                  <dd>Nome do Capítulo</dd>
                </dl>
              </div>
          </div>
        </div>
      </div>
    */
  })
}

// mudarBotoes
function mudarBotoes(prev, next) {
  botaoAtual.children[0].innerText = paginaAtual

  if (!prev) {
    botaoPrev.classList.remove('cursor-pointer')
    botaoPrev.classList.add('disabled')
} else {
    botaoPrev.classList.add('cursor-pointer')
    botaoPrev.classList.remove('disabled')
}

if (!next) {
    botaoNext.classList.remove('cursor-pointer')
    botaoNext.classList.add('disabled')
} else {
    botaoNext.classList.add('cursor-pointer')
    botaoNext.classList.remove('disabled')
}
}

async function proximaPagina() {
  // verificar se o botão esta desabilitado
  if (!botaoNext.classList.contains('disabled')) {
      // só dispara a requisição pra API se o botão estiver habilitado
      ++paginaAtual

      const dadosAPI = await buscarPersonagens(paginaAtual)


      montarCards(dadosAPI.results)
      mudarBotoes(dadosAPI.info.prev, dadosAPI.info.next)
  }
}

async function paginaAnterior() {
  // verificar se o botão esta desabilitado
  if (!botaoPrev.classList.contains('disabled')) {
      // só dispara a requisição pra API se o botão estiver habilitado
      --paginaAtual

      const dadosAPI = await buscarPersonagens(paginaAtual)

      montarCards(dadosAPI.results)
      mudarBotoes(dadosAPI.info.prev, dadosAPI.info.next)
  }
}