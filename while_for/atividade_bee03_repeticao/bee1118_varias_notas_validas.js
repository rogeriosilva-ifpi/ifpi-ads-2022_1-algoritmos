import { input } from '../../io_utils.js'

function main(){
    let opcao = 1
    
    while (opcao === 1){
        const nota1 = obter_nota_valida()
        const nota2 = obter_nota_valida()

        const media = (nota1 + nota2) / 2

        console.log(`media = ${media.toFixed(2)}`)

        opcao = obter_opcao()
    }
    

}

function obter_opcao(){
    console.log('novo calculo (1-sim 2-nao)')
    let valor = Number(input());

    while (valor < 1 || valor > 2){
        console.log('novo calculo (1-sim 2-nao)')
        valor = Number(input());
    }

    return valor
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