import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const frase = input("Digite uma frase: ")
    const quantidade_palavras = frase.split(" ").length
    const strings = frase.split(" ").join(" ")
    const quantidade_caracteres = strings.length
    const resultado = qtd_par_impar(quantidade_caracteres, quantidade_palavras)

    console.log(`${resultado}`)

}
main()

function qtd_par_impar(quantidade_caracteres, quantidade_palavras) {
    if (quantidade_caracteres % 2 === 0) {
        for (let palavras of quantidade_palavras) {
            return palavras

        }
    } else {
        return false
    }
}