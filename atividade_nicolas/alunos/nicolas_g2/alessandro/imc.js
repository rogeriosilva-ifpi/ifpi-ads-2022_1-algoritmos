import prompt from 'prompt-sync';
const input = prompt()

function main() {
    // Data entry (Primeiro item).

    console.log('Digite o peso e a altura de Joaquim para calcular seu IMC: ');
    var peso = Number(input('Valor do peso em kg: '));
    var altura = Number(input('Digite o valor da altura: '));

    // Cálculo do IMC e do peso (p) para se chegar ao IMC padrão:
    
    let imc = peso / (altura * altura);
    console.log(`O IMC do Joaquim é: ${imc.toFixed(2)}.`);
    const p = imc * altura // Aqui vc deve ver qual o IMC ideal e multiplica pelo quadrado da latura

    // Julgar se é preciso aumentar ou diminuir o peso com base no IMC:

    if (imc < 19.8) {
        console.log(`Joaquim deverá ganhar peso (${p.toFixed(2)} kg)`);
    } else if (imc > 24.9) {
        console.log(`Joaquim deverá perder peso($ {${p.toFixed(2)} kg `);
    }
    // Segundo item:

    var calorias = p * 1000;
    var calPorDia = input('Quantas calorias Joaquim irá consumir por dia (somadas todas a refeições)? ');
    if (calPorDia > calorias / 30) {
        var gastoPorDia = calPorDia - (calorias / 30);
        console.log(`Será necessário gastar ${gastoPorDia.toFixed(2)} calorias por dia para não haver sobrepeso`);
    } else if (calPorDia < calorias / 30) {
        var gastoPorDia = CalPorDia + (calorias / 30);
        console.log(`Será preciso consumir ${gastoPorDia.toFixed(2)} calorias por dia para se adquirir um 1kg por dia.`);
    }

}

main();