import { input } from '../../io_utils.js'

function main(){

    let [x1, y1, x2, y2] = input('Entrada: ').split(' ').map(Number)
    let soma = x1+y1+x2+y2

    while ( soma !== 0){

        if (eh_na_mesma_casa(x1, y1, x2, y2)){
            console.log(0)
        }else if (eh_na_mesma_coluna(x1, y1, x2, y2) 
                    || eh_na_mesma_linha(x1, y1, x2, y2)
                    || eh_na_mesma_diagonal(x1, y1, x2, y2)){
            console.log(1)
        }else {
            console.log(2)
        }


        [x1, y1, x2, y2] = input('Entrada: ').split(' ').map(Number)
        soma = x1+y1+x2+y2
    }

    console.log('fim')

}

function eh_na_mesma_coluna(x1, y1, x2, y2){
    return x1 === x2
}

function eh_na_mesma_linha(x1, y1, x2, y2){
    return y1 === y2
}

function eh_na_mesma_casa(x1, y1, x2, y2){
    return eh_na_mesma_linha(x1, y1, x2, y2) 
            && eh_na_mesma_coluna(x1, y1, x2, y2)
}

function eh_na_mesma_diagonal(x1, y1, x2, y2){
    return Math.abs(x1 - x2) === Math.abs(y2 - y1)
}

main()