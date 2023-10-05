import { Request, Response } from "express";
import repository from "../database/prisma.connection";
import { Aluno } from "../models";
import { Endereco } from "../models/endereco.mode";

export class AlunoController {
  public async create(req: Request, res: Response) {
    const {nome, email, senha, idade} = req.body;
    
   const alunoExiste = await repository.aluno.findUnique({
     where: {email: email},
     include: {endereco: true}
   });

    if(alunoExiste) {
      return res.status(400).json({ok: false, mensagem: 'email já existe'})
    }

    const alunoDB = await repository.aluno.create({ 
      data: {email: email,
            nomeCompleto: nome, 
            password: senha, 
            idade: idade}
        });

    const novoUsuario = new Aluno(alunoDB.id, alunoDB.nomeCompleto, alunoDB.email, alunoDB.password, alunoDB.idade ?? undefined);

    return res.status(201).json({ok: true, mensagem: 'aluno cadastrado com sucesso!', dados: novoUsuario.toJSON()});
  }

  public async listAll(req: Request, res: Response) {
    const alunosDB = await repository.aluno.findMany({
      orderBy: { nomeCompleto: 'desc'},
      include: { endereco: true}
    });

   const alunosModel = alunosDB.map((alunoDB) => {
      if(alunoDB.endereco) {
        const endereco = new Endereco(
          alunoDB.endereco.id,
           alunoDB.endereco.logradouro, 
           alunoDB.endereco.cep, 
           alunoDB.endereco.numero, 
           alunoDB.endereco.cidade, 
           alunoDB.endereco.uf,
           alunoDB.endereco.complemento ?? undefined
           );

           return new Aluno(alunoDB.id, alunoDB.nomeCompleto, alunoDB.email, alunoDB.password, alunoDB.idade ?? undefined, endereco)
      }

     return new Aluno(alunoDB.id, alunoDB.nomeCompleto, alunoDB.email, alunoDB.password, alunoDB.idade ?? undefined)
    });

    return res.status(200).json({
      ok: true,
      mensagem: 'Alunos listados com sucesso',
      data: alunosModel.map((a) => a.toJSON()),
    })
  }

  public async listByID(req: Request, res: Response) {
    const { id } = req.params;

    const alunoDB = await repository.aluno.findUnique({
      where: {
        id: id
      }
    });

    if(!alunoDB) {
      return res.status(404).json({
        ok: false,
        mensagem: 'Aluno não encontrado',
      })
    }

    if(id.length !== 36) {
      return res.status(400).json({
        ok: false,
        mensagem: 'ID invalido',
      })
    }

    return res.status(200).json({
      ok: true,
      mensagem: 'Aluno encontrado com sucesso',
      dados: new Aluno(alunoDB.id, alunoDB.nomeCompleto, alunoDB.email, alunoDB.password, alunoDB.idade ?? undefined).toJSON(),
    })
  }

  public update() {}

  public delete() {}
}