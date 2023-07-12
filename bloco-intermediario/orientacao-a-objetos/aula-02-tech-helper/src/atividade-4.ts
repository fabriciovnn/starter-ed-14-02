//Crie um programa para cadastrar, listar e excluir produtos de uma
//lista com tipagem de Produto.
import {Produto} from './types'

let listaProdutos:  Produto[] = []

export function cadastrarProduto(produto: Produto) {
  const {descricao,id,valor} = produto
  if(produto.valor < 0) {
    console.log('O valor precisa ser maior que zero')
    return 
  }

  const novoProduto = {
    valor,
    descricao,
    id
  }

  listaProdutos.push(novoProduto)
  console.log(listaProdutos)
}

export function listarProdutos() {
  listaProdutos.forEach(produto => 
    console.log(produto)
    )
}

export function excluirProduto(id: number) {
  const produtosFiltrados = listaProdutos.filter((produto) => 
    produto.id !== id
  )

  listaProdutos = produtosFiltrados
}