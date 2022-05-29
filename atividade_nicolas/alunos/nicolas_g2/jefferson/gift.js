var faturamento;
var cashback;
var maior;
var menor;
var media;
var countvendas;

function calcularfaturamento(valor, valorcash){
    faturamento += (valor - valorcash);
    cashback += valorcash;
}

function calcular(valorcash){
    if(valorcash > maior){
        maior = valorcash;
    }else if(valorcash < menor){
        menor = valorcash;
    }

}

function contador(){
    countvendas + 1;
}

function calcularCashsback(valor){
    let valorcash = 0;
    contador();

    if(valor <= 250){
        valorcash = valor * 0.05;
        
    }else if((valor > 250) && (valor < 500)){
        valorcash = valor * 0.07;
    
    }else if(valor > 500 && valor < 750){
        valorcash = valor * 0.08;

    }else if(valor > 750){

    }

}