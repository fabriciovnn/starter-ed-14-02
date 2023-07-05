import express from 'express';

//criacao do app api servidor
const app = express();

//parse / converte o JSON para o formato que o dado for(array, objeto, string, number...)
app.use(express.json());

app.listen(8080, () => console.log("Servidor iniciado"));

//Declaracao / definicao das rotas e seus verbos
// Request vai ter todos os dados que forem enviados na requisição
// Response é a resposta que será dada/enviada para a solicitação feita na respectiva rota

//rota de apresentação da api
app.get('/', (request, response) => {
return response.status(200).json({status: 200, mensagem: "ok"});
});

const listaGrowdevers = [];
/*
id,
nome,
matricula,
turma,
skills
*/

//CADASTRO - CREATE - post
app.post('/growdevers', (request, response) => {
  const dados = request.body
  if(!dados.id) {
    return response.status(400).json("O campo id é obrigatório")
  }
  if(!dados.nome) {
    return response.status(400).json("O campo nome é obrigatório")
  }
  if(!dados.matricula) {
    return response.status(400).json("O campo matricula é obrigatório")
  }
  if(!dados.turma) {
    return response.status(400).json("O campo turma é obrigatório")
  }
  if(!dados.skills) {
    return response.status(400).json("O campo skills é obrigatório")
  }
//recebimento de skills em um array "['JS', 'HTML', 'CSS']"
  listaGrowdevers.push(dados)
  console.log(listaGrowdevers)
  return response.status(201).json('Growdever criado com sucesso!')
})

const carros = [
  {
    id: 40,
    ano: 2000,
    modelo: 'civic'
  },
  {
    id: 50,
    ano: 2005,
    modelo: 'corolla'
  },
  {
    id: 60,
    ano: 2015,
    modelo: 'gol'
  }
];

app.get('/listar-carros', (request, response) => {
  return response.json(carros)
})


//path params
// quando quer alguma propriedade especifica
app.get('/listar-carros/:id', (request, response) => {
  const idInformado = Number(request.params.id)
  const carroEncontrado = carros.find(carro => carro.id === idInformado)

  if(carroEncontrado) {
    return response.json(carroEncontrado)
  } else {
    return response.json({ error:' Nenhum carro foi encontrado'})
  }
})

//Query params
// Para fazer algum filtro ou ordenaçao
//http://localhost:8080/listar-carros?ordena=preco&order=asc
//http://localhost:8080/listar-carros?filtrar=ano
  app.get('/listar-carros', (request, response) => {
    console.log(request.query)
    const query = request.query.filtrar
    if( query === 'ano') {
      carros.sort((a, b) => {
        if(a.ano > b.ano) return 1
        if(a.ano < b.ano) return -1

        return 0
      })
    }


    response.status(201).json(carros[0])
  })

app.put('/editar-carro/:id', (request, response) => {
  const id = Number(request.params.id)
  const veiculoExiste = carros.findIndex(carro => carro.id === id)
  const novoAno = request.body.ano
  console.log('chegou aqui')

  if(veiculoExiste > 0) {
    carros[veiculoExiste].ano = novoAno
    return response.status(203).json(carros[veiculoExiste])
  } else {
    return response.status(404).json({ error: 'Carro não encontrado'})
  }
})
