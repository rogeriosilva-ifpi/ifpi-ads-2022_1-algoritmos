import {input} from "../io_utils.js"

function main(){
    const dollar_atual = Number(input('Digite o valor do dollar atual: '))

    const quant_dollares = Number(input('Quantidade de dollares que deseja comprar: '))

    const total_dollar = dollar(dollar_atual,quant_dollares)

    const iof = total_dollar * (1.1 / 100)

    const real = total_dollar * 5.08

    console.log(`TOTAL DE DOLLARES: R$ ${total_dollar}`)
    console.log(`IOF: ${iof.toFixed(2)}`)
    console.log(`VALOR TOTAL EM REAIS: ${real}`)
}
function dollar(dollar_atual,quant_dollares){
    return dollar_atual * quant_dollares
}

main()
