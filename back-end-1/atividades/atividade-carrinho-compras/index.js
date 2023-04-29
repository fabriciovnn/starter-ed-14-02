const carrinho = {
  produtosLista: [],
  pagamento: {},
  totalCompra: 0
}

function adicionaritens() {
  const produto = {}
  produto.nome = prompt('digite o nome do produto')
  produto.precoUnitario = Number(prompt('informe o preco unitário do produto'))
  produto.quantidade = Number(prompt('Informe a quantidade do produto'))
  
  carrinho.produtosLista.push(produto)
  carrinho.totalCompra += (produto.precoUnitario * produto.quantidade)

}

function formaPagamento() {
  const validarPagamento = prompt('Informe a forma de pagamento: CREDITO, DEBITO, PIX ou DINHEIRO').toUpperCase();
  
  switch(validarPagamento) {
    case 'CREDITO': case 'CRÉDITO':
      carrinho.pagamento.modalidade = validarPagamento
      carrinho.pagamento.quantidadeParcelas = Number(prompt('digite a quantidade de parcelas'))
      carrinho.pagamento.desconto = 0
      if((Number.isInteger(carrinho.pagamento.quantidadeParcelas)) && (carrinho.pagamento.quantidadeParcelas > 0)) {
        if(carrinho.pagamento.quantidadeParcelas <= 5) {
          carrinho.pagamento.acrescimo = (carrinho.totalCompra * 5) / 100
        } else if(carrinho.pagamento.quantidadeParcelas <= 10) {
          carrinho.pagamento.acrescimo = (carrinho.totalCompra * 10) / 100
        } else {
          carrinho.pagamento.acrescimo = (carrinho.totalCompra * 15) / 100
        }
        carrinho.pagamento.valorParcela = (carrinho.totalCompra + carrinho.pagamento.acrescimo) / carrinho.pagamento.quantidadeParcelas
      } else {
        alert('Quantidade de Parcelas inválida')
      }
      break;
    case 'DEBITO': case 'DÉBITO':
      carrinho.pagamento.modalidade = validarPagamento
      carrinho.pagamento.quantidadeParcelas = 0
      carrinho.pagamento.acrescimo = 0
      carrinho.pagamento.valorParcela = 0
      carrinho.pagamento.desconto = (carrinho.totalCompra * 5) / 100
      break;
    case 'PIX': case 'DINHEIRO':
      carrinho.pagamento.modalidade = validarPagamento
      carrinho.pagamento.quantidadeParcelas = 0
      carrinho.pagamento.acrescimo = 0
      carrinho.pagamento.valorParcela = 0
      carrinho.pagamento.desconto = (carrinho.totalCompra * 10) / 100
      break;
    default:
      alert('Forma de pagamento inválida')
    break;
  }
}

function resumoCompra() {
  document.write('<h2>Resumo da compra:</h2>')
  for(let key of carrinho.produtosLista) {
    let totalProduto = key.precoUnitario * key.quantidade
    document.write(`<p>Nome do produto: ${key.nome}</p>`)
    document.write(`<p>Preço unitario: ${key.precoUnitario.toFixed(2)}R$</p>`)
    document.write(`<p>Quantidade: ${key.quantidade}</p>`)
    document.write(`<p>Preço total do produto: ${totalProduto.toFixed(2)}R$</p></br>`)
  }

  if(carrinho.pagamento.modalidade === 'CREDITO') {
    let totalAcrescimo = carrinho.totalCompra + carrinho.pagamento.acrescimo
    document.write(`<p>Modalidade: ${carrinho.pagamento.modalidade}</p>`)
    document.write(`<p>Total da Compra: ${carrinho.totalCompra.toFixed(2)}R$</p>`)
    document.write(`<p>Acrescimo: ${(carrinho.pagamento.acrescimo / carrinho.totalCompra) * 100}%</p>`)
    document.write(`<p>Total com acrescimo: ${totalAcrescimo.toFixed(2)}R$</p>`)
    document.write(`<p>Quantidade Parcelas: ${carrinho.pagamento.quantidadeParcelas}</p>`)
    document.write(`<p>Valor das Parcelas: ${carrinho.pagamento.valorParcela.toFixed(2)}R$</p>`)
  } else {
    let totalDesconto = carrinho.totalCompra - carrinho.pagamento.desconto
    document.write(`<p>Modalidade: ${carrinho.pagamento.modalidade}</p>`)
    document.write(`<p>Total da Compra: ${carrinho.totalCompra.toFixed(2)}R$</p>`)
    document.write(`<p>Desconto: ${(carrinho.pagamento.desconto / carrinho.totalCompra) * 100}%</p>`)
    document.write(`<p>Total com desconto: ${totalDesconto.toFixed(2)}R$</p>`)
  }
}

// Crie um algoritmo que adicione produtos em um carrinho de compras de uma loja virtual. Para isso crie um objeto para estruturar os dados desse carrinho de compras. Será necessário armazenar a lista de produtos que foram adicionados pelo usuario e informações sobre o pagamento. Sabendo que:

//     Todo produto deve possuir NOME, QUANTIDADE e PREÇO UNITÁRIO, sendo estes, informados pelo usuário;

//     O carrinho de compras deve possuir a LISTA DE PRODUTOS, TOTAL DA COMPRA e dados sobre o PAGAMENTO escolhido pelo usuário;

//     O PAGAMENTO deve possuir a MODALIDADE escolhida pelo usuário, sendo valores válidos para essa propriedade apenas: CREDITO, DEBITO, PIX e DINHEIRO; O sistema não deve aceitar outro valor como forma de pagamento;
//     O PAGAMENTO deve possuir QUANTIDADE DE PARCELAS, DESCONTO, ACRÉSCIMO e VALOR DA PARCELA além da MODALIDADE

//     Se a modalidade escolhida pelo usuário for CREDITO, o usuário deverá informar a quantidade de parcelas e o sistema deverá calcular o valor do acréscimo com base na seguinte tabela: até 5x - 5% do total da compra até 10x - 10% do total da compra acima de 10 - 15% do total da compra

// OBS: o TOTAL DA COMPRA é a soma de (preço unitario * quantidade) de todos os produtos adicionados na LISTA DE PRODUTOS

//     Se a modalidade escolhida pelo usuário for CRÉDITO, o sistema deverá preencher a propriedade desconto com o valor 0 (zero) e calcular o valor da parcela considerando a formula: (totalCompra + acrescimo) / quantidadeParcelas

//     Se a modalidade escolhida pelo usuário for DÉBITO, PIX ou DINHEIRO o sistema deverá preencher a propriedade QUANTIDADE DE PARCELAS, ACRESCIMO e VALOR DA PARCELA com o valor 0

//     Se a modalidade escolhida pelo usuário for DÉBITO, o sistema deverá calcular e preencher a propriedade DESCONTO com o valor equivalente à 5% sobre o valor da compra;

//     Se a modalidade escolhida pelo usuário for PIX ou DINHEIRO, o sistema deverá calcular e preencher a propriedade DESCONTO com o valor equivalente à 10% sobre o valor da compra;

// Ao final o sistema deverá mostrar um resumo final sobre o carrinho de compras com:

//     Produtos: nome, quantidade, preço unitário e valor total do produto (preço * quantidade)
//     Pagamento: Se a MODALIDADE for CREDITO mostrar MODALIDADE, TOTAL DA COMPRA, ACRESCIMO, TOTAL COM ACRESCIMO, QUANTIDADE DE PARCELAS e VALOR DA PARCELA Se a MODALIDADE for DÉBITO, PIX ou DINHEIRO mostrar MODALIDADE, TOTAL DA COMPRA, DESCONTO e TOTAL COM DESCONTO