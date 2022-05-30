import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const frase = input('Digite uma frase:').split(' ')
    console.log(`Você digitou ${calc(frase)[2]} caracteres, sendo ${calc(frase)[0]} palavras de tamanho par e ${calc(frase)[1]} de tamanho ímpar`)

}

function calc(frase){
    let count_par = 0
    let count_impar = 0
    let qtd = 0
    let word = ''
    for (word of frase){
        qtd += word.length
        if (word.length%2 == 0){
            count_par++
        } else {
            count_impar++
        }
    }
    return [count_par, count_impar, qtd]
}

main()