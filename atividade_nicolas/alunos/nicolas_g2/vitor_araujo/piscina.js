import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const [largura, altura, profundidade] = input('Digite a largura, altura e profundidade da piscina, separados por espaços e em centímetros: ').split(' ').map(Number)

    const capacidade_maxima_piscina = (largura*altura*profundidade)/1000

    const capacidade_recomendada = capacidade_maxima_piscina * 0.85

    console.log(`\tÉ recomendado que a piscina seja enchida até ${capacidade_recomendada} litros`)

    const preco_1000litros = Number(input('Digite o valor a ser pago por cada 1000 litros: '))

    
    // Calculo do preço de acordo com a quantidade de litros

    let litrosPagar = capacidade_recomendada/1000

    let excedente = litrosPagar - Math.trunc(litrosPagar)
 
    let inteirosPagar = Math.trunc(litrosPagar)

    if(excedente > 0){
        inteirosPagar++
    } 

    let valor_a_ser_pago = inteirosPagar * preco_1000litros

    console.log(`\tVocê gastará R$ ${valor_a_ser_pago} para encher sua piscina até a capacidade recomendada`)

    const evaporacao = capacidade_recomendada * 0.1 //valor em litros

    // Calculo do preço de acordo com a quantidade de litros
    litrosPagar = evaporacao/1000

    excedente = litrosPagar - Math.trunc(litrosPagar)

    inteirosPagar = Math.trunc(litrosPagar)

    if (excedente > 0){
        inteirosPagar++
    }

    valor_a_ser_pago = inteirosPagar * preco_1000litros

    console.log(`\tMensalmente você gastará R$ ${valor_a_ser_pago} para manter a piscina no nível ideal`)

} 




main()