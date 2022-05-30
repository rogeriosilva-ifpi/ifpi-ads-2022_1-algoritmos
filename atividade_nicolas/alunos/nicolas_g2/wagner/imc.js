const input = require('prompt-sync')()

function main() {
    //Entrada 
    const peso = Number(input("Digite seu peso:"))

    const altura = Number(input("Digite a sua altura:"))



    //Processamento
    const imc_resultado = imc(peso, altura)
    if (imc_resultado >= 19.8 && imc_resultado <= 24.9) {
        console.log("Você está dentro da faixa normal de peso")
    } else if (imc_resultado < 19.8) {

    }


    //Saída
    console.log(`O seu IMC é: ${imc_resultado}`)

}


main()



function imc(peso, altura) {
    const imc = peso / (altura * altura)
    return imc
}