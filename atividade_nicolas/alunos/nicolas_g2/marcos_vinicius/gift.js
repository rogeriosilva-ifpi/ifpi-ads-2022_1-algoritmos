import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    const dados = loadfile().split('\n')

    const resultado = tratamentoTxt(dados)

    console.log(`Faturamento: R$${resultado[0]}\nCashback total: R$${resultado[1]}\n`)
    console.log(`Menor cashback: R$${resultado[2]}\nMaior cashback: R$${resultado[3]}\nCashback médio: R$${resultado[4]}\n`)
}

function tratamentoTxt(dados) {
    let [nome, valor_compra, novo_valor] = ['', 0, 0]
    
    let [menor_cashback, maior_cashback, clientes] = [Number.MAX_VALUE, 0, 0]
    let faturamento = 0 // soma das vendas
    let cashback_total = 0 // soma dos cashback

    for (let linha of dados) {
        [nome, valor_compra] = linha.split(' ')
        
        novo_valor = calcularCashback(valor_compra)
        faturamento += novo_valor[0]
        cashback_total += novo_valor[1]

        if (novo_valor[1] > maior_cashback) {
            maior_cashback = novo_valor[1]
        }

        if (novo_valor[1] < menor_cashback) {
            menor_cashback = novo_valor[1]
        }

        clientes++
    }

    const media_cashback = cashback_total / clientes

    return [faturamento.toFixed(2), cashback_total.toFixed(2), menor_cashback.toFixed(2), maior_cashback.toFixed(2), media_cashback.toFixed(2)]
}

function calcularCashback(valor) {
    let novo_valor = 0
    let cashback = 0

    if (valor <= 250) {
        novo_valor = (valor / 100) * 95
        cashback = valor - novo_valor

    } else if (valor <= 500) {
        novo_valor = 237.5 + (((valor - 250) / 100) * 93)
        cashback = valor - novo_valor

    } else if (valor <= 750) {
        novo_valor = 237.5 + 232.5 + (((valor - 500) / 100) * 93)
        cashback = valor - novo_valor

    } else {
        novo_valor = 237.5 + 232.5 + 230 +(((valor - 750) / 100) * 75)
        cashback = valor - novo_valor
        
    }
    
    return [novo_valor, cashback]
}

/*

    5% - compra <= 250
    7% - 250 < compra <= 500
    8% - 500 < compra <= 750
    25% - 750 < compra

*/

function loadfile(){
    try{
        const data = fs.readFileSync('vendasmensais.txt', 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}


main()
