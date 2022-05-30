import prompt from 'prompt-sync';
const input = prompt()

function main() {
    const cotacao = Number(input('Cotação do dólar (em R$):'))
    const qtd_dolar = (Number(input('Quantos dólares deseja comprar:')))
    
    const iof = qtd_dolar* 0.011

    const total_a_pagar = (qtd_dolar+iof)*cotacao

    console.log(`Total a pagar: R$ ${total_a_pagar.toFixed(3)}`)

}

main()