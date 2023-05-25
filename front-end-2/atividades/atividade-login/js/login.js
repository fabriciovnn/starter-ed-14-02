// 1 - captura dos dados digitados nos campos

// validar 



// 2- função/logica para disparo da requisição de login ao back-end e tratamento da resposta da API
//Endpoint: /usuarios/login

// 3 - Verificar se o campo "mantenha-me conectado" está marcado. Se sim, armazenar o token (retornado pela API) e o e-mail do usuario logado (o que foi digitado no input) no localStorage.
//Se não, armazenar o token ( retornado pela API) e o e-mail do usuário logado ( que foi digitado no input) no sessionStorage.

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
   window.location.href = './home.html'
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
  const response = await apiConfig.post('/login', dadosUsuario)
  alert(response.data.mensagem)

  if(permanecerConectado) {
    // localStorage.setItem('dadosUsuario', JSON.stringfy(response.data.dados))
    localStorage.setItem('token', response.data.dados.token)
    localStorage.setItem('email', response.data.dados.email)

  } else {
    // sessionStorage.setItem('dadosUsuario', JSON.stringfy(response.data.dados))
    sessionStorage.setItem('token', response.data.dados.token)
    sessionStorage.setItem('email', response.data.dados.email)
  }

  // const storage = sessionStorage.getItem('dadosUsuario')
  // console.log(JSON.parse(storage))
  return true

  } catch(erro) {
    alert(erro.response.data.mensagem) 
    return false
  }
}