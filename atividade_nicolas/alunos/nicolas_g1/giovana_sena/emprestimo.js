import {input} from '../io_utils.js'

function juros(prazo){
    let n = 0

    if (prazo <= 6){
        n = ((50 * 12.75) / 10000)
    }else if (7 <= prazo <= 12){
        n = ((75 * 12.75) / 10000)
    }else if (12 < prazo <= 18){
        n = ((100 * 12.75) / 10000)
    }else if (prazo > 18){
        n = ((130 * 12.75) / 10000)
    }
    return n
}


function main(){
    const renda_mensal = Number(input('Informe a renda mensal: '))
    const valor_emprestimo = Number(input('Informe o valor do empréstimo desejado: '))
    const prazo = Number(input('Informe o prazo desejado: '))

    if (valor_emprestimo < 1.212){
        console.log('Valor de empréstimo inválido.')
    }


    const IOF = (0.38 * valor_emprestimo) / 100 + (0.0082 * (prazo * 30) / 100)
    
    const valor_juros_a_pagar = juros(prazo) * (valor_emprestimo + IOF)

    const total_a_pagar = valor_juros_a_pagar + valor_emprestimo 

    const parcelas = total_a_pagar / prazo


    console.log(`Valor do IOF: R$ ${IOF.toFixed(2)}`)
    console.log(`Valor dos juros a pagar: R$ ${valor_juros_a_pagar.toFixed(2)}`)
    console.log(`Valor total a pagar: R$ ${total_a_pagar.toFixed(2)}`)
    console.log(`Valor da parcela mensal: ${prazo}x de R$ ${parcelas.toFixed(2)}`)

    if (parcelas >= ((40 * renda_mensal) / 100) || prazo < 2 || prazo > 24){
        console.log(' EMPRÉSTIMO NEGADO')
    } else {
        console.log('EMPRÉSTIMO APROVADO')
    }
}
main()