import { print, input } from './io_utils.js'

function calcualarVolume(largura, comprimento, profundidade){
    return (largura * comprimento * profundidade);
}
function calcularQuantidadeAguaLitros(volume){
    return (volume*0.85)/1000;
}

function calcualarPrecoAgua(volume, valor){
    let preco = (volume/1000) * valor;
    
    if(volume > 1000 && (volume%1000) != 0){
        preco += valor;
    }
    return preco;
}

function calcularEvaporacao(valor){
    return valor*0.10;
}

function main(){
     var largura = Number(input("digite a largura da piscina: "));
     var comprimento = Number(input("digite o comprimento da piscina: "));
     var profundidade = Number(input("digite a profundidade da piscina: "));
     var precoAgua = Number(input("Preco da agua por 1000 litros: "));

    var volume = calcualarVolume(largura, comprimento, profundidade);
    var volumeRecomendado = calcularQuantidadeAguaLitros(volume);
    var valor = calcualarPrecoAgua(volumeRecomendado, precoAgua);
    var valorEvaporacao = calcularEvaporacao(valor);

    print("Eh recomendado encher sua piscina em " +volumeRecomendado + " litros");
    print("O valor para desfrutar de sua piscina eh " +valor + " reais");
    print("O valor(mensal) para desfrutar de sua piscina eh " +valorEvaporacao + " reais");



}
main();
