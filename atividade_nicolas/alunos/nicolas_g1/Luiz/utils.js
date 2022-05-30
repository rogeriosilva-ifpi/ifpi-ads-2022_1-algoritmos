import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}