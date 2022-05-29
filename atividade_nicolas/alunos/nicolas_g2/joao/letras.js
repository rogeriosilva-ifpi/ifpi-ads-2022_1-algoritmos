import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let frase = input('Sua frase: ').split(' ')
    let frase1 

    let cont = 0
    for(let palavra of frase){
        if(palavra.length % 2 !== 0)
    }

    const contagem = frase.length

    console.log(frase1)
    console.log(frase)
    console.log(contagem)
}
main()