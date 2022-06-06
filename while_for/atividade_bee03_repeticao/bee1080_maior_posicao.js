// import { input } from '../../io_utils.js'
import fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n');

function main(){

    let contador = 1
    let valor
    // let maior = Number(input(`Valor ${contador}: `))
    let maior = Number(lines[0])
    let posicao_maior = 1

    while(contador < 100){
        contador += 1
        // valor = Number(input(`Valor ${contador}: `))
        valor = Number(lines[contador-1])
        
        if (valor > maior){
            maior = valor
            posicao_maior = contador
        }
    }

    console.log(maior)
    console.log(posicao_maior)

}

main()