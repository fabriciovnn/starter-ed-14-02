import "dotenv/config"
import express, { Request, Response } from 'express';
import cors from "cors";
import { alunos } from "./database/alunos";
import { DetalheAluno, Growdever } from "./models/Growdever";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORTA, () => console.log(`API Growdever rodando na porta ${process.env.PORTA}`))

app.get('/', (request: Request, response: Response) => {
  return response.status(200).json({ok: true, mensagem: 'API Growdevers'});
});

//Listar todos os growdevers
app.get('/growdevers', (request: Request, response: Response) => {
  let listaAlunos: DetalheAluno[] = [];
  
  if(alunos.length > 0) {
    listaAlunos = alunos.map((aluno) => aluno.detalheAluno());
  }

  return response.status(200).json({
    ok: true,
    mensagem: 'lista de growdevers buscada',
    data: listaAlunos
  })
})

//buscar growdever por id
app.get('/growdevers/:id', (request: Request, response: Response) => {
  const { id } = request.params

  const alunoEncontrado = alunos.find(aluno => aluno.id == id)

  if(!alunoEncontrado) {
    return response.status(400).json({
      ok: false,
      mensagem: 'Growdever não encontrado'
    })
  }

  return response.status(200).json({
    ok: true,
    mensagem: 'Growdever encontrado',
    data: alunoEncontrado.detalheAluno()
  })
});

//
app.post('/growdevers', (request: Request, response: Response) => {
  const { nome, idade } = request.body

  const idadeConvertido = Number(idade)

  if(!nome || !idade) {
    return response.status(400).json({
      ok: false,
      mensagem: 'É necessario informar nome e idade para criar um growdever'
    })
  }

  if(nome.length < 3 || typeof nome !== 'string') {
    return response.status(400).json({
      ok: false,
      mensagem: 'É necessário informar um nome do tipo string, com mais de 3 caracters'
    })
  }

  if(isNaN(idadeConvertido) || idadeConvertido <= 16) {
    return response.status(400).json({
      ok: false,
      mensagem: 'idade deve ser um número e no mínimo 17 anos'
    })
  }

  const novoAluno = new Growdever(nome, idadeConvertido)
  alunos.push(novoAluno)
  return response.status(201).json({ok: true, mensagem:'Growdever criado com sucesso', data: novoAluno.detalheAluno()})
});


//deletar growdever

// ATUALIZAR GROWDEVER
app.put("/growdevers/:id", (request: Request, response: Response) => {
  const { nome, idade } = request.body;
  const { id } = request.params;

  const indice = alunos.findIndex((aluno) => aluno.id === id);

  if (indice === -1) {
    return response
      .status(404)
      .json({ ok: false, mensagem: "Growdever não encontrado" });
  }

  if ((nome && typeof nome !== "string") || (nome && nome.length < 3)) {
    return response.status(400).json({
      ok: false,
      mensagem:
        "É necessário informar um nome do tipo string, com no mínimo 3 caracteres",
    });
  }

  let idadeConvertida = Number(idade);

  if ((idade && isNaN(idadeConvertida)) || (idade && idadeConvertida <= 16)) {
    return response.status(400).json({
      ok: false,
      mensagem:
        "É necessário informar uma idade do tipo number, maior que 16 anos",
    });
  }

  alunos[indice].nome = nome ?? alunos[indice].nome;
  alunos[indice].idade = idade ? idadeConvertida : alunos[indice].idade;

  return response.status(200).json({
    ok: true,
    mensagem: "Growdever atualizado com sucesso",
    data: alunos[indice].detalheAluno(),
  });
});
