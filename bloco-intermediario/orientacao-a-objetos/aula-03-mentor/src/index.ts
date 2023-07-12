import prompt from 'prompt-sync';
import {Aluno} from './classes/Aluno';
import {Empresa} from './classes/Empresa'
const teclado = prompt();

const wallace = new Aluno('Wallace Dev', '000.111.222-33', 21);
wallace.aprenderHabilidade('JavaScript');
wallace.aprenderHabilidade('CSS');
wallace.mudarTurma('Programa Advanced - 2ed - Turma 1');
wallace.realizarAtividade(10);
wallace.realizarAtividade(20);

const anderson = new Aluno('Anderson Quym', '000.222.111-22', 25)
// console.log(anderson)
// console.log(wallace)


//atividade Empresa
const growdev = new Empresa('growdev ltda', 'Growdev', '49.789.123/0001-30')
console.log(growdev)

growdev.contratar('fabricio')
growdev.contratar('pedro')
console.log(growdev)

growdev.demitir('joao')


let opcao = 0

while(opcao !== 9) {
  //recebem o nome do funcionario a ser demitido
  //receber o nome do funcionario a ser contratado

  //receber opcao 1 contratar, receber opcao 2 demitir

  opcao = Number(teclado("informe a opcao desejada"))
}
