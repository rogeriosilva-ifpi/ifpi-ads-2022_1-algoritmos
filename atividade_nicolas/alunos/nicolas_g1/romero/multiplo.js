import prompt  from 'prompt-sync';
const input = prompt()

function main() {
    let numeros = [1,1,1]

    while (numeros.lenght != 2 && validar_numeros([numeros[0], numeros[1]])!=true) {
        console.log(numeros.length)
        let pares = 0
        let impares = 0
        let positivos = 0
        let negativos = 0

        numeros = input('Digite alguns números inteiros multiplos:').split(' ').map(Number)

        for (let numero of numeros) {
            if (numero%2===0) {
                pares++
            } else {
                impares++
            }
    
            if(numero>=0) {
                positivos++
            } else {
                negativos++
            }
        }

        console.log(`pares = ${pares}\nimpares = ${impares}\npositivos = ${positivos}\nnegativos = ${negativos}`)
    }
}

function validar_numeros([n1,n2]) {
    let numero_1
    let numero_2

    if(n1>n2) {
        numero_1 = n1
        numero_2 = n2
    } else {
        numero_1 = n2
        numero_2 = n1
    }

    if (numero_1%numero_2 === 0) {
        return true
    } else {
        return false
    }
}

main()