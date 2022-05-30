import { input } from "../io_utils.js";
function main(){
    const [hh1,mm1] = (input('Informe o momento inicial (hh/mm): '))
    const [hh2,mm2] = (input('Informe o momento final (hh/mm): '))
    
if(hh1-hh2){
    let horas = hh1-hh2
    let minutos
    if (mm1>mm2){
        minutos = mm1-mm2
    } else {
        minutos = mm2-mm1
        horas -=1
    }
} else {
    let horas = hh2-hh1
    let minutos
    if (mm1>mm2){
        minutos = mm1-mm2
    } else {
        minutos = mm2-mm1
        horas -=1
    }
}

    console.log(`Duração: ${horas}/${minutos}`)
} 

main()