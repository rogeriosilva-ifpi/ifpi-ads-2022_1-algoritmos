import {print, input} from '../io_utils.js'

function main(){
    const valor = Number(input('Digite o valor do produto: '))
    const total = desconto(valor)
    console.log(total)


}

function desconto(valor){
    let desconto = 0
    if(valor <= 250){
        desconto = valor - (0.05 * valor)
        console.log(`Valor com desconto de 5% : R$ ${desconto.toFixed(2)}`)
    }else if(valor >= 250 && valor <= 500){
        desconto = valor - (0.07 * valor)
        console.log(`Valor com desconto de 7% : R$ ${desconto.toFixed(2)}`)
    }else if(valor >= 500 && valor <= 750){
        desconto = valor - (0.08 * valor)
        console.log(`Valor com desconto de 8% : R$ ${desconto.toFixed(2)}`)
    }

    return desconto

    

}



main()