import { randomUUID } from "crypto";
import { Growdever } from "./Growdever";

interface DetalhesTurma {
  edicao: string;
  programa: string;
  alunos: Growdever[]
}

export class Turma {
  private _id: string;
  private _alunosMatriculados: Growdever[];

  constructor(private _edicao: string, private _programa: string) {
    this._id = randomUUID()
    this._alunosMatriculados = []
  }

  public listarAlunos(): Growdever[] {
    return this._alunosMatriculados
  }

  public removerAluno(idAluno: string): boolean {
    const indice = this._alunosMatriculados.findIndex((aluno) => aluno.id === idAluno)

    if(indice === -1) {
      console.log('Aluno não encontrado')
      return false
    }

    this._alunosMatriculados.splice(indice, 1)
    return true
   }

   public matricularAluno(novoALuno: Growdever): void {
    this._alunosMatriculados.push(novoALuno)
   }

   public detalheTurma(): DetalhesTurma {
    return {
      edicao: this._edicao,
      programa: this._programa,
      alunos: this._alunosMatriculados
    }
   }
}