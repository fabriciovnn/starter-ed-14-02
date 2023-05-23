const formElement = document.querySelector('form')


formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const email = formElement.email.value
    const senha = formElement.senha.value


    if(email === 'admin@teste.com' && senha === 'admin') {
        const usuario = {
            email,
            senha,
        }

        localStorage.setItem('data', JSON.stringify(usuario))

        document.location.href = "http://127.0.0.1:5501/recados.html"
    } else {
        alert('Email ou senha estão incorretos!')
        return;
    }
    
})
