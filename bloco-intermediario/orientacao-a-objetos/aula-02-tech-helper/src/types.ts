//tipos atividade 1
type resultadoMedia = 'APROVADO' | 'REPROVADO'

export interface MediaAluno {
  media: number;
  resultado: resultadoMedia;
}

//tipos atividade 2
export interface Nota {
  valor: number,
  peso: number,
}

//tipos atividade 3
type TipoTransacao = 'ENTRADA' | 'SAIDA'

export interface Transacao {
  tipo: TipoTransacao;
  valor: number;
}

export interface Carteira {
  saldo: number;
  transacoes: Transacao[];
}

//tipos atividade 4
export interface Produto {
  valor: number;
  descricao: string;
  id: number;
}


//atividade5
export interface User {
  nome: string;
  idade: number;
  ocupacao?: string;
  salario?: number;
}

//atividade6
export type Diretor = User & {comissao: number}

//atividade7

export type Funcionario = User | Diretor