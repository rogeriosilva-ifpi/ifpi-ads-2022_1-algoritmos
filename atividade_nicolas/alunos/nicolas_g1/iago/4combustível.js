import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let rendAlcool = input("Digite a quantidade de km/l usando alcool")
    let rendGas = input("Digite a quantidade de km/l usando gasolina")
    let dist = input("Digite a distancia à ser percorrida")
    let valorAlcool = input("Digite o valor do alcool")
    let valorGas = input("Digite o valor da gasolina")
    let opcao = input("Digite 1 caso vá usar alcool e 2 caso vá usar gasolina")
    if (opcao == 1) {
        console.log(`Serão gastos ${calcCustoAlcool(rendAlcool, dist, valorAlcool)} reais`)
    } else if (opcao == 2) {
        console.log(`Serão gastos ${calcCustoGas(rendGas, dist, valorGas)} reais`)
    }
}

function calcCustoAlcool(rendAlcool, dist, valorAlcool) {
    let litroGasto = (dist / rendAlcool)
    let custo1 = valorAlcool * litroGasto
    return custo1
}

function calcCustoGas(rendGas, dist, valorGas) {
    let litroGasto = (dist / rendGas)
    let custo2 = valorAlcool * litroGasto
    return custo2
}
main()