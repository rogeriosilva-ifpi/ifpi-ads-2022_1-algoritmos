import prompt from 'prompt-sync'
const input = prompt()

function main(){
  //entrada valor inicial
  const valor_inicial = Number(input('Valor do Litro de Gasolina: '))
  
  //calculo da composição
  let petrobras = 0.36 * valor_inicial
  let icms = 0.27 * valor_inicial
  let etanol_onidro = 0.13 * valor_inicial
  let pis_pasep = 0.1 * valor_inicial
  let distribuicao_e_revenda = 0.14 * valor_inicial
  
  //lista do valor de cada item na composição
  console.log('\n\tComposição dos preços\n')
  console.log(`Petrobras: R$ ${petrobras.toFixed(2)}`)
  console.log(`ICMS: R$ ${icms.toFixed(2)}`)
  console.log(`Etanol Onidro: R$ ${etanol_onidro.toFixed(2)}`)
  console.log(`Cide, PIS/Pasep e Cofins: R$ ${pis_pasep.toFixed(2)}`)
  console.log(`Distribuição e revenda: R$ ${distribuicao_e_revenda.toFixed(2)}\n`)
  
  //entrada do ajuste
  const porcentagem_reajuste = Number(input('Digite o valor de reajuste em %: '))
  
  //calculando ajuste
  const valor_ajustado = calcular_ajuste(valor_inicial,porcentagem_reajuste)
  
  //lista com ajuste
  petrobras = 0.36 * valor_ajustado
  icms = 0.27 * valor_ajustado
  etanol_onidro = 0.13 * valor_ajustado
  pis_pasep = 0.1 * valor_ajustado
  distribuicao_e_revenda = 0.14 * valor_ajustado
  
  console.log('\n\tComposição ajustada\n')
  console.log(`Petrobras: R$ ${petrobras.toFixed(2)}`)
  console.log(`ICMS: R$ ${icms.toFixed(2)}`)
  console.log(`Etanol Onidro: R$ ${etanol_onidro.toFixed(2)}`)
  console.log(`Cide, PIS/Pasep e Cofins: R$ ${pis_pasep.toFixed(2)}`)
  console.log(`Distribuição e revenda: R$ ${distribuicao_e_revenda.toFixed(2)}\n`)
  
}
  main()
  
  function calcular_ajuste(valor,ajuste){
    
    const gasolina = 0.73 * valor
    return valor + ((ajuste/100) * gasolina)
  }