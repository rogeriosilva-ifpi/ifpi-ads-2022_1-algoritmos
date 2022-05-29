import { input,print } from "../io_utils.js";

function main(){
    const momento_inicial = (input('Digite um momento inicial no formato(hh/mm): '))
    const [mi1,mf1] = momento_inicial.split("/").map(Number)
    const momento_final = (input('Digite um momento inicial no formato(hh/mm): '))
    const [mi2,mf2] = momento_final.split("/").map(Number)

    const resultado1 = minutos(mf1,mf2,mi1,mi2)[0]
    const resultado2 = minutos(mf1,mf2,mi1,mi2)[1]

    print(`DURAÇÃO: ${resultado1} e ${resultado2}` )
}
function minutos(mf1,mf2,mi1,mi2){
    var hora = (mi2 - mi1)
    var quantos_minutos = (mf2 - mf1)

    if(quantos_minutos<0){
      hora--
      quantos_minutos+=60
    }
    return[hora,quantos_minutos]
}
main()