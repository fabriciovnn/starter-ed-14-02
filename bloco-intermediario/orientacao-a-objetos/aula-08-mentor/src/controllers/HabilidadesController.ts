import {Request, Response} from 'express';
import { alunos } from '../database/alunos';
import { Habilidade } from '../models/Habilidade';

class HabilidadesController {
  public adicionar(request: Request, response: Response) {
    const { id } = request.params;
    const { descricao } = request.body;

    const indice = alunos.findIndex((aluno) => aluno.detalheAluno().id === id);

    if(indice === -1) {
      return response.status(400).json({
        ok: false,
        mensagem: 'Growdever não encontrado'
      })
    }

    if(!descricao || typeof descricao !== 'string') {
      return response.status(400).json({
        ok: false,
        mensagem: 'Informe uma descrição do tipo String'
      })
    }

    const novaHabilidade = new Habilidade(descricao)

    alunos[indice].addHabilidade(novaHabilidade)

    return response.status(201).json({
      ok: true,
      mensagem: 'Habilidade adicionada com sucesso',
      data: alunos[indice].detalheAluno()
    })
  }

  public listar(request: Request, response: Response) {
    const { id } = request.params
    
    const alunoEncontrado = alunos.find((aluno) => aluno.detalheAluno().id === id);

    if(!alunoEncontrado) {
      return response.status(400).json({
        ok: false,
        mensagem: 'Growdever não encontrado'
      })
    }

    return response.status(200).json({
      ok: false,
      mensagem: 'Habilidades criado com sucesso',
      data: alunoEncontrado.detalheAluno().habilidades
    })

  }
}

export default new HabilidadesController();