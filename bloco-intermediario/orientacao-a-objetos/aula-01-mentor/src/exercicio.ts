
// Crie uma função que receba 2 números e retorne a média.

function calcularMedia(a: number, b: number): number{
  const media: number = (a + b) / 2
  console.log(`A média calculada é ${media}`)
  return media
}

//Crie uma função que receba uma nota (número), caso essa nota seja menor que 6, exiba um console dizendo reprovado.

function calcularNota(a: number): string{
  if(a < 6) {
    console.log('reprovado')
    return 'reprovado'
  }
  console.log('aprovado')
  return 'aprovado'
}