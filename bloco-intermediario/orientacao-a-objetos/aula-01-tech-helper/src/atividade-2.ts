//2. Crie uma função que receba uma lista de objetos contendo nota e
//peso, realize a média das notas considerando o peso. Exemplos:
//Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
//Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

export interface AlunoNotas {
  n1: number;
  n2: number;
  p1: number;
  p2: number
}

export function calcularMediaNotas(listaNotasAluno: AlunoNotas): number {
  const n1: number = listaNotasAluno.n1
  const n2: number = listaNotasAluno.n2
  const p1: number = listaNotasAluno.p1
  const p2: number = listaNotasAluno.p2

  const resultado2Notas: number = (n1 * p1) + (n2 * p2) / 2

  return resultado2Notas
}