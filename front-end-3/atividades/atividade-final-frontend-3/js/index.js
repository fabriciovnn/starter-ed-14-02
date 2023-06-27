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
})

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
  // rowCards.innerHTML = ''

  characters.forEach(async (character) => {
    const divCol = document.createElement('div')
    divCol.setAttribute('class', 'col-12 col-md-6 col-lg-4')

    const divContainerCards = document.createElement('div')
    divCard.classList.add('container')

    const divCard = document.createElement('div')
    divCard.classList.add('card')

    const imgCard = document.createElement('img')
    img.setAttribute('src', `${character.image}`)
    img.setAttribute('alt', 'avatar')
    img.setAttribute('class', 'card-img-top')

    const divBodyCard = document.createElement('div')
    divBodyCard.setAttribute('class', 'card-body px-5')

    const titleCard = document.createElement('h5')
    titleCard.setAttribute('class', 'card-title')
    titleCard.innerText = `${character.name}`
    
    const pCardStatus = document.createElement('p')
    pCardStatus.innerHTML = `${character.status} - ${character.species}`
    pCardStatus.setAttribute('card-body px-5')
    if(character.status === 'Alive') {
      pCardStatus.classList.add('alive')
    } else if(character.status === 'Dead') {
      pCardStatus.classList.add('dead')
    } else {
      pCardStatus.classList.add('unknown')
    }

    const dlCard = document.createElement('dl')
    const dtLocation = document.createElement('dt')
    dtLocation.innerText = 'Última Localização conhecida:'

    const ddLocation = document.createElement('dd')
    ddLocation.innerText = `${character.location.name}`

    const dtLastSeen = document.createElement('dt')
    dtLastSeen.innerText = 'Visto a última vez em:'

    const ddLastSeen = document.createElement('dd')
    const ultimoEpisodio = character.episode[character.episode.length -1]
    const respostaLocalizacao = await axios.get(`${ultimoEpisodio}`)
    const ultimaLocalizacao = respostaLocalizacao.data.name
    ddLastSeen.innerText = `${ultimaLocalizacao}`

    

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

// montarBotoes