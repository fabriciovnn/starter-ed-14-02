import { Aluno as AlunoDB} from "@prisma/client";
import repository from "../database/prisma.connection";
import { CadastrarAlunoDTO } from "../dtos";
import { Aluno } from "../models";



export class AlunoService {
  public async listarTodos() {}

  public async verificarEmailExistente(email: string): Promise<boolean> {
    const alunoExiste = await repository.aluno.findUnique({
      where: {email: email},
      include: {endereco: true}
    });

    return !!alunoExiste;
  }

  public async listarPorID() {}

  public async cadastrar(dados: CadastrarAlunoDTO) {
    const alunoDB = await repository.aluno.create({ 
      data: {email: dados.email,
            nomeCompleto: dados.nome, 
            password: dados.senha, 
            idade: dados.idade}
        });

        return this.mapToModel(alunoDB);
  }

  public async atualizar() {}

  public async deletar() {}

  private mapToModel(alunoDB: AlunoDB): Aluno {
    //pegar o dado de um aluno do banco e transformar em dado de um aluno da api

    return new Aluno(alunoDB.id, alunoDB.nomeCompleto, alunoDB.email, alunoDB.password, alunoDB.idade ?? undefined);
    

  }
}