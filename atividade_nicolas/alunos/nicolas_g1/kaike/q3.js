import {input} from './io_utils.js'

function main(){
    //Entrada
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    let mmc = 1

    while(!(mmc % A === 0 && mmc % B === 0)){
        mmc++
    }

    console.log(`MMC: ${mmc}`)

}


main()