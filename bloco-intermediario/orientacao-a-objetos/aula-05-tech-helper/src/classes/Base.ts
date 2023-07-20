import { randomUUID } from "crypto";

export abstract class Base {
  private _id: string;

  constructor(private _nome: string) {
    this._id = randomUUID()
  }
}