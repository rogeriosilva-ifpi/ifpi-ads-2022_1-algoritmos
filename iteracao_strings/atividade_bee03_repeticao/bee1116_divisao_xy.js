import { input } from '../../io_utils.js'

function main(){
    let contador = 0
    let quantidade = Number(input('Quantidade: '))
    let x, y
    let valores
    let quociente

    while (contador < quantidade){
        valores = input('X Y: ').split(' ').map(Number)
        x = valores[0]
        y = valores[1]

        contador++
        if (y === 0){
            console.log('divisao impossivel')
            continue
        }

        quociente = x / y
        console.log(quociente.toFixed(1))
    }
}

main()