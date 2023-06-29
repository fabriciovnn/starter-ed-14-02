const modalVideos = new bootstrap.Modal("#modal-videos", {
  keyboard: false,
});
const videoIframe = document.getElementById('video-iframe')
const rowGrowcast = document.getElementById('growcast')
const filtroGrowcast = movies.filter(movie => movie.category === 'growcast')
const rowWebinar = document.getElementById('webinar')
const filtroWebinar = movies.filter(movie => movie.category === 'webinar')
const rowUXUI = document.getElementById('uxUI')
const filtroUXUI = movies.filter(movie => movie.category === 'ux-ui')

function renderizarVideos (elemento, filtroVideos) {
  filtroVideos.forEach((movie) => {
    const divCol = document.createElement('div')
    divCol.classList.add('col-3')

    divCol.addEventListener('click', () => rodarVideo(movie.link))

    const imgThumb = document.createElement('img')
    imgThumb.setAttribute('src', movie.img)
    imgThumb.classList.add('img-fluid')

/*          <div>
            <button>
              <i class="bi bi-play-circle-fill"></i>
            </button>

            <h2>Titulo</h2>
          </div>*/

    const divHover = document.createElement('div')
    

    divCol.appendChild(img)

    elemento.appendChild(divCol)
  })
}

function rodarVideo(link) {
/*
<iframe src="https://www.youtube.com/embed/aJ-HZuLcKeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
*/

  videoIframe.innerHTML = `
  <iframe src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `

  modalVideos.show()
}

renderizarVideos(rowGrowcast, filtroGrowcast)
renderizarVideos(rowWebinar, filtroWebinar)
renderizarVideos(rowUXUI, filtroUXUI)