import prompt from 'prompt-sync'
const input = prompt()

function main(){
  //entradaa
   console.log('\n\tEqualizar IMC em 90 dias\n')
    const peso = Number(input('Digite seu peso (kg): '))
    const altura = Number(input('Digite sua altura (m): '))
    
    //imc
    const imc = calcular_imc(altura,peso)
    
    let calorias_por_dia = 0
    let peso_minimo = 0
    
    if(imc_na_faixa_normal(imc)){
      
      console.log(`\nNão é necessário alteração na dieta ou exercícios.`)
      
    } else if(imc >= 24.9){   //Se IMC muito alto
      peso_minimo = 24.9 * (altura*altura)
      const quilos_perder = peso - peso_minimo
      
      console.log(`\nVocé deve perder ${quilos_perder.toFixed(2)} Kg\n`)
      
      calorias_por_dia = Number(input('Quantas calorias você irá consumir diariamente? '))
      
      //total de calorias para queimar
      const calorias_perder = quilos_perder * 7000
     
     //gasyo calorico no sabado e dias normais
      const [gasto_normal,gasto_sabado] = calcular_gasto_calorico(calorias_perder)
      
      //saída
      console.log(`\nDéficit calórico em dias normais: ${gasto_normal.toFixed(2)} calorias`)
      console.log(`Déficit calórico nos sábados: ${gasto_sabado.toFixed(2)} calorias`)
} else if(imc <= 19.8) //Se IMC muito baixo
{
      peso_minimo = 19.8 * (altura*altura)
      const quilos_ganhar = peso_minimo - peso
      
      console.log(`\nVocé deve ganhar ${quilos_ganhar.toFixed(2)} Kg\n`)
      
      calorias_por_dia = Number(input('Quantas calorias você irá consumir diariamente? '))
      
      //total de calorias para ganhar
      const calorias_ganhar = quilos_ganhar * 7000
     
     //ganho calorico no sabado e dias normais
      const [ganho_normal,ganho_sabado] = calcular_gasto_calorico(calorias_ganhar)
    
      //saída
      console.log(`\nGanho calórico em dias normais: ${ganho_normal.toFixed(2)} calorias`)
      console.log(`Ganho calórico nos sábados: ${ganho_sabado.toFixed(2)} calorias`)
  }
}
main()
  
function calcular_gasto_calorico(calorias)
{
  const cal_dia = calorias/72
  
  //gasto calorico no sabado
  const sabados = (cal_dia/2)
  
  //gasto em dias normais
  const dia_normal = cal_dia + sabados
  
  return [dia_normal,sabados]
}
  
  
 function calcular_imc(altura, peso){
   return peso * (altura*altura)
 }
 
 function imc_na_faixa_normal(imc){
   return imc >= 19.8 && imc <= 24.9
 }