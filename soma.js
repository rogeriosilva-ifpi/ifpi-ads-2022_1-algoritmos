import { print, input } from './io_utils.js'

function main(){
    const inicio = 1
    const final = Number(input('Digite um valor: '))

    print('****** SOMAR de 1 até 200 ******')

    
    const soma = (final+inicio) * (final/2)

    print(`A soma é ${soma}`)


}

main()