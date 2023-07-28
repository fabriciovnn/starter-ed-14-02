import { randomUUID } from "crypto";

export class Habilidade {
  private _id: string

  constructor(private _descricao: string) {
    this._id = randomUUID()
  }
}