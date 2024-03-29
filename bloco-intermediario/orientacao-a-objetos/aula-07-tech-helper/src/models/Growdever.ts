import { randomUUID } from "crypto";
import { Habilidade } from "./Habilidade";

export interface DetalheAluno {
  id: string;
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
      id: this._id,
      nome: this._nome,
      idade: this._idade,
      matricula: this._matricula
    }
  }

 // METODOS ACESSORES => somente leitura
 public get id(): string {
  return this._id;
}

public get nome(): string {
  return this._nome;
}

// METODO MODIFICADORES => atualização do atributo
public set nome(novoNome: string) {
  // lógica de validação do novo nome
  if (novoNome !== "") {
    this._nome = novoNome;
  } else {
    console.log(
      "Nome não pode ser alterado. Não tem caracters mínimos para alteração."
    );
  }
}

public get idade(): number {
  return this._idade;
}

public set idade(novaIdade: number) {
  this._idade = novaIdade;
  }
}
