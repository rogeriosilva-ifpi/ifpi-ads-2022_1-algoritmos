import {input} from './io_utils.js'

function main(){
    const [largura,comprimento,profundidade] = input('Informe os valores em cm, respectivmente, da largura, comprimento e profundidade:').split(' ').Map(Number)
    const capacidade = largura * comprimento* profundidade 
    console.log( capacidade)
}    
main()