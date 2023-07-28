import { randomUUID } from "crypto";
import { get } from "https";

export class Habilidade {
  private _id: string

  constructor(private _descricao: string) {
    this._id = randomUUID()
    
  }

  public get descricao(): string {
    return this._descricao
  }
}