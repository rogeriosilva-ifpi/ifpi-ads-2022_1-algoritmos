import prompt from 'prompt-sync'
const input = prompt()

function main() {

    const text = get_text('Insira o texto com no minimo 80 e no maximo 180 caracteres: ')
    let qtd_palavras = 0
    if (text_esta_dentro_do_intervalo(text, 80, 180)) {
        let palavras = text.split(' ')
        qtd_palavras = palavras.length
        console.log(`Há ${qtd_palavras} palavras na frase`)
    } else {
        console.log('O texto está fora do limite de caracteres permitiduos')
    }

}

function get_text(msg) {
    const value = input(msg)
    if (value.length === 0) {
        console.log('Texto vazio. Digite algo.')
        return get_text(msg)
    }
    return value
}

const text_esta_dentro_do_intervalo = (text, min, max) => text.length >= 80 && text.length <= 180

main()