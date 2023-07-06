import {calcularMedia} from './atividade-1'

//atividade 1
const retornoMedia = calcularMedia(6, 6)
console.log(retornoMedia)

//atividade 2
import {AlunoNotas ,calcularMediaNotas} from './atividade-2'

let aluno: AlunoNotas = {
  n1: 2,
  n2: 2,
  p1: 1,
  p2: 1
}

const resultadoMedia2Notas = calcularMediaNotas(aluno)
console.log(resultadoMedia2Notas)

