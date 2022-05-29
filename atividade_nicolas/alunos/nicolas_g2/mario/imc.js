import {input} from './io_utils.js'
//questao 1
function main (){
    const [peso,altura] = input('Digite seu peso e sua altura(ex:peso altura):').split(' ').map(Number)

    //processamento
    const imc = (peso / (altura*altura)).toFixed(2)

    //a)
    if ( imc < 19.8 ){
        console.log(`Joaquim, seu IMC é ${imc} e voce deve ganhar peso`)
    } else if ( imc >= 19.8 && imc <= 24.9 ){
        console.log(`Joaquim, seu IMC é ${imc} e esta normal`)
    } else {
        console.log(`Joaquim, seu IMC é ${imc} e voce deve perder peso`)
    }

}
main()