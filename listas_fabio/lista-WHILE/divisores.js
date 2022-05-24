import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let numero = Number(input('Número: '))
    while (numero  !== 0){
        mostrar_divisores(numero)
        numero = Number(input('Número: '))
    }
}

function mostrar_divisores(numero){
    let candidato_a_divisor = numero

    while (candidato_a_divisor > 0){
        if (numero % candidato_a_divisor === 0){
            console.log(candidato_a_divisor)
        }

        candidato_a_divisor--
    }
}

main()