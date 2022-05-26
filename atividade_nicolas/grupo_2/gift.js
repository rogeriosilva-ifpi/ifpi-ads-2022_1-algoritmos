// import { input } from '../../io_utils.js'
import { readFileSync } from 'fs'

function main(){
    // const value = Number(input('Valor: '))
    const purchases = readFileSync('vendasmensais.txt', 'utf-8').split('\n')
    let total_revenue = 0
    let total_cashback = 0
    let maior = -1
    let menor = -1

    for (let purchase of purchases){
        const data = purchase.split(' ')
        const name = data[0]
        const value = Number(data[1])

        const cashback = generateCashback(value)

        if (maior === -1){ // the first one will be biggest and lowest
            maior = cashback
            menor = cashback
        }else{ // .......
            if (cashback > maior){
                maior = cashback
            }else if (cashback < menor){
                menor = cashback
            }
        }

        total_revenue += value
        total_cashback += cashback

        console.log(`Cliente = ${name} | Compras (R$ ${value.toFixed(2)}) | Cashback = R$ ${cashback.toFixed(2)}`)

    }
    // Data Analysis
    
    const perc_cashback = total_cashback / total_revenue * 100
    const avg_cashback = total_cashback / purchases.length

    console.log(`Faturamento: R$ ${total_revenue.toFixed(2)}`)
    console.log(`Cashback(total): R$ ${total_cashback.toFixed(2)}`)
    console.log(`Cashback: ${perc_cashback.toFixed(1)}%`)
    console.log(`Maior Cashback: R$ ${maior.toFixed(2)}`)
    console.log(`Menor Cashback: R$ ${menor.toFixed(2)}`)
    console.log(`Cashback Médio: R$ ${avg_cashback.toFixed(2)}`)

}


function generateCashback(value){
    let cashback
    if (value <= 250){
        cashback = value * (5/100)
    }else if (value <= 500){
        cashback = value * (7/100)
    }else if (value <= 750){
        cashback = value * (8/100)
    }else{ // > 750
        cashback = 250*(5/100) + 250*(7/100) + 250*(8/100) + (value-750)*(25/100) 
    }

    return cashback
}

main()