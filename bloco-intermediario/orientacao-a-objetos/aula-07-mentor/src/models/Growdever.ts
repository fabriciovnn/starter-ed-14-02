import { randomUUID } from "crypto";
import { Habilidade } from "./Habilidade";

interface DetalheAluno {
  nome: string;
  idade: number;
  matricula: string;
}

export class Growdever {
  private _id: string;
  private _habilidades: Array<Habilidade>;
  private _matricula: string;

  constructor(private _nome: string, private _idade: number) {
    this._id = randomUUID()
    this._habilidades = []
    this._matricula = new Date().getTime().toString()
  }

  public addHabilidade(novaHabilidade: Habilidade): void {
    this._habilidades.push(novaHabilidade)
  }

  public detalheAluno(): DetalheAluno {
    return {
      nome: this._nome,
      idade: this._idade,
      matricula: this._matricula
    }
  }

  public get id(): string {
    return this._id
  }

  public set nome(novoNome: string) {
    if(novoNome !== '') {
      this._nome = novoNome
    } else {
      console.log('Nome não pode ser alterado. Não tem caracters minimos para alteração')
    }
  }

  public set idade(novaIdade: number) {
    this._idade = novaIdade
  }
}