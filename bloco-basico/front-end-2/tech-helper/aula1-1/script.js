const elementById = document.getElementById('titulo')

elementById.onclick = () => {
  elementById.remove()
}

if(elementById) {
  // aqui faz alguma coisa
}
// console.log(elementById)

const elementByClassName = document.getElementsByClassName('paragrafo')

const elementByTagName = document.getElementsByTagName('p')
// console.log(elementByTagName)

// elementByTagName[1].style = "color: green;"

const elementByQuerySelector = document.querySelectorAll('p')

console.log(elementByQuerySelector)

elementByQuerySelector.forEach(item => {
  // item.style.color = 'green'
  item.classList.add('vermelho')
  item.classList.toggle('h3')
  // item.remove() - para remover
  // const id = item.getAttribute('id')
  item.setAttribute('id', 'meuid')
})