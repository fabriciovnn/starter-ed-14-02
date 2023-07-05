const formCadastroElement = document.getElementById('form-cadastro')

formCadastroElement.addEventListener('submit', async (e) => {
  e.preventDefault();

  //daqui pra baixo conseguimos capturar o value dos campos tranquilamente pois a página não reestarta

  const emailInput = document.getElementById('email')
  const senhaInput = document.getElementById('senha')
  const repetirSenhaInput = document.getElementById('re-senha')

  const emailValido = validarPreenchimentoCampo(emailInput.value)
  const senhaValido = validarPreenchimentoCampo(senhaInput.value)
  const repetirSenhaValido = validarPreenchimentoCampo(repetirSenhaInput.value)

  if(!emailValido || !senhaValido || !repetirSenhaValido) {
    alert('Preencha os campos corretamente')
    return
  }

  if(!validarSenhas(senhaInput.value, repetirSenhaInput.value)) {
    alert('As senhas não coincidem')
    return
  }

  const novoUsuario = {
    email: emailInput.value,
    senha: senhaInput.value,
  }



  console.log(novoUsuario);

 const deuBom = await cadastrarUsuario(novoUsuario);

 if(deuBom) {
  emailInput.value = ''
  senhaInput.value = ''
  repetirSenhaInput.value = ''

  window.location.href = 'index.html'
 }
})

function validarPreenchimentoCampo(valorDigitado) {
  if(valorDigitado === '') {
    return false
  }

  return true
}

function validarSenhas(senha, repetirSenha) {
  if(senha !== repetirSenha) {
    return false
  }

  return true
}

async function cadastrarUsuario(novoUsuario) {
  try{
  const response = await apiConfig.post('/usuarios/cadastro', novoUsuario)

  alert(response.data.mensagem) //consultar na minha API o console de resposta
  return true
  } catch(erro) {
    alert(erro.response.data.mensagem) // consultar na minha api o console de erro
    return false
  }
}