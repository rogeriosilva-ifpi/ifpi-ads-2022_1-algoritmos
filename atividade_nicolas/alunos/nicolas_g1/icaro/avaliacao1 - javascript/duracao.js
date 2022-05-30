import { input, print } from "../io_utils.js"

function main() {

    const momento_inicio = (input("Digite uma hora de início para um intervalo (ex: 04:15): ").split(":").map(Number));
    const momento_final = (input("Digite uma hora de fim para um intervalo (ex: 04:15): ").split(":").map(Number));
    
    if(momento_inicio[0] > 23 || momento_inicio[0] < 0) {
        print("um dos valores digitados está inválido");
        main();
    } 
        
    if(momento_final[0] > 23 || momento_inicio[0] < 0) {
        print("um dos valores digitados está inválido");
        main();
    }

    if(momento_inicio[1] > 59 || momento_inicio[1] < 0) {
        print("um dos valores digitados está inválido");
        main();
    } 

    if(momento_final[1] > 59 || momento_inicio[1] < 0) {
        print("um dos valores digitados está inválido");
        main();
    }

    const [horas, minutos] = calcula_intervalo(momento_inicio, momento_final);
    print(`o tempo decorrido foi de ${horas} horas e ${minutos} minutos`);
    
}

function calcula_intervalo(momento_inicio, momento_final) {

    let horas = momento_final[0] - momento_inicio[0];
    let minutos;

    if(momento_final[1] >= momento_inicio[1]) minutos = momento_final[1] - momento_inicio[1];
    else if(momento_final[1] < momento_inicio[1]) {
        minutos = momento_final[1] + 60 - momento_inicio[1];
        horas--;
    }

    return [horas, minutos];

}

main();