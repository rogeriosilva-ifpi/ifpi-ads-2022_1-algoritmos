import prompt from 'prompt-sync'
const input = prompt()


function main() {

    const [num_negativos, num_positivos, par, impar] = num()

    let quantidade = retorno(num_negativos, num_positivos, par, impar)
    console.log(quantidade)


}

function pegar_num() {
    console.log('Digite os Números :')
    let A = Number(input('=> '))
    let B = Number(input('=> '))

    return [A, B]
}

function num() {


    let [A, B] = pegar_num()
    let numeros = [A, B]
    let num_negativos = 0
    let num_positivos = 0
    let par = 0
    let impar = 0
    while (A % B === 0 || B % A === 0) {

        num_p2(numeros, num_negativos, num_positivos, par, impar)

    }

    return [num_negativos, num_positivos, par, impar]
}

function num_p2(n, nn, np, par, impar) {


    for (let num of n) {
        if (num > 0) {
            if (num % 2 === 0) {
                np++
                par++
                pegar_num()
            } else if (num % 3 === 0 || num === 1) {
                np++
                impar++
                pegar_num()
            }
        } else {
            nn++
            pegar_num()
        }


    }
    return [n, nn, np, par, impar]
}

function retorno(n_n, n_p, par, imp) {

    let retorno = `Números positivos : ${n_p}`
    retorno += `\nnúmeros negativos : ${n_n}`
    retorno += `\npares : ${par}`
    retorno += `\nImpares : ${imp}`
    return retorno
}

main()