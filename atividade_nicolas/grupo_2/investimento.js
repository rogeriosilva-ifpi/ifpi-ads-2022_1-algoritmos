import { input } from '../../io_utils.js'

function main(){
    let objetivo = input('Qual seu objetivo? ')
    let valor_objetivo = Number(input('Quanto custo realizá-lo? '))
    const salario = Number(input('Qual seu salário (R$)? '))
    let aporte_percentual = Number(input('Quantos % pretende investir? '))
    const tx_juros = Number(input('Qual a taxa de juros(%): '))

    let juros
    let saldo = 0
    let meses = 0
    let aporte_valor = salario * (aporte_percentual/100)


    while (saldo < valor_objetivo){
        saldo = saldo + aporte_valor
        juros = (saldo * (tx_juros/100))
        saldo += juros
        meses++
        console.log(`Mês: ${meses} - Juros do Mês: ${juros} - Saldo atual: ${saldo}`)
    }

    console.log(`Em ${meses} meses seu objetivo (${objetivo}) será realizado`)

}

main()