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
const rowDiversos = document.getElementById('geral')
const filtroDiversos = movies.filter(movie => movie.category === 'geral')
const buttonVamosLa = document.getElementById('buttonVamosLa')


function renderizarVideos (elemento, filtroVideos) {
  filtroVideos.forEach((movie) => {
    const divCol = document.createElement('div')
    divCol.setAttribute('class','col-3 video-hov')

    divCol.addEventListener('click', () => rodarVideo(movie.link))

    const imgThumb = document.createElement('img')
    imgThumb.setAttribute('src', movie.img)
    imgThumb.classList.add('img-fluid')

    const divHover = document.createElement('div')
    divHover.setAttribute('class', 'text-light')

    const buttonVideo = document.createElement('div')
    buttonVideo.setAttribute('type', 'button')
    buttonVideo.setAttribute('class', 'btn btn-video d-flex align-items-center')
    buttonVideo.innerHTML = `
    <i class="bi bi-play-circle fs-1"></i>
    <h2">${movie.title}</h2>
    `

    divHover.appendChild(buttonVideo)
    divCol.appendChild(imgThumb)
    divCol.appendChild(divHover)

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
renderizarVideos(rowDiversos, filtroDiversos)