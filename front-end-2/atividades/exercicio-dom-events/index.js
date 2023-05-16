const container = document.querySelector('#container')

// async function pegarDadosUsuario() {
//   const axiosMethod = await axios.get('https://reqres.in/api/users/2')

  // const fetchMethod = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  // const data = await fetchMethod.json()
  //com fetch é necessario passar o metodo da requisição. sem informar é GET
//com fetch é preciso tratar os dados, com o axios é feito por baixo dos panos.
  // console.log(axiosMethod)
  // console.log(data)

//   const dadosUsuario = axiosMethod.data

//   container.innerHTML = `
//   <img src=${dadosUsuario.data.avatar} />
//   <h1>${dadosUsuario.data.first_name}</h1>
//   `
// }

// pegarDadosUsuario()


async function renderizarImagens() {
  const response = await api.get('/photos')
  const data = response.data

if(response.status !== 200) {
  alert('não deu certo')
} else {
    data.forEach((foto, index) => {
      if(index > 5) return
      
      container.insertAdjacentHTML('afterbegin', `
      <div>
        <img src=${foto.url} />
        <h1>${foto.title}</h1>
      </div>
      `)
        })
        console.log(response)
        console.log(response.status)
      }
}

renderizarImagens()