import prompt from 'prompt-sync'
const input = prompt()


function main() {
    console.log('Digite a frase :')
    const frase = input('=> ')
    const caracteres = frase[0].length

    const palavras = frase.split(' ')

    if (80 <= caracteres <= 180) {
        console.log(`Essa frase possui ${palavras.length} palavras`)
    } else {
        console.log('Frase inválida, muito grande ou muito pequena...')
    }
}

main()