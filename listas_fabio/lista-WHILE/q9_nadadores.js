import { input } from '../../io_utils.js'

function main(){
    let pontos_clube_a = 0
    let pontos_clube_b = 0
    let numero_prova = Number(input('N. da Prova: '))
    let qtd_nadadores = Number(input('Qtd Nadadores: '))

    // while (!(numero_prova === 0 && qtd_nadadores ===0)){
    while (numero_prova !== 0 || qtd_nadadores !== 0){

        // Pedir os dados de cada nadador
        for (let i = 0; i < qtd_nadadores; i++){
            let nome = input('Nome: ')
            let classificacao = Number(input('Class.: '))
            let tempo = input('Tempo: ')
            let clube = input('Clube "a" ou "b": ')

            // a pontuacao
            let pontuacao = obter_pontuacao(classificacao)

            // atribuir a pontuacao ao clube
            if (clube === 'a'){
                pontos_clube_a += pontuacao
            }else{
                pontos_clube_b += pontuacao
            }
        }


        numero_prova = Number(input('N. da Prova: '))
        qtd_nadadores = Number(input('Qtd Nadadores: '))
    }

    console.log('RESULTADO')
    console.log('Clube A', pontos_clube_a)
    console.log('Clube B', pontos_clube_b)

    if (pontos_clube_a > pontos_clube_b){
        console.log('VENCEDOR - Clube A')
    }else if (pontos_clube_b > pontos_clube_a){
        console.log('VENCEDOR - Clube B')
    }else{
        console.log('EMPATE!')
    }
}

function obter_pontuacao(classificacao){
    let pontos = 0
    if (classificacao === 1){
        pontos = 9
    }else if (classificacao === 2){
        pontos = 6
    }else if (classificacao === 3){
        pontos = 4
    }else if (classificacao === 4){
        pontos = 3
    }

    return pontos
}

main()