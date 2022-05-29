import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const cotacao_atual = Number(input('Qual o valor atual do dolar?'))
    const valor_compra = Number(input('Quantos dolares deseja comprar ?'))
    const IOF = (valor_compra*1.1)/100
    const total = (valor_compra/cotacao_atual)+IOF
    console.log(`O valor total a pagar é ${total}`)

}

main()