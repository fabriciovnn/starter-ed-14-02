// QUERY SELECTOR (#, ., div, section > ul) - Serve para buscar um elemento da DOM com base no seletor CSS que for especificado dentro de aspas simpels
// const elementoTitle = window.document.querySelector('title') //<title>titulo da pagina</title>


//  const novoTitulo = prompt("Informe o novo titulo para a pagina")

//innerHtml ou InnerText - lidam com o conteúdo de uma tag

// elementoTitle.innerText = novoTitulo


// Seletores da DOM

//document.getElementById - retorna apenas UM elemento

// const elementoAncoraLink2 = window.document.getElementById('link2') // id errado ou não existe? null
// // se existe ele retorna o elemento inteiro

// console.log(elementoAncoraLink2)
// elementoAncoraLink2.style = "text-decoration: none; color: red;"
// elementoAncoraLink2.href = 'http://www.growdev.com.br'
// elementoAncoraLink2.target = "_blank"
// elementoAncoraLink2.innerText = "Site Growdev"

// //document.querySelector - seletor css
// const itemElemento = window.document.querySelector('li')

// itemElemento.innerHTML = '<h3>Link modificado</h3>'


//document.querySelectorAll - todos os elementos que atenderem ao seletor css
// NODELIST !== Array
// const itens = window.document.querySelectorAll('li')

// for(const item of itens) {
//   item.innerHTML = 'MODIFICADO'
// }

//document.getElementsByTagName
//Retorna HTML collection
// const items = window.document.getElementsByTagName('li')
// console.log(items)

// for(const item of items) {
//   item.style = 'color: green; list-style: square'
//   console.log(item.children[0].style = 'text-decoration: none; color: inherit')
// }
//document.getElementsByClassName
// const items = window.document.getElementsByClassName('item')

// for(const item of items) {
//   item.style = 'color: red; list-style: square'
//   console.log(item.children[0].style = 'text-decoration: none; color: inherit')
// }

// const tituloElement = window.document.getElementById('titulo')

// tituloElement.onclick = () => {
//   tituloElement.style = "color: grey;"
// }

// tituloElement.onmouseenter = () => {
//   tituloElement.style = "color: red;"
// }

// tituloElement.onmouseleave = () => {
//   tituloElement.style = "color: yellow;"
// }
