import {input} from './io_utils.js'
function main (){

    const compra_mensal = Number(input('Valor da compra mnsal:'))
    let cashback = 0

    if (compra_mensal <= 250){
        cashback = 0.05
    } else if ( compra_mensal > 250 && compra_mensal < 500){
        cashback = 0.07
    } else if (compra_mensal >= 500 && compra_mensal <= 750){
        cashback = 0.08
    } else {
        cashback = (0.08*750)  + (compra_mensal - 750) * 0.25  
    }

    const valor_cashback = (cashback * compra_mensal).toFixed(2)

    console.log(`o valor do cashback é ${valor_cashback}`)

}
main ()