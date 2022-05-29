import { print, input } from './io_utils.js'

function main(){

    var dataMilissegundos;
    let data_1 = input("digite uma data: ");
    let data_2 = input("digite outra data: ");

    const data1 = new Date(data_1).getMilliseconds;
    const data2 = new Date(data_2).getMilliseconds;
    print(data1);

    if(data1 > data2){
        dataMilissegundos = data1 - data2;
    }else{
        dataMilissegundos = data2 - data1;
    }

    var resultado = new Date(dataMilissegundos);

    print("data: "+resultado);


}
main();