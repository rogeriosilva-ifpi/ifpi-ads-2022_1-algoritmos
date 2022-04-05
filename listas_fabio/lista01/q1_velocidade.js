import { input, print } from '../../io_utils.js'

function main(){
    // Entrada
    const velocidade_ms = Number(input('Velocidade em m/s: '))

    // Processamento
    const velocidade_kmh = velocidade_ms * 3.6

    // Saída
    print(`O resultado é ${velocidade_kmh.toFixed(2)} km/h`)

}

main()