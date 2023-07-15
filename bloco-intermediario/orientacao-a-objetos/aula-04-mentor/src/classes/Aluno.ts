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

export abstract class Aluno {
  private _nomeCompleto: string = "";
  private _CPF: string = "";
  private idade: number = 0;
  private habilidades: string[] = [];
  private notas: number[] = [];
  private turma: string = "";

  //construtor é a função padrão que sempre executa quando a gente instancia uma classe, serve para setarmos os valores para os atributos da classe
  constructor(nomeAluno: string, CPFAluno: string, idade: number) {
    this._nomeCompleto = nomeAluno;
    this._CPF = CPFAluno;
    this.idade = idade;

    //default
    this.habilidades = [];
    this.notas = [];
    this.turma = 'Programa Starter - 14ed - Turma 2';
  }

  aprenderHabilidade(novaHabilidade: string): void {

  }

  realizarAtividade(notaAtividade: number): void {

  }

  mudarTurma(novaTurma: string): void {
    
  }

  public get CPF(): string {
    return this._CPF;
  }

  public set nomeCompleto(novoNome: string) {
    //registro dessa modificação
    const dataAtual = new Date();
    console.log(`Nome modificado em: ${dataAtual}`)

    if(novoNome.length < 3) {
      console.log('Nome não pode conter menos que 3 caracteres')
      return;
    }
      this._nomeCompleto = novoNome
  } 
}