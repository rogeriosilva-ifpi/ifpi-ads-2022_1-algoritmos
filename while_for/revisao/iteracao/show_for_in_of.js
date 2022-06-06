import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const nome = input('Nome: ')
    
    for (let letra of nome){
        console.log(letra)
    }
}

main()