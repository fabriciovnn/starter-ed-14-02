//Aluno -> identificador da classe

//ATRIBUTOS
/*
    nomeCompleto: string = "Wallace Dev";
  CPF: string;
  idade: number;
  habilidades: string[];
  notas: number[];
  turma: string;
*/

//METODOS
/*
    aprenderHabilidade() {
    // aqui é uma rotina que vai executar para modificar uma propriedade
  }

  realizarAtividade() {
    // aqui é uma rotina que vai executar para modificar uma propriedade
  }
*/

export class Aluno {
  nomeCompleto: string = "";
  CPF: string = "";
  idade: number = 0;
  habilidades: string[] = [];
  notas: number[] = [];
  turma: string = "";

  //construtor é a função padrão que sempre executa quando a gente instancia uma classe, serve para setarmos os valores para os atributos da classe
  constructor(nomeAluno: string, CPFAluno: string, idade: number) {
    this.nomeCompleto = nomeAluno;
    this.CPF = CPFAluno;
    this.idade = idade;

    //default
    this.habilidades = [];
    this.notas = [];
    this.turma = 'Programa Starter - 14ed - Turma 2';
  }

  aprenderHabilidade(novaHabilidade: string): void {
    // aqui é uma rotina que vai executar para modificar uma propriedade
    this.habilidades.push(novaHabilidade)
  }

  realizarAtividade(notaAtividade: number): void {
    // aqui é uma rotina que vai executar para modificar uma propriedade
    this.notas.push(notaAtividade);
  }

  mudarTurma(novaTurma: string): void {
        // aqui é uma rotina que vai executar para modificar uma propriedade
    this.turma = novaTurma;
  }
}