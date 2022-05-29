import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const litros_de_gasolina = Number(input("Digite o valor da Gasolina do Posto: "))
    let composição_gasolina = litros_de_gasolina * 0.73
    let composição_alcool = litros_de_gasolina * 0.23
    let petrobras = litros_de_gasolina * 0.36
    let imcs = litros_de_gasolina * 0.27
    let etanol = litros_de_gasolina * 0.13
    let distribuicao_revenda = litros_de_gasolina * 0.14
    let cide = litros_de_gasolina * 0.10
    console.log(`A gasolina tem 73% de gasolina pura (${composição_gasolina.toFixed(2)}) e 23% de alcool ${composição_alcool.toFixed(2)}`)
    console.log(`Petrobras = ${petrobras.toFixed(2)}/ ICMS = ${imcs.toFixed(2)}/ Etanol onidro = ${etanol.toFixed(2)}/ Cide = ${cide.toFixed(2)}/ Distribuicao e revenda = ${distribuicao_revenda.toFixed(2)}`)
    const reajuste = Number(input("Digite o valor do reajuste de Gasolina na Petrobras: "))
    console.log(`O valor do reajuste fica R$${(composição_gasolina*reajuste)/100}`)
    console.log(`Valor com o reajuste é R$${((composição_gasolina*reajuste)/100)+litros_de_gasolina}`)

}
main()