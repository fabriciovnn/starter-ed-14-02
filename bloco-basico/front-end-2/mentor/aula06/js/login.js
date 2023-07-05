document.addEventListener('DOMContentLoaded', () => {
  // 1 - verifica se tem algo chamado 'token' no localStorage
  // Argumento 1 - key, 2 - value

  const tokenLocalStorage = localStorage.getItem('token')

  const tokenSessionStorage = sessionStorage.getItem('token')

  if(tokenLocalStorage || tokenSessionStorage) {
    window.location.href = 'home.html'
  }

})

const formLoginElement = document.getElementById('form-login')

formLoginElement.addEventListener('submit', async (e) => {
  e.preventDefault();


  const emailInput = document.getElementById('email')
  const senhaInput = document.getElementById('senha')
  const permanecerConectado = document.getElementById('lembrar').checked


  const emailValido = validarPreenchimentoCampo(emailInput.value)
  const senhaValido = validarPreenchimentoCampo(senhaInput.value)


  if(!emailValido || !senhaValido) {
    alert('Preencha os campos corretamente')
    return
  }


  const dadosUsuario = {
    email: emailInput.value,
    senha: senhaInput.value,
  }

 const deuBom = await login(dadosUsuario, permanecerConectado);

  if(deuBom) {
   emailInput.value = ''
   senhaInput.value = ''
   window.location.href = 'home.html'
  } else {
    senhaInput.value = ''
  }
})

function validarPreenchimentoCampo(valorDigitado) {
  if(valorDigitado === '') {
    return false
  }

  return true
}

async function login(dadosUsuario, permanecerConectado) {
  try{
  const response = await apiConfig.post('/usuarios/login', dadosUsuario)
  alert(response.data.mensagem)

  if(permanecerConectado) {
    localStorage.setItem('token', response.data.dados.token)
    localStorage.setItem('email', response.data.dados.email)

  } else {
    sessionStorage.setItem('token', response.data.dados.token)
    sessionStorage.setItem('email', response.data.dados.email)
  }

  return true

  } catch(erro) {
    alert(erro.response.data.mensagem) 
    return false
  }
}