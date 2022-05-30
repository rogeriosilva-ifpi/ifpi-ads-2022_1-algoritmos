import {input} from '../io_utils.js'

function main(){
    const cotacao_dolar = Number(input('Qual a cotação atual do dólar? '))
    const quantidade_dolares = Number(input('Informe quantos dólares deseja comprar: '))

    const valor_da_compra = cotacao_dolar * quantidade_dolares
    
    const IOF = (valor_da_compra * 1.1) / 100

    const valor_em_reais = valor_da_compra - IOF

    console.log(`O valor total a pagar em BRL(reais brasileiros) é de R$ ${valor_em_reais.toFixed(2)}`)

}
main()