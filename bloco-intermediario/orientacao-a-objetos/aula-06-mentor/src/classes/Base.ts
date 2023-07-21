import { randomUUID } from "crypto"

export abstract class Base {
  protected id: string
  
  constructor() {
    this.id = randomUUID()
  }

  public mostrarDados(): void {
    console.log(this.id)
  }
}