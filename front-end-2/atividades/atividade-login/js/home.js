let listaContatos = [];
document.addEventListener('DOMContentLoaded',async () => {
  const tokenLocal = localStorage.getItem('token')
  
  const tokenSession = sessionStorage.getItem('token')

  if(!tokenLocal && !tokenSession) {
    window.location.href = 'index.html'
    return
  }

  const emailLocal = localStorage.getItem('email')
  const emailSession = sessionStorage.getItem('email')
  const paragrafo = document.getElementById('texto-apresentacao')


  if(emailLocal) {
    paragrafo.innerText = `Bem vindo, ${emailLocal}`

    listaContatos = await buscarContatos(emailLocal)

    listaContatos.forEach((contato) => {
      montarCard(contato)
    });
  }

  if(emailSession) {
    paragrafo.innerText = `Bem vindo, ${emailSession}`

    listaContatos = await buscarContatos(emailSession)

    listaContatos.forEach((contato) => {
      montarCard(contato)
    });
  }

})

async function buscarContatos(emailUsuarioLogado) {
  try {
    const response = await apiConfig.get(`users/${emailUsuarioLogado}/contatos/listar`)

    console.log(response.data.dados)

    return response.data.dados

  } catch (erro) {
    console.log(erro)

    return []
  }
}

//construir os cards de contatos
function montarCard(contato) {
  /*
      <div class="container-contato">
      <h3>João</h3>
      <p>(51) 9999-9999</p>
      <p>email@teste.com</p>
    </div> 
  */

    const main = document.getElementById('espaco-cards');

    const div = document.createElement('div') //<div></div>
    div.classList.add('container-contato')

    const h3 = document.createElement('h3')
    h3.innerText = contato.nome

    const paragrafoTelefone = document.createElement('p')
    paragrafoTelefone.innerText = contato.telefone

    const paragrafoEmail = document.createElement('p')
    paragrafoEmail.innerText = contato.email

    //cuidado com a ordem de montagem da DOM
    // começar do mais interno para o mais externo

    div.appendChild(h3)
    div.appendChild(paragrafoTelefone)
    div.appendChild(paragrafoEmail)
    main.appendChild(div)
} 

//LOGOUT DO USUARIO
const btnSair = document.getElementById('btn-sair')

btnSair.addEventListener('click', () => {
  // remover token e email do local ou session storage

  localStorage.removeItem('token')
  localStorage.removeItem('email')

  sessionStorage.removeItem('token')
  sessionStorage.removeItem('email')

  // direcionar o usuário para a página de login
  window.location.href = 'index.html'
})