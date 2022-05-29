import {input} from "./io_utils.js";

function main(){
    const altura = Number(input('Digite a altura (m): '));
    const peso = Number(input('Digite o peso (kg): '));

    const imc = calcular_imc(peso, altura);

    console.log(`Seu IMC é ${imc.toFixed(1)}`);

    if (imc >= 19.8 && imc <= 24.9) {
        console.log("Faixa Normal");
        console.log("Não será necessário alteração de dietas e exercícios.");

    } else if (imc < 19.8) {
        const qqt_peso = 65 - peso;
        console.log(`Você deverá ganhar peso (${qqt_peso} kg)`);
        const calorias = Number(input("Quantas calorias você irá consumir diariamente?"));
        const gasto_calórico = ((7000 * qqt_peso) / 18) + (((7000 * qqt_peso) / 2) / 5); 
        console.log(`O gasto calórico deve ser de ${gasto_calórico}`);

    } else if (imc > 24.9) {
        const qqt_peso = peso - 65;
        console.log(`Você deverá perder peso (${qqt_peso} kg)`);
        const calorias = Number(input("Quantas calorias você irá consumir diariamente?"));
        const gasto_calórico = ((7000 * qqt_peso) / 18) + (((7000 * qqt_peso) / 2) / 5);
        console.log(`O gasto calórico deve ser de ${gasto_calórico}`);  
    }
}

function calcular_imc(peso, altura) {
    return peso / (altura * altura);
}

main();
