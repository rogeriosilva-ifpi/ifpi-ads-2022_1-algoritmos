import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const palavras = loadfile()

    
}
main()
function loadfile(){
    try{
        const data = fs.readFileSync('palavras.txt', 'utf-8')
        const palavras_carregadas = data.split('\n')
        return palavras_carregadas
    } catch (error){
        console.error(error)
    }
}