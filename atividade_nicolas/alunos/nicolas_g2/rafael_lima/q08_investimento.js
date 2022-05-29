//QUESTÃO 08

const input = require('prompt-sync')()

function main(){
    console.clear()
    console.log("-- Programa que ajuda a alcançar seu objetivo --")
    console.log("")
    const objetivo = input("Qual seu objetivo: ")
    const valor_objetivo = Number(input("De quanto você precisa (R$): "))
    console.log("")
    console.log("Vamos lá!!!")
    const salario = Number(input("Qual o seu salário: "))
    const aporte_mensal = Number(input("Quanto você poderá investir por mês: "))
    const taxa_de_juros = Number(input("Qual a taxa de juros de sua aplicação: "))
    
}
main()

function calculo_aplicação (salario,aporte_mensal,taxa_de_juros){

}