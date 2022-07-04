import prompt from "prompt-sync"
const input = prompt()

function main(){
    const frase = input("Digite uma frase: ").split(" ")
    const contar_palavras = frase.length
    console.log(contar_palavras)
    

    for(let word = 1 ; word < contar_palavras;  word++){
        if(word % 2 === 0){
            console.log(`Existem ${word} palavra(as) com quantidade de letras pares.`)
        }
        if(word % 2 === 1){
            console.log(`Existem ${word} palavra(as) com quantidade de letras ímpares.`)

        }
        for(let c = 1 ; c < frase ; c++){
            console.log(`Há ${c} letras na frase`)
        }
       
    }
    
    
    

}
main()