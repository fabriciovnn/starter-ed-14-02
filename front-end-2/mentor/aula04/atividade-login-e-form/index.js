const formElement = document.querySelector('form')

formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = formElement.nome.value
    const email = formElement.email.value
    const senha = formElement.senha.value


    console.log({
        name,
        email,
        senha

    })
})