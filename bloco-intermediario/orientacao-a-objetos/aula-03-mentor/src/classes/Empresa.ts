// Growdev, Google, Amazon

//razaoSocial, nomeFantasia, CNPJ, funcionarios, valorTotalPatrimonio

// por padrão toda empresa nasce com nenhum funcionário e com o valor do patrimônio zerado.

// uma empresa pode contratar e demitir funcionários

export class Empresa {
  razaoSocial: string = "";
  nomeFantasia: string = "";
  CNPJ: string = "";
  funcionarios: string[] = [];
  valorTotalPatrimonio: number = 0;

  constructor(razao: string, fantasia: string, cnpj: string) {
    this.razaoSocial = razao
    this.nomeFantasia = fantasia
    this.CNPJ = cnpj

    //default
    this.funcionarios = []
    this.valorTotalPatrimonio = 0 

  }

  contratar(funcionario: string): void {
    this.funcionarios.push(funcionario)
  }
  demitir(funcionario: string): string | undefined {
    const indexEncotrado = this.funcionarios.findIndex(item => item === funcionario)

    if(indexEncotrado < 0) {
      console.log('funcionario nao existe');
      return undefined;
    } else {
      const [ funcionarioExcluido ] = this.funcionarios.splice(indexEncotrado, 1);

      return funcionarioExcluido;
    }
  }
}
