//Crie uma função que receba 2 números e retorne um objeto contendo a média e também um indicador booleano de aprovado/reprovado. Considere aprovado com média >= 6.

interface MediaAluno {
  media: number;
  resultado: resultadoMedia;
}

type resultadoMedia = 'APROVADO' | 'REPROVADO'

export function calcularMedia(n1: number, n2: number): MediaAluno {
  const resultadoMedia: number = (n1 + n2) / 2

  if(resultadoMedia < 6) {
    let resultadoAluno: MediaAluno = {
      media: resultadoMedia,
      resultado: 'REPROVADO'
      } 
    return resultadoAluno
    } else {
      let resultadoAluno: MediaAluno = {
        media: resultadoMedia,
        resultado: 'APROVADO'
      }
      return resultadoAluno
  }
}