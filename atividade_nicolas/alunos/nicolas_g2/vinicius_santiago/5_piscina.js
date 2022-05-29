import {print, input} from '../io_utils.js'

function main(){
    //dimenssoes da piscina
    const largura = Number(input('Digite a largura da piscina: '))
    const comprimento = Number(input('Digite o comprimento da piscina: '))
    const profundidade = Number(input('Digite a profundidade da piscina: '))

    const area = area_piscina(largura, comprimento, profundidade)
    //letra a
    const capacidade = Math.trunc(area / 1000)
    //letra b
    const quantidade_rec = 0.85 * capacidade
    

    console.log(`A capacidade da piscina é de ${capacidade} L , a quantidade de agua recomendada é de ${quantidade_rec}`)





function area_piscina(largura, comprimento, profundidade){
    const area = largura * comprimento * profundidade
    
    return area
}

}

main()