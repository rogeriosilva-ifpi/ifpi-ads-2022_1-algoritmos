import { input } from '../../io_utils.js'

function main(){
    let A0 = Number(input('A0: '))
    const limite = Number(input('Limite: '))
    const razao = Number(input('R: '))

    /*
    while(A0 < limite){
        console.log(A0)
        A0 = A0 + razao
    }*/

    for (let valor = A0; valor < limite; valor=valor+razao){
        console.log(valor)
    }

}

main()