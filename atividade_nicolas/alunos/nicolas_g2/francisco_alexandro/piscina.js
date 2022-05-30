import prompt from 'prompt-sync'
const input = prompt()

function main(){
  
  //entrada das medidas piscina
  console.log('\n\tGastos de uma Piscina\n')
  const largura_piscina = Number(input('Digite a largura da piscina em cm: '))
  const comprimento_piscina = Number(input('Digite o comprimento da piscina em cm: '))
  const profundidade_piscina = Number(input('Digite a profundidade da piscina em cm: '))
  
  //processamento
  const capacidade = largura_piscina * comprimento_piscina * profundidade_piscina
  const capacidade_litros = capacidade / 1000
  const valor_recomendado = 0.85 * capacidade_litros
  
  console.log(`\nRecomenda-se encher ${valor_recomendado.toFixed(1)} litros\n`)
  
  //valor por cada 1000 L
  const valor_litro = Number(input('Digite o valor por cada 1000 L: '))
  
  //valor gasto para encher piscina
  const valor_gasto = calculo_gasto(valor_recomendado,valor_litro)

  console.log(`\nGasto para encher a piscina: R$ ${valor_gasto.toFixed(2)}`)
  
  //valor em litros para repor
  const reposicao = 0.1 * valor_recomendado
  
  //valor gasto para repor
  const valor_gasto_reposicao = calculo_gasto(reposicao,valor_litro)
  
  console.log(`Gasto mensal para reposição: R$ ${valor_gasto_reposicao.toFixed(2)}`)
}
main()

//Calcula gasto para encher certa quantidade de litros
function calculo_gasto(litros,valor_litro){
  const decimal = litros - Math.trunc(litros)
  
  let gasto = (litros/1000) * valor_litro
  
  //Se litros nao for inteiro, adiciona mais 1000
  if(decimal != 0)
  {
  gasto = gasto + valor_litro
  }

return gasto
}