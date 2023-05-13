// function minhaFuncao() {
//   console.log('funcao')
// }

//espera o carregamento da pagina
// window.addEventListener('DOMContentLoaded', minhaFuncao)
// window.addEventListener('load', () => {})
// window.addEventListener('click', () => {console.log('clicou')})

 const inputText = document.getElementById('input-text')

function callback(e) {
  const valorInput = e.target.children[0].value
  console.log(valorInput)
}

 const form = document.getElementsByTagName('form')[0]

 window.addEventListener('submit', callback)

// document.addEventListener('keydown', () => {console.log('teclou')})

// const button = document.getElementById('button')

// function clicouNoBotao(event) {
//   event.preventDefault()
  // console.log(event)
// }

