import { Produto } from "./classes/Produto"
import { Usuario } from "./classes/Usuario"

console.log("\n---------------\n")

//usuarios
const joao = new Usuario('joao pereira', '@joao_pereira')

//produtos
const camisa = new Produto('Camisa Lacosti', 30)
const calca = new Produto('calça muito boa', 200)
const sapato = new Produto('tenis 12 molas', 500)


//adiciona produtos
joao.addProduto(camisa)
joao.addProduto(camisa)
joao.addProduto(camisa)
joao.addProduto(calca)
joao.addProduto(sapato)

console.log(joao)


