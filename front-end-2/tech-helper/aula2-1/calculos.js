/* Desenvolva aqui a rotina */
const btnCalc = document.querySelector('#btn_calcular')

function calcularReceita() {
   const valorBase = document.querySelector('#valor_base').value
 const valorTransporte = document.querySelector('#valor_transporte').value
 const valorAlimentacao = document.querySelector('#valor_alimentacao').value
 const receitaTotal = document.querySelector('#valor_receita')

   const total = Number(valorBase) + Number(valorTransporte) + Number(valorAlimentacao)

   receitaTotal.value = total

   return receitaTotal
}

function calcularDescontos() {
     const valorAutomovel = document.querySelector('#valor_automovel').value
   const faltas = document.querySelector('#faltas').value
   const valorDescontos = document.querySelector('#valor_descontos')

   const descontosTotal = Number(valorAutomovel) + Number(faltas)

   valorDescontos.value = descontosTotal

   return valorDescontos
}

function calcularSalario() {
  const somaReceita = calcularReceita()
  const somaDescontos = calcularDescontos()

  const valorTotal = document.querySelector('#valor_total')

  valorTotal.value = somaReceita.value - somaDescontos.value
}

btnCalc.addEventListener('click', calcularSalario)
