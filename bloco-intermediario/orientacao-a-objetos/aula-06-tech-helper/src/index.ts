import { Comentario } from "./classes/Comentario"
import { Produto } from "./classes/Produto"
import { Usuario } from "./classes/Usuario"
import { listaUsuarios } from "./database/Usuarios"

console.log("\n---------------\n")

//usuarios
const joao = new Usuario('joao pereira', '@joao_pereira')
const maria = new Usuario('maria da silva', '@maria_silva')

listaUsuarios.push(joao)
listaUsuarios.push(maria)

//produtos
const camisa = new Produto('Camisa Lacosti', 30)
const calca = new Produto('calça muito boa', 200)
const sapato = new Produto('tenis 12 molas', 500)
const chinelo = new Produto('havaiana', 20)


console.log("\n--------------------------------\n")

//adiciona produtos
joao.addProduto(camisa)
joao.addProduto(camisa)
joao.addProduto(camisa)
joao.addProduto(calca)
joao.addProduto(sapato)
console.log("\n--------------------------------\n")

//logs
joao.visualizarProdutos()
joao.visualizar()
console.log("\n--------------------------------\n")

joao.removeProduto(chinelo)
joao.removeProduto(calca)
console.log("\n--------------------------------\n")


//logs produto
sapato.visualizar()

console.log("\n--------------------------------\n")
//comentarios
const comentario1 = new Comentario('Produto muito bom, original pakas.', maria)
const comentario2 = new Comentario('Produto razoavel, nao é original.', joao)

// adicionar comentarios aos produtos
camisa.addComentario(comentario1)
camisa.addComentario(comentario1)
camisa.addComentario(comentario2)

console.log("\n--------------------------------\n")
camisa.visualizarDetalhes()

//adicionar avaliacao
calca.addAvaliacao(4, 'joao')