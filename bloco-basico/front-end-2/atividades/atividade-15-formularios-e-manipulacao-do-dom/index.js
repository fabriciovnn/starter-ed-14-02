const formElement = document.querySelector('form')

formElement.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = formElement.nome.value
  const endereco = formElement.endereco.value
  const cidade = formElement.cidade.value
  const estado = formElement.estado.value
  const cargo = formElement.cargo.value

  const areaInteresse = formElement.interesse
  const listaInteresse = []
  for(item of areaInteresse) {
    if(item.checked) {
      listaInteresse.push(item.value)
    }
  }

  if(!listaInteresse.length) {
    return alert('selecione uma das áreas de interesse!')
  }

  const miniCurriculo = formElement.mini_curriculo.value


  console.log({
    nome,
    endereco,
    cidade,
    estado,
    cargo,
    listaInteresse,
    miniCurriculo
  })
} )