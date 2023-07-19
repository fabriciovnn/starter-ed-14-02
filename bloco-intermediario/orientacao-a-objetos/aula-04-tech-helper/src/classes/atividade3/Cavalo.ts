import { Animal } from "./Animal";

export class Cavalo extends Animal {
  constructor(patas: number, rabo: boolean) {
    super(patas, rabo);
  }

  correr(metros: number): void {
    console.log(`O cavalo andou ${metros} metros`);
  }

  relinchar(): void {
    console.log("som de cavalo relinchando");
  }
}