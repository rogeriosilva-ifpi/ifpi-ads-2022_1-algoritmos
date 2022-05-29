import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const mensagem = input("Digite uma palavra em binário: ")
    const zero = Number(mensagem[0])
    const um = Number(mensagem[1])
    const dois = Number(mensagem[2])
    const tres = Number(mensagem[3])
    const quatro = Number(mensagem[4])
    const cinco = Number(mensagem[5])
    const seis = Number(mensagem[6])
    const sete = Number(mensagem[7])

    const transformação_binario_decimal = (sete * 1) + (seis * 2) + (cinco * (2 * 2)) + (quatro * (2 * 2 * 2)) + (tres * (2 * 2 * 2 * 2)) + (dois * (2 * 2 * 2 * 2 * 2)) + (um * (2 * 2 * 2 * 2 * 2 * 2)) + (zero * (2 * 2 * 2 * 2 * 2 * 2 * 2))

    console.log(mensagem_valida(transformação_binario_decimal))
}
main()

function mensagem_valida(transformação_binario_decimal) {
    if (transformação_binario_decimal >= 97 && transformação_binario_decimal <= 122) {
        return `Palavra correta`
    } else if (transformação_binario_decimal >= 48 && transformação_binario_decimal <= 57) {
        return `Palavra correta`
    } else if (transformação_binario_decimal === 32) {
        return `Palavra correta`
    } else {
        return `Mensagem corrompida`
    }
}