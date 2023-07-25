import { Avaliacao, NotaAvaliacao } from "../types/Avaliacao";
import { Base } from "./Base";
import { Comentario } from "./Comentario";
import { listaUsuarios } from "../database/Usuarios";

export class Produto extends Base {
  private _avaliacoes: Array<Avaliacao>;
  private _comentarios: Array<Comentario>;

  constructor(nome: string, private _valor: number) {
    super(nome)
    this._avaliacoes = [];
    this._comentarios = [];
  }

  public visualizar(): void {
    console.log(`Produto: ${this.nome} - ${this._valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
  }

  public visualizarDetalhes(): void {
    this.visualizar()

    this._comentarios.forEach((comentario) => {
      console.log(`${comentario.usuario.username}: ${comentario.texto}`)
    })
  }

  public addComentario(comentario: Comentario): void {
    const existe = this._comentarios.some((com) => com.id === comentario.id)

    if(existe) {
      console.log('Este comentário já existe')
      return
    }

    this._comentarios.push(comentario)
    console.log('comentario adicionado com sucesso')
  }

  public addAvaliacao(avaliacao: NotaAvaliacao, username: string): void {
    const existeUsuario = listaUsuarios.some((usuario) => usuario.username === username)

    if(existeUsuario) {
      console.log('Esse usuario não existe')
    }

    const existe = this._avaliacoes.some((aval) => aval.username === username)

    if(existe) {
      console.log('Este usuario já avaliou este produto')
      return
    }

    const novaAvaliacao: Avaliacao = {
      avaliacao,
      username
    }

    this._avaliacoes.push(novaAvaliacao)
    console.log(novaAvaliacao)

  }

  get valor(): number {
    return this._valor
  }
}