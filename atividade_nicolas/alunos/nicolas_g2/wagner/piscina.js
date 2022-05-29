const input = require('prompt-sync')()

function main() {
    //Entrada
    const largura = Number(input("Digite a largura em cm:"))

    const comprimento = Number(input("Digite o comprimento em cm:"))

    const profundidade = Number(input("Digite a profundidade em cm:"))

    const valor_litro = Number(input("Digite o valor pago pelo por cada 1000 litros:"))

    //Processamento
    const capacidade = (largura * comprimento * profundidade) / 1000
    const nivel_recomendado = capacidade * (85 / 100)




    //Saída
    console.log(`A capacidade máxima da piscina é ${capacidade} litros.`)
    console.log(`É recomendado encher a piscina até ${nivel_recomendado} litros.`)
}


main()

function encher_piscina(valor_litro, nivel_recomendado) {

}