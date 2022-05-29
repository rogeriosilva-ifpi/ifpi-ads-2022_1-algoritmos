import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const mensagem = input('Digite uma mensagem: ').split('')

    
    console.log(mensagem)

}
main()