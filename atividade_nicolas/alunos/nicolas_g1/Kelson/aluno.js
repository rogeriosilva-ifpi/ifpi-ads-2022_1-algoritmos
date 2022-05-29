import * as fs from 'fs'

function main(){
    const palavras = loadfile().split('\n')
    const itens = palavras.split('/')
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
