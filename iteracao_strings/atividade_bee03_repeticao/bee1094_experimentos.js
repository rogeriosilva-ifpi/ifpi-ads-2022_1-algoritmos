// import { input } from '../../io_utils.js'
import fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n');


function main(){
    let contador = 0
    // const alvo = Number(input('Quantos testes: '))
    const alvo = Number(lines[0])
    let qtd
    let tipo
    let qtd_sapos = 0
    let perc_sapos
    let qtd_ratos = 0
    let perc_ratos
    let qtd_coelhos = 0
    let perc_coelhos
    let qtd_total = 0
    let linha

    while (contador < alvo){
        // pedir experimento
        // linha = input('QTD TIPO: ').split(' ')
        linha = lines[contador+1].split(' ')
        qtd = Number(linha[0])
        tipo = linha[1]

        if (eh_sapo(tipo)){
            qtd_sapos = qtd_sapos + qtd
        }else if (eh_coelho(tipo)){
            qtd_coelhos = qtd_coelhos + qtd
        }else{
            qtd_ratos = qtd_ratos + qtd
        }

        contador++
    }

    qtd_total = qtd_coelhos + qtd_ratos + qtd_sapos
    perc_coelhos = (qtd_coelhos / qtd_total) * 100
    perc_ratos = (qtd_ratos / qtd_total) * 100
    perc_sapos = (qtd_sapos / qtd_total) * 100

    console.log(`Total: ${qtd_total} cobaias`)
    console.log(`Total de coelhos: ${qtd_coelhos}`)
    console.log(`Total de ratos: ${qtd_ratos}`)
    console.log(`Total de sapos: ${qtd_sapos}`)
    console.log(`Percentual de coelhos: ${perc_coelhos.toFixed(2)} %`)
    console.log(`Percentual de ratos: ${perc_ratos.toFixed(2)} %`)
    console.log(`Percentual de sapos: ${perc_sapos.toFixed(2)} %`)

}

function eh_sapo(tipo){
    return tipo === 'S'
}

function eh_coelho(tipo){
    return tipo === 'C'
}



main()