import { input } from '../../io_utils.js'

function main(){
    const nota1 = obter_nota_valida()
    const nota2 = obter_nota_valida()

    const media = (nota1 + nota2) / 2

    console.log(`media = ${media.toFixed(2)}`)

}

function obter_nota_valida(){
    let valor = Number(input('Nota: '));

    while (valor < 0 || valor > 10){
        console.log('nota invalida')
        valor = Number(input('Nota: '));
    }

    return valor
}

main()