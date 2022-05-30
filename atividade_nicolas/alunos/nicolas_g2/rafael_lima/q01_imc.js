//QUESTÃO 01

const input = require('prompt-sync')()

function main(){
    //ENTRADA
    console.clear()
    console.log("----- Programa para cálculo do IMC e estabelecimento de metas -----")
    console.log("")
    console.log("Digite os dados solicitados abaixo:")
    const altura = Number(input("Altura (em metros): "))
    const peso = Number(input("Peso (em Kg): "))

    const imc = (calculo_imc(altura,peso)).toFixed(1)
    console.log(`Seu imc é ${imc}`)
    estabeler_meta(imc,peso)
}
main()

function calculo_imc(altura,peso){
    const imc = peso/(altura*altura)
    return imc
}
function estabeler_meta(imc,peso,altura){
    let meta
    if((imc >= 19.8) && (imc <=24.9)){
        return "Parabéns!!! Você está na Faixa Normal. Não será necessário alteração na dieta"
    }else if (imc < 19.8){
        meta = "Você está abaixo da Faixa Normal, deverá GANHAR der peso"
    }else {
        calculo_perder_peso(peso,altura)
    }
    return meta
}

function calculo_perder_peso(peso,altura){
    const peso_ideal = 24.9*(altura*altura) // calcula peso ideal
    const peso_excedente = peso - peso_ideal //peso que deve perder
    const caloria_excedente = peso_excedente * 7000 // calorias totais que deve perder
    console.log("")
    console.log(`Você está acima da faixa normal e precisa perder ${peso_excedente} Kg`)
    console.log("Vamos estabelecer uma dieta para ser seguida em 90 dias")
    const calorias = Number(input("Quantas calorias irá consumir diariamente (somadas as refeições): "))
    const caloria_total_pra_perder = (calorias * 90) + caloria_excedente // quantidade total de calorias pra perder
    const gasto_calórico_período = caloria_total_pra_perder/138
    /* cada perído é metade de 1 dia, então:
    - são 63 dias úteis com 2 períodos cada = 126 períodos (em 90 dias)
    - 12 sábados com 1 período cada
    - total de 138 períodos para gasto calórico 
    */ 
    console.log("")
    console.log("Você deverá buscar um gasto calórico conforme explicado abaixo:")
    console.log(`Dias úteis (seg a sex): ${gasto_calórico_período*2} por dia`)
    console.log(`Sábados: ${gasto_calórico_período} todo sábado`)
    console.log("Domingos: sem gasto calórico. Descanso!!")
}  