import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    const frase = input('Frase: ')

    const palavras = dividirPalavras(frase)
    const contagem_palavras = contarTamanhoDePalavras(palavras)
    const contagem_caracteres = contarCaracteres(palavras)

    console.log(`\nPalavras pares: ${contagem_palavras[0]}\nPalavras ímpares: ${contagem_palavras[1]}\n`)
    console.log(`Quantidade de caracteres: ${contagem_caracteres}\n`)
}

function contarCaracteres(palavras) {
    let quantidade_de_caracteres = 0

    for (let palavra of palavras) {
        quantidade_de_caracteres += palavra.length
    }

    return quantidade_de_caracteres
}

function contarTamanhoDePalavras(palavras) {
    let pares = 0
    let impares= 0

    for (let palavra of palavras) {
        if (quantidadeParOuImpar(palavra)) {
            pares++
        } else {
            impares++
        }
    }

    return [pares, impares]
}

function quantidadeParOuImpar(palavra) {
    if (palavra.length % 2 == 0) {
        return true
    } else {
        return false
    }
}

function dividirPalavras(frase) {
    const palavras = frase.split(' ')

    return palavras
}

main()
