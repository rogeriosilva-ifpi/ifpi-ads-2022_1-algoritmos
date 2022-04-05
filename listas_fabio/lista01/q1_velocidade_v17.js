import { close, input, print } from '../../io_utils_v17.js'

async function main(){
    // Entrada
    const velocidade_ms = Number(await input('Velocidade em m/s: '))

    // Processamento
    const velocidade_kmh = velocidade_ms * 3.6

    // Saída
    print(`O resultado é ${velocidade_kmh.toFixed(2)} km/h`)

}

await main()
close()