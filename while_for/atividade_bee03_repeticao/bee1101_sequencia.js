import { input } from '../../io_utils.js'

function main(){
    let [m, n] = input('M N: ').split(' ').map(Number)
    let menor, maior
    let saida, entrada
    let soma

    while (!(m <= 0 || n <= 0)){
        // exibir a sequencia do menor ao maior
        saida = ''
        soma = 0
        if (m > n){
            maior = m
            menor = n
        }else{
            maior = n
            menor = m
        }

        while (menor <= maior){
            soma += menor
            saida = saida + `${menor} `
            menor++
        }

        console.log(`${saida}Sum=${soma}`)

        // o somatorio de 
        entrada = input('M N: ').split(' ').map(Number)
        m = entrada[0]
        n = entrada[1]
    }
}

main()