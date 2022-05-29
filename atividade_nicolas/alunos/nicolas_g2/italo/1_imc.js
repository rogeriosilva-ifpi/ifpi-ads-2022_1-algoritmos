//1kg === 7000 calorias

import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const [altura, peso] = input("Digite sua altura e seu peso: ").split(" ").map(Number)
    const imce = (peso / (altura * altura))
    console.log(`Seu IMC é: ${imce.toFixed(2)}`)
    console.log(imc(altura, peso))

}
main()

function imc(altura, peso) {
    const imc = (peso / (altura * altura)).toFixed(2)

    if (imc < 19.8) {
        const peso_atual = (19.8 * (altura * altura)).toFixed(2)
        console.log(`Você deverá ganhar = ${peso_atual - peso}kg`)
    } else if (imc > 24.9) {
        const peso_atual = (24.9 * (altura * altura)).toFixed(2)
        console.log(`Você deverá perder = ${peso_atual - peso}kg`)
    } else {
        console.log(`Seu peso está ideal!`)
    }


}