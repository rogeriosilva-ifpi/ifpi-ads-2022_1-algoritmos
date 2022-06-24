import { input } from '../io_utils.js'
import {
    nova_matriz_quadrada,
    show_matriz
} from "./matriz_utils.js"

function main(){

    const ordem = Number(input('Ordem: '))
    const matriz = nova_matriz_quadrada(ordem)

    const matriz_transposta = transpor_matriz(matriz)

    show_matriz(matriz_transposta)

}

main()