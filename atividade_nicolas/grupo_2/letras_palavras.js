import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const frase = input('Frase: ')
    const palavras = frase.split(' ')

    let contador_par = 0
    let contador_impar = 0
    let contador_caracteres = 0
    
    let palavra_atual
    for (let i = 0; i < palavras.length; i++){
        palavra_atual = palavras[i]

        if (palavra_atual.length % 2 === 0){
            contador_par++
        }else{
            contador_impar++
        }

        contador_caracteres += palavra_atual.length
    }

    console.log(`Pares: ${contador_par}`)
    console.log(`Ímpares: ${contador_impar}`)
    console.log(`Caracteres(exceto espaço): ${contador_caracteres}`)


}

main()