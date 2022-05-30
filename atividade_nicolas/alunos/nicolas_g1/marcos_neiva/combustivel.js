import prompt from 'prompt-sync'
const input = prompt()


function main() {

    const Rendimento_A = Number(input('Digite o rendimento (em km/litro) com Álcool : '))
    const Rendimento_G = Number(input('Digite o rendimento (em km/litro) com gasolina : '))
    const distancia = Number(input('Digite a distância a ser percorrida (em km) : '))
    const valor_a = Number(input('Digite o preço do Álcool : R$ '))
    const valor_g = Number(input('Digite o preço do Galosina : R$ '))

    const litros_a = distancia / Rendimento_A
    const litros_g = distancia / Rendimento_G
    const total_A = valor_a * litros_a
    const total_G = valor_g * litros_g

    console.log(`Os valor se usar Gasolina é ${total_G.toFixed(2)}`)
    console.log(`Os valor se usar Álcool é ${total_A.toFixed(2)}`)

}

main()