import prompt from 'prompt-sync';
const input = prompt()

function main() {
    let frase = input('Digite uma frase com no mínimo 80 e no máximo 180 caracteres:')

    while(!(frase.length>=80 && frase.length<=180)) {
        
        console.log(`ERRO. A frase é muito pequena ou muito grande. (${frase.length})`)
        frase = input('Digite uma frase com no mínimo 80 e no máximo 180 caracteres:')
    }
        const palavras = frase.split(' ')

        console.log(`A frase contém ${palavras.length} palavras!`)

}

main()