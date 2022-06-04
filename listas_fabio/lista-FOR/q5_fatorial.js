import { input } from '../../io_utils.js'

function main(){
    const N = Number(input('N: '))

    let antecessor = N - 1
    let fatorial = N

    while (antecessor >= 1){
        fatorial = fatorial * antecessor
        antecessor = antecessor - 1
    }
    
    console.log(fatorial)
}

main()