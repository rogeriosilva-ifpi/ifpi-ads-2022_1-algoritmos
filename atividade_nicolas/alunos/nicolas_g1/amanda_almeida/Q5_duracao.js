//entrada

import { input } from "../../io_utils.js";

function main() {

    const momento_inicio = input("digite o momento do início, hh/mm:  ")
    const [h1, m1] = momento_inicio.split("/").map(Number)

    const momento_final = input("digite o momento do final, hh/mm:  ")
    const [h2, m2] = momento_final.split("/").map(Number)

    //process
    
    const duracao = duracao_h_m(h1, m1, h2, m2)

    //saida
    console.log(duracao)
}

main()




function duracao_h_m(hi, mi, hf, mf) {
    //calculando horas
    let difhora = hf - hi
    //calculando minutos
    let difmin = mf - mi

    return `${difhora} h:${difmin} min`

}