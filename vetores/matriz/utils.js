export function numero_aleatorio(min = 0, max = 100){
    return Math.floor(Math.random() * (max - min)) + min
}


function testando(){
    const funcao = function (){
        console.log('Função gerada chamada')
    }

    return funcao()

}

const teste = testando()

teste()