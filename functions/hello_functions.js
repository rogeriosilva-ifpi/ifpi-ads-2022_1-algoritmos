import { input } from '../io_utils.js'

function main(){
    const numero = Number(input('Digite um valor: '))

    const quadrado = calcular_quadrado(numero)

    console.log(`O quadrao de ${numero} é ${quadrado}`)

}

// Declaracao tradicional - comum - normal
/*
function calcular_quadrado(n){
    const resultado = n*n

    return resultado
}
*/

// Definicao por funcao anomina
/*
const calcular_quadrado = function(n){
    const resultado = n * n

    return resultado
}
*/

// Arrow function (funcao seta)
/*
const calcular_quadrado = (n) => {
    const resultado = n * n

    return resultado
}
*/

// Arrow function (funcao seta)
const calcular_quadrado = n => n*n


main()