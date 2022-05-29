import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){
    const cotacao = Number(input("Informe a cotação atual do dólar: "))
    const qtdCompra = Number(input("Quantos dólares deseja comprar? "))

    const taxaIOF = cotacao * qtdCompra * 0.011
    const valorTotal = cotacao * qtdCompra + taxaIOF

    console.log(`O valor total a pagar é R$ ${valorTotal.toFixed(2)}`)
    
}
main()