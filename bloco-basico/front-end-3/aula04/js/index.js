const formLogin = document.getElementById('form-login')

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

const botaoConfirmar = document.getElementById('botao-confirmar')
const modalCadastrar = new bootstrap.Modal('#exampleModal') // diz que o id examplemodal sera usado para criar um modal do bootstrap

botaoConfirmar.addEventListener('click', () => {
  //logica cadastrar usuario 
  modalCadastrar.hide()
})