import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const palavras = loadfile().split('\n')

    console.log(`${palavras.length} carregadas!`)


}

function loadfile(){
    try{
        const data = fs.readFileSync('palavras.txt', 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}

main()
