/* 6. Leia 3 (três) números (cada número corresponde a um 
    ângulo interno do triângulo), verifique e escreva se os 3 (três) 
    números formam um triângulo (a soma dos ângulos internos é igual a 180o).
     Se formam, verifique se formam um triângulo acutângulo (3 ângulos < 90o), 
     retângulo (1 ângulo = 90o) ou obtusângulo (1 ângulo > 90o). 
     Não existe ângulo com tamanho 0o (zero grau).
     */

import prompt from 'prompt-sync';

const input = prompt({sigint: true});

function main(){
    // receber os valores do 3 angulos
    const linha = input('Digite os valores: ');
    const [angulo_a, angulo_b, angulo_c] = linha.split(' ').map(Number)

    // processamento
    if (eh_triangulo(angulo_a, angulo_b, angulo_c)){
        console.log('Formam triângulo!')
        const tipo = verificar_tipo_triangulo(angulo_a, angulo_b, angulo_c)
        console.log(`\t ${tipo}`)
    }else{
        console.log('Não formam triângulo!')
    }

}

function verificar_tipo_triangulo(r, o, g){
    if (eh_acutangulo(r, o, g)){
        return 'Acutângulo!'
    }else if (eh_retangulo(r, o, g)){
        return 'Retângulo!'
    }else if (eh_obtusangulo(r, o, g)){
        return 'Obtusângulo!'
    }else{
        return 'Outro tipo!'
    }
}

function eh_triangulo(a, b, c){
    if (a === 0 || b === 0 || c === 0){
        return false
    }

    return  a + b + c === 180
}

// const eh_triangulo = (a, b, c) => a + b + c === 180

function eh_acutangulo(a, b, c){
    return eh_triangulo(a, b, c) && a < 90 && b < 90 && c < 90
}

function eh_retangulo(a, b, c){
    return eh_triangulo(a, b, c) && a === 90 || b === 90 || c === 90
}

function eh_obtusangulo(a, b, c){
    return eh_triangulo(a, b, c) && a > 90 || b > 90 || c > 90
}

main()