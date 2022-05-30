import { print, input } from './io_utils.js'

function cacularIMC(peso, altura){
    return peso/(altura*altura)
}

function calcularPesoGanhar(peso, altura){
    return 19.8(altura*altura);

}
function calcularPesoPerder(peso, altura){
    return 24.9(altura*altura);
}

function calcularCalorias(calorias, peso){
    
    return calorias/24;

}

function main(){
    const peso =  Number(input("digite peso: "));
    const altura = Number(input("digite sua altura: "));
    var imc = calcularIMC(peso, altura);
    var pesoGanhar;
    var pesoPerder;

    if(imc < 19.8){
        pesoGanhar = (calcularPesoGanhar(peso, altura)) - peso;
        print("VOCE PRECISA GANHAR "+pesoGanhar+" kg");
        let calorias = Number(input("digite a quantidade de calorias: "));

        print("VC PRECISA CONSUMIR calorias por dia = "+calcularCalorias+" calorias EM UM MES");



    }else if(imc >= 19.8 && imc <= 24.9){
        pesoPerder = (calcularPesoPerder) - peso;
        print("VOCE PRECISA PERDER "+pesoPerder+" kg");
        let calorias = Number(input("digite a quantidade calorias: "));

        print("VC PRECISA PERDERcalorias por dia = "+calcularCalorias+" calorias EM UM MES");



    }else{
        print("***  seu peso esta otimo  ***")
    }


    



}
main();