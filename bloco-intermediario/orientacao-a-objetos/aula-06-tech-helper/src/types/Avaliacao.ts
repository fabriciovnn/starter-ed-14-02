export type NotaAvaliacao = 1 | 2 | 3 | 4 | 5

export interface Avaliacao {
  avaliacao: NotaAvaliacao;
  username: string;
}