import {print, input} from "../io_utils.js"

function diferencaHora(hora1, hora2){

    let [horas1, minutes1] = hora1.split(":").map(Number);
    let [horas2, minutes2] = hora2.split(":").map(Number);

    let difHora = horas2 - horas1;
    let difMinute = minutes2 - minutes1;
    

    if(difMinute  < 0){
        difMinute+=60;
        difHora--;
    }

    return {horas: difHora, minutos:difMinute}
}




print(diferencaHora("13:26", "19:25"))