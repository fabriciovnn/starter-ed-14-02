import { randomUUID } from "crypto";

export abstract class Base {
  private _id: string;


  constructor(private _nome: string) {
    this._id = randomUUID()
  }

  get id(): string {
    return this._id
  }

  get nome(): string {
    return this._nome
  }

  public visualizar(): void {
    console.log(`Nome: ${this._nome}`)
  }
}