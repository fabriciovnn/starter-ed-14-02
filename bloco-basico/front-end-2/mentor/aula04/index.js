const formElement = document.querySelector('#cadastro')

formElement.addEventListener('submit', (e) => {
  e.preventDefault()

  const valido = e.currentTarget.checkValidity()
  if(!valido) {
    alert('Algo de errado não esta certo!')
    return
  }
})