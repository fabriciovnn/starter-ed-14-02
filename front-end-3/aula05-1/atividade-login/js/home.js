const api = axios.create({
  baseURL: 'http://localhost:8080'
})

document.addEventListener('DOMContentLoaded', async () => {
  const usuario = localStorage.getItem('usuarioLogado')
  if(!usuario) {
    window.location.href = '../index.html'
  }

  const recados = await pegarRecadosUsuario(usuario)

  montarCardRecado(recados)
})

function motnarCardRecados(listaRecados) {
  listaRecados.forEach((recado) => {
    
  })
}

async function pegarRecadosUsuario() {
  const { id } = usuario
  const resposta = await api.get(`/users/${id}/messages`)

  return resposta.data.data
  console.log(resposta.data)
}