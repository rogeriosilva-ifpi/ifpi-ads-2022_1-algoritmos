import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let frase = input("Digite uma frase com no minimo 80 caracteres e no maximo 180 caracteres:")
    let fraseSplit = frase.split(" ")
    let qtdPalavras = fraseSplit.length
    let qtdCaracteres = 0
    for (let letras of frase) {
        qtdCaracteres++
    }
    if (qtdCaracteres >= 80 && qtdCaracteres <= 180) {
        console.log(`A frase contém ${qtdPalavras} palavras`)
    } else {
        console.log(`Quantidade de caracteres inválida`)
    }
    console.log(qtdCaracteres)
}
main()