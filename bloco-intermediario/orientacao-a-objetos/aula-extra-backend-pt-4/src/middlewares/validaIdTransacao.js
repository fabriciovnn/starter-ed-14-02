import { carteira } from ".."

export function validaIdTransacao(request, response, next) {
  const { idTransacao } = request.params

  const indice = carteira.transacoes.findIndex((transacao) => transacao.id === idTransacao)

  if (indice === -1) {
    return response.status(404).json({
      mensagem: "Este ID informado não consta na base de dados!"
    })
  }

  request.body.indice = indice
  next()
}