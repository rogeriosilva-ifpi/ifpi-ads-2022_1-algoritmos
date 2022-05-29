import { input,print } from "../io_utils.js";

function main(){
    const cotacao_dollar = input("Informe a cotacao do dollar: ")
    const quantidade_dollar = input("Informe quantos dollares deseja receber: ")

    const resultado = valor_pago(cotacao_dollar,quantidade_dollar)

    print(`O VALOR PAGO: ${resultado.toFixed(2)}`)
}
function valor_pago(c,q){
    const subtotal = c*q
    const iof = IOF(subtotal)
    const valor_a_ser_pago = iof + subtotal
    return valor_a_ser_pago
}
function IOF(q){
    const valor_IOF = (1.1/100) * q
    return valor_IOF
}
main()