import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const cotacao_dolar = get_number_positive('Insira a cotacao do dolar: ')
    const qtd_dolar = get_number_positive('Quantos dolares vc deseja comprar? ')

    const valor_total_a_pagar = calcula_valor_a_pagar(cotacao_dolar, qtd_dolar)

    console.log(`O valor total a pagar é de R$ ${valor_total_a_pagar.toFixed(2)}`)

}


const valor_absoluto_iof = (cotacao_dolar, qtd_dolar) => cotacao_dolar * qtd_dolar * 0.011

function calcula_valor_a_pagar(cotacao_dolar, qtd_dolar){
    const valor = cotacao_dolar * qtd_dolar + valor_absoluto_iof(cotacao_dolar, qtd_dolar)
    return valor
}


function get_number(msg){
    let value = Number(input(msg))
    if (isNaN(value)){
        console.log('Favor digite um valor numérico')
        value = get_number(msg)
    }
    return value
}

function get_number_positive(msg){
    let number = get_number(msg)
    
    while (!(number >= 0)){
        console.log(`O número (${number}) nao é positivo. Digite um numero positivo`)
        number = get_number(msg)
    }

    return number

}
main()