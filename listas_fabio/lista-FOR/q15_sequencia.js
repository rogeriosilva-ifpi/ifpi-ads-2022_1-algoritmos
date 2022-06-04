/* 15. Leia N, calcule e escreva os N primeiros termos 
de seqüência (1, 3, 6, 10, 15,...).
*/

import { input } from '../../io_utils.js'

function main(){
    const N = Number(input('N: '))

    let atual = 0
    let termo = 0
    let salto = 1

    while (atual < N){
        termo = termo + salto
        console.log(termo)

        salto++
        atual++
    }

    
}

main()