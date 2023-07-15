//2. Crie uma classe que modele uma bola:
//a. Atributos
//  i. Cor
//  ii. Circunferência
//  iii. Material
//b. Métodos
//  i. Trocar Cor
//  ii. Mostrar cor

export class Bola {
  cor: string;
  circunferencia: number;
  material: string;

  constructor(cor: string, circunferencia: number, material: string) {
    this.cor = cor
    this.circunferencia = circunferencia
    this.material = material
  }

  trocarCor(novaCor: string): void {
    this.cor = novaCor
  }

  mostrarCor(): void {
    console.log(this.cor)
  }
}