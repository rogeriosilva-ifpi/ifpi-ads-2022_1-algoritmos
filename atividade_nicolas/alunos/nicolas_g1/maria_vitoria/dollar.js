import{input,print} from "../io_utils.js"
function main(){

const cotacao_dolar = Number(input('Digite a cotaçao do dolar'))
const qtt_dolar = Number(input('Digite quantos dolares você gostaria de comprar '))
const resultado = valor_em_reais(cotacao_dolar,qtt_dolar)
print (`total a pagrar em BRL : ${resultado}`)

}
main()

function valor_em_reais( cd,qd){
 const valor = cd*qd
const iof  = (valor * 1,1)
const total = valor + iof
return total
}