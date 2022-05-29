import { input,print } from "../io_utils.js";

function main(){
    const idade = input("Informe sua idade: ")
    const frequencia_cardiaca = input('Informe sua frequencia_cardiaca cardiaca: ')
    
    const resultado1 = zonas(frequencia_cardiaca)
    const resultado2 = intensidade_cardiaca(idade,frequencia_cardiaca)[0]
    const resultado3 = intensidade_cardiaca(idade,frequencia_cardiaca)[1]
    
    print(resultado1)
    print(`${resultado2} e ${resultado3}`)
}
function calculo(idade){
    const Karvonen = (220-idade)
    return Karvonen
}
function intensidade_cardiaca(idade,frequencia_cardiaca){
    const Karvonen = calculo(idade)
    let a = 0
    let b = 0

    if(frequencia_cardiaca>=50 && frequencia_cardiaca<60){
        a = (0.5 * Karvonen)
        b = (0.59 * Karvonen)
    }
    else if(frequencia_cardiaca>=60 && frequencia_cardiaca<70){
        a = (0.6 * Karvonen)
        b = (0.7 * Karvonen) - 1
    }
    else if(frequencia_cardiaca>=70 && frequencia_cardiaca<80){
        a = (0.7 * Karvonen)
        b = (0.8 * Karvonen) -1
    }
    else if(frequencia_cardiaca>=80 && frequencia_cardiaca<90){
         a = (0.8 * Karvonen)
         b = (0.9 * Karvonen) - 1
    }
    else if(frequencia_cardiaca>= 90 && frequencia_cardiaca<=100){
         a = (0.9 * Karvonen)
         b = (1 * Karvonen) - 1
    }
    return [a,b]
}
function zonas(freq){
    if(freq>=50 && freq<60){
        return ("Atividade Moderada")
    }
    else if(freq>=60 && freq<70){
       return ("controle de peso")
    }
    else if(freq>=70 && freq<80){
       return ("Aerobica")
    }
    else if(freq>=80 && freq<90){
        return ("Anaerobica")
    }
    else if(freq>= 90 && freq<=100){
        return ("Esforco maximo")
}
}
main()