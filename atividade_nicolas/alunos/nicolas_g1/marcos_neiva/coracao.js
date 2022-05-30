import prompt from 'prompt-sync'
const input = prompt()


function main() {
    console.log('Digite a sua idade : ')
    const idade = Number(input('=> '))
    console.log('Digite a sua fc agora :')
    const fc = Number(input('=> '))
    const fc_max = 220 - idade


    const fc_atual = fc_atu(fc)
    const retorno = exibir(fc_max, fc_atual)
    console.log(retorno)

}

function exibir(fc_max, fc_atual) {

    let retorno = `A sua Zona Atual é : ${fc_atual}`
    retorno += '\n\n|       Zonas        |   Intencidade  |'
    retorno += `\n| Atividade Moderada | ${(fc_max * 0.50).toFixed(2)} a ${(fc_max * 0.60).toFixed(2)}|`
    retorno += `\n| Controle de peso   | ${(fc_max * 0.60).toFixed(2)} a ${(fc_max * 0.70).toFixed(2)}|`
    retorno += `\n| Aérobica           | ${(fc_max * 0.70).toFixed(2)} a ${(fc_max * 0.80).toFixed(2)}|`
    retorno += `\n| Anaeróbica         | ${(fc_max * 0.80).toFixed(2)} a ${(fc_max * 0.90).toFixed(2)}|`
    retorno += `\n| Esforço Máximo     | ${(fc_max * 0.90).toFixed(2)} a ${fc_max.toFixed(2)}   |`


    return retorno
}

function fc_atu(fc) {
    if ((220 * 0.5) <= fc < (220 * 0.6)) {
        return 'Atividade Moderada'
    } else if ((220 * 0.60) <= fc < (220 * 0.70)) {
        return 'Controle de peso'
    } else if ((220 * 0.70) <= fc < (220 * 0.80)) {
        return 'Aérobica'
    } else if ((220 * 0.80) <= fc < (220 * 0.90)) {
        return 'Anaeróbica'
    } else {
        return 'Esforço Máximo'
    }
}
main()