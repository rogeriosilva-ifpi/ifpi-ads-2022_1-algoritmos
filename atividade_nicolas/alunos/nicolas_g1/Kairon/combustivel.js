import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){
    const rendimendoA = Number(input("Informe o rendimento do veículo com álcool em km/L: "))
    const rendimendoG = Number(input("Informe o rendimento do veículo com gasolina em km/L: "))
    const distancia = Number(input("Informe a distância a ser percorrida em KM: "))
    const valorA = Number(input("Informe o valor do litro de Álcool: "))
    const valorG = Number(input("Informe o valor do litro de Gasolina: "))

    //40km/L 

    const valorTotalA = distancia / rendimendoA * valorA
    const valorTotalG = distancia / rendimendoG * valorG

    console.log(`Valor se usar álcool: ${valorTotalA.toFixed(3)}`)
    console.log(`Valor se usar gasolina: ${valorTotalG.toFixed(3)}`)
}
main()