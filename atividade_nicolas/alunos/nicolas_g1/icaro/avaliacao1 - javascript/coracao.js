import { input, print } from "../io_utils.js"

function main() {

    const idade = Number(input("Digite sua idade para que seja calculada a sua frequência cardíaca máxima: "));
    const fc_atual = Number(input("Digite sua frequência cardíaca atual: "))
    let freq_card_max = exibe_zonas_fc(idade);
    print(`sua faixa atual é ${calcula_faixa(fc_atual, freq_card_max)}`);

}

function exibe_zonas_fc(idade) {

    const freq_card_max = 220 - idade;
    print(`Sua frequência cardíaca máxima é ${freq_card_max}`);

    print("\nSuas zonas ideais de intensidade cardíaca estão dispostas abaixo (limites mínimos e máximos):");
    print(`> Atividade moderada: ${(0.5 * freq_card_max).toFixed(2)} a ${(0.59 * freq_card_max).toFixed(2)}`);
    print(`> Controle de Peso: ${(0.6 * freq_card_max).toFixed(2)} a ${(0.69 * freq_card_max).toFixed(2)}`);
    print(`> Aeróbica: ${(0.7 * freq_card_max).toFixed(2)} a ${(0.79 * freq_card_max).toFixed(2)}`);
    print(`> Anaeróbica: ${(0.8 * freq_card_max).toFixed(2)} a ${(0.89 * freq_card_max).toFixed(2)}`);
    print(`> Esforço Máximo: ${(0.9 * freq_card_max).toFixed(2)} a ${(1.00 * freq_card_max).toFixed(2)}`);
    return freq_card_max;

}

function calcula_faixa(fc_atual, freq_card_max) {

    if(fc_atual >= (0.5 * freq_card_max) && fc_atual < (0.59 * freq_card_max)) return "Atividade moderada";
    if(fc_atual >= (0.6 * freq_card_max) && fc_atual < (0.69 * freq_card_max)) return "Controle de Peso";
    if(fc_atual >= (0.7 * freq_card_max) && fc_atual < (0.79 * freq_card_max)) return "Aeróbica";
    if(fc_atual >= (0.8 * freq_card_max) && fc_atual < (0.89 * freq_card_max)) return "Anaeróbica";
    if(fc_atual >= (0.9 * freq_card_max) && fc_atual <= (1.00 * freq_card_max)) return "Esforço Máximo";

    else return "não está numa faixa de exercício físico";

}

main();