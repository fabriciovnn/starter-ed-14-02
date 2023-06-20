//configurar a url base de requisições pra API
const api = axios.create({
  baseURL: 'http://localhost:8080'
})

const formLogin = document.getElementById('form-login')
const formCadastro = document.getElementById('form-cadastro')
const modalCadastrar = new bootstrap.Modal('#exampleModal') // diz que o id examplemodal sera usado para criar um modal do bootstrap

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  // VERIFICAR SE O FORMULÁRIO ESTÁ VÁLIDO
  const formularioValido = formLogin.checkValidity()

  if(!formularioValido) {
    formLogin.classList.add('was-validated')
    return
  }
  //logica login usuario

  formLogin.classList.remove('was-validated')
})

formCadastro.addEventListener('submit', async (e) => {
  e.preventDefault();


  //e.target = elemento que disparou o evento = formcadastro
  if(!e.target.checkValidity()) {
    e.target.classList.add('was-validated')
    return
  }

  e.target.classList.remove('was-validated')

  const nome = document.getElementById('cadastro-nome')
  const email = document.getElementById('cadastro-email')
  const senha = document.getElementById('cadastro-senha')
  const repetirSenha = document.getElementById('cadastro-repetir-senha')

  await cadastrarUsuario()
})

// http://localhost:8080/users - {name: 'joao', email: 'teste@teste.com', password: ''}
async function cadastrarUsuario(nome, email, senha) {
  const dadosUsuario = {
    name: nome,
    email: email,
    password: senha
  }

  // 401, 400, 404, ... 500
  try {
    const resposta = await api.post('/users', dadosUsuario)


    //resposta tem informações do AXIOS
    console.log(resposta.data)
  }catch (error) {
    //{..., response: {data: {message: 'Nossa mensagem'} }}
    alert(error.response.data.message)
  }
}