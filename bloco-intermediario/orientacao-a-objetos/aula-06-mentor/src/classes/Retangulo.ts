import { FormatoDoElemento } from "../contratos/FormatoDoElemento";

export class Retangulo implements FormatoDoElemento {
  
  constructor(public comprimento: number, public altura: number) {

  }

  public desenhar (): void {
    console.log('desenhando o retangulo...')
    console.log(this.comprimento)
    console.log(this.altura)
  };
  public redimensionar (): void {
    console.log('redimensionando o retangulo...')
  };
  
}