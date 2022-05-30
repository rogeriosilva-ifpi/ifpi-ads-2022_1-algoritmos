import prompt from 'prompt-sync'
const input = prompt()

function main() {

    const cotacao_dolar = Number(input('Digite a cotação atual do dolar (ex : 5.8) : R$ '))
    const qtd_dolar_comp = Number(input('Digite quantos dólares deseja comprar : U$ '))


    const valor_a_pagar = calcular_valor(cotacao_dolar, qtd_dolar_comp)

    console.log(`O valor a pagar é R$ ${valor_a_pagar.toFixed(2)}`)
}



function calcular_valor(cot_d, qtd) {
    const valor = cot_d * qtd
    const IOF = valor * (110 / 100)
    const valor_a_pagar = valor + IOF

    return valor_a_pagar
}

main()