import { input } from "../io_utils.js"

function main() {
    const qtd = Number(input("insira a quantidade de dólares que deseja: "))
    const c_atual_dolar = Number(input("Insira a cotação atual do dólar:   "))
    const iof = (qtd * c_atual_dolar) * (1.1 / 100)
    const reais = (qtd * c_atual_dolar) + iof
    console.log(`Valor a pagar: ${reais}`)

}
main()