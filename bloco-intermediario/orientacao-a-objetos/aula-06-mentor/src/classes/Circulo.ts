import { FormatoDoElemento } from "../contratos/FormatoDoElemento";

export class Circulo implements FormatoDoElemento {
  
  constructor(public raio: number) {

  }

  public desenhar (): void {
    console.log('desenhando o circulo...')
    console.log(this.raio)
  };
  public redimensionar (): void {
    console.log('redimensionando...')
  };
  
}