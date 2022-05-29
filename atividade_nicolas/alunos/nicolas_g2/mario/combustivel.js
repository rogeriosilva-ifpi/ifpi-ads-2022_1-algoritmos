import {input} from './io_utils.js'
function main(){
//primeiro pontinho
const gasolina_posto = Number(input('Digite o valor do litro da gasolina no posto:'))
const porcen_petrobras = (gasolina_posto * 0.36).toFixed(2)
const porcen_icms = (gasolina_posto * 0.27).toFixed(2)
const porcen_etanol = (gasolina_posto * 0.13).toFixed(2)
const porcen_impostos_multiplos = (gasolina_posto * 0.10).toFixed(2)
const porcen_revenda = (gasolina_posto * 0.14).toFixed(2)

console.log(`valor referente a porcentagem da Petrobras é ${porcen_petrobras}`)
console.log(`valor referente a porcentagem do ICMS é ${porcen_icms}`)
console.log(`valor referente a porcentagem do etanol é ${porcen_etanol}`)
console.log(`valor refente a porcentagem de multiplos impostos é ${porcen_impostos_multiplos}`)
console.log(`valor referente a porcentagem de distribuição e revenda é ${porcen_revenda}`) 

//segundo pontinho
let reajuste = Number(input('Digite um valor dee reajuste para a gasolina na Petrobras:'))
 reajuste = reajuste / 100 
const reajuste_gasolina_posto = ((reajuste * 0.73) * gasolina_posto + gasolina_posto).toFixed(2)

const reajuste_porcen_petrobras = (reajuste_gasolina_posto * 0.36).toFixed(2)
const reajuste_porcen_icms = (reajuste_gasolina_posto * 0.27).toFixed(2)
const reajuste_porcen_etanol = (reajuste_gasolina_posto * 0.13).toFixed(2)
const reajuste_porcen_impostos_multiplos = (reajuste_gasolina_posto * 0.10).toFixed(2)
const reajuste_porcen_revenda = (reajuste_gasolina_posto * 0.14).toFixed(2)
const diferenca_valores_gasolina_posto = (gasolina_posto - reajuste_gasolina_posto).toFixed(2)

console.log(`o novo valor da gasolina é ${reajuste_gasolina_posto} e a difrença para o antigo valor é ${diferenca_valores_gasolina_posto}`)
console.log(`o novo valor referente a porcentagem da Petrobras é ${reajuste_porcen_petrobras}`)
console.log(`o novo valor referente a porcentagem do ICMS é ${reajuste_porcen_icms}`)
console.log(`o novo valor referente a porcentagem do etanol é ${reajuste_porcen_etanol}`)
console.log(`o novo valor refente a porcentagem de multiplos impostos é ${reajuste_porcen_impostos_multiplos}`)
console.log(`o novo valor referente a porcentagem de distribuição e revenda é ${reajuste_porcen_revenda}`) 

}
main()