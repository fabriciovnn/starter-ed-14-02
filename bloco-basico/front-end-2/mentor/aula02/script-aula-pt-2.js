//utilizando fetch api

//.then - pega a resposta e entao (then) faz alguma coisa
function pegarUsuarios() {
  const user = fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then(data => console.log(data))
}
pegarUsuarios()


//await - espera a resposta e entao continue executando. é necessário colocar o async antes de function para poder executar o await

// com async e await com fetch
async function pegarUsuarios2() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  // sem o await de data, ele não esperaria o response e iria executar mesmo assim
  const data = await response.json()
  console.log(data)
}

pegarUsuarios2()


//async await e axios
//com ele não é necessário fazer o tratamento dos dados. é possivel acessar a propriedade .data
async function pegarUsuarios3() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  // sem o await de data, ele não esperaria o response e iria executar mesmo assim
  // const data = await response.json()
  console.log(response.data)
  const listaElemento = document.getElementById('list')

  response.data.forEach(user => {
    listaElemento.innerHTML += ` 
    <div style="border: 1px solid black">
      <h1>${user.name}</h1>
      <h2>${user.username}</h2>
      <h3>${user.phone}</h3>
    </div>
    `
  })
}

pegarUsuarios3()