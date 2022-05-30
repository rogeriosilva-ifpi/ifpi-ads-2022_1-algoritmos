import { input } from '../../io_utils.js'

function main(){

    const N = Number(input('N: '))

    /*
    let atual = 1

    while (atual < N){
        console.log(atual)
        atual++
    }*/

    for (let atual = 1; atual <= N; atual++){
        console.log(atual)
    }

}

main()