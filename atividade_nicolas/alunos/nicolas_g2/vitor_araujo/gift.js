import prompt from 'prompt-sync'
const input = prompt()

import fs from 'fs'
const lines = fs.readFileSync('./vendasmensais.txt', 'utf-8').split('\r\n')

function main(){

    let nome = ""
    let gasto = 0

    let faturamentoTotal = 0
    let cashbackTotal = 0

    let cashback = 0
    let maior = 0 
    let menor = 100000000000000
    let qtdClientes = 0

    while(lines.length > 0){

        [nome, gasto] = lines.shift().split(' ')
        gasto = Number(gasto)      
        
        if(gasto <= 250){
            cashback = gasto * 0.05
        } else if (gasto <= 500){
            cashback = gasto * 0.07
        } else if (gasto <= 750) {
            cashback = gasto * 0.08
        } else if (gasto > 750){
            cashback = (250 * 0.05) + (250 * 0.07) + (250 * 0.08) + ((gasto - 750) * 0.25)
        }

        faturamentoTotal += gasto
        cashbackTotal += cashback


        if(ehMaior(cashback, maior)){
            maior = cashback
        }

        if(ehMenor(cashback, menor)){
            menor = cashback
        }

        qtdClientes++
    }


    const percentualInvestidoCashback = (cashbackTotal/faturamentoTotal) * 100

    const valorMedioCashback = cashbackTotal/qtdClientes

    console.log('-------- RESUMO')

    console.log(`\tFaturamento Total: ${faturamentoTotal.toFixed(2)}`)
    console.log(`\tCashback total: ${cashbackTotal.toFixed(2)}`)
    console.log(`\tPercentual investido em Cashback ${percentualInvestidoCashback.toFixed(2)} %`)
    console.log(`\tMaior cashback: ${maior.toFixed(2)}`)
    console.log(`\tMenor cashback: ${menor.toFixed(2)}`)
    console.log(`\tValor médio pago em cashback: ${valorMedioCashback.toFixed(2)}`)




} 


const ehMaior = (n1, n2) => {return (n1 > n2)}
const ehMenor = (n1, n2) => {return (n1 < n2)}


main()