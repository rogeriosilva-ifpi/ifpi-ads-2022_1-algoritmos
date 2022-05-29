import {input} from './io_utils.js'

function main(){
    const data1 = input('Digite uma data inicial (dd/MM/aaaa): ').split('/').map(Number);
    const data2 = input('Digite a data final (dd/MM/aaaa): ').split('/').map(Number);

    const tempo1 = input('Digite uma hora inicial (hh:mm:ss): ').split(':').map(Number);
    const tempo2 = input('Digite uma hora final (hh:mm:ss): ').split(':').map(Number);

    const horas_totais = calculo_duracao(data1, data2, tempo1, tempo2);

    console.log(`A duração é ${horas_totais.toFixed(2)} horas`);
}

function calculo_duracao(data1, data2, tempo1, tempo2) {
    const [dia1, mes1, ano1]  = data1;
    const [dia2, mes2, ano2]  = data2;

    const [hora1, minutos1, segundos1]  = tempo1;
    const [hora2, minutos2, segundos2]  = tempo2;

    const dias1 = (ano1 * 365) + (mes1 * 30) + dia1
    const dias2 = (ano2 * 365) + (mes2 * 30) + dia2

    const horas_totais = (dias2 * 24) - (dias1 * 24) - ((hora2 + (minutos2 / 60) + (segundos2 / 3600)) - (hora1 + (minutos1 / 60) + (segundos1 / 3600)));

    return horas_totais;
}

main();