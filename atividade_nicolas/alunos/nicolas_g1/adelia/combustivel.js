import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const rendimento_alcool = get_number_positive('Digite o rendimento do veiculo com alcool: ')
    const rendimento_gasolina= get_number_positive('Digite o rendimento do veiculo com gasolina: ')
    const distancia_percorrida = get_number_positive('Digite a distancia a ser percorrida: ')
    const valor_alcool = get_number_positive('Digite valor por litro de alcool: ')
    const valor_gasolina = get_number_positive('Digite valor por litro de gasolina: ')

    const gasto_gasolina = calcula_gasto(rendimento_gasolina, distancia_percorrida, valor_gasolina)
    const gasto_alcool = calcula_gasto(rendimento_alcool, distancia_percorrida, valor_alcool)

    console.log(`Gasto com alcool é de R$ ${gasto_alcool.toFixed(2)}`)
    console.log(`Gasto com gasolina é de R$ ${gasto_gasolina.toFixed(2)}`)

}


function calcula_gasto(rendimento, distancia, valor){
    const litros = distancia/rendimento
    const valor_total = litros * valor
    return valor_total
}

function get_number(msg) {
    let value = Number(input(msg))
    if (isNaN(value)) {
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