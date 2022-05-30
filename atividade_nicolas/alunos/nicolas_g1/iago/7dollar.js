import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let cotDolar = input("Digite o valor do dolar: ")
    let qtdDolar = input("Digite quantos dolares quer comprar: ")
    console.log(`Valor total em reais a ser pago: ${calcDolar(cotDolar, qtdDolar)}`)
}

function calcDolar(cotDolar, qtdDolar) {
    let valorBRL = (cotDolar * qtdDolar) + ((cotDolar * qtdDolar) * 1.1 / 100)
    return valorBRL
}
main()