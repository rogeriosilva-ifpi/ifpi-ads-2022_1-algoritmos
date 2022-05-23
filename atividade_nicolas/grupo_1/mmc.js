/* [mmc.js] MMC (mínimo múltiplo comum) de A e B significa que um dado valor 
    (o MMC) pode ser composto em pedaços tanto de tamanhos de A quanto 
    de tamanhos de B. E que ainda é o menor valor onde isso acontece 
    (pode ser dividido em pedaços exatos de tamanho A ou B). 
	Elabore um programa que receba os valores A e B e em seguida
    encontre o MMC para esses valores. Utilize a estrutura de repetição 
    WHILE, onde o critério de continuidade é ainda não ser divisível 
    simultaneamente por A e B.
*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const valor_a = Number(input('Valor A: '))
    const valor_b = Number(input('Valor B: '))

    let mmc = valor_b

    while (!(eh_multiplo(mmc, valor_a) && eh_multiplo(mmc, valor_b))){
        mmc += valor_b
    }

    console.log(`O MMC de A e B é ${mmc}`)


}

function eh_multiplo(valor1, valor2){
    return valor1 % valor2 === 0
}

main()