import{input,print} from "../io_utils.js"
function main(){

const rendimentoalcool = Number(input('Digite o redimento com ácool'))
const rendimentogasolina = Number(input('Digite o redimento com gasolina'))
const distancia = Number(input('Digite a distância '))
const valoralcool = Number(input('Digite o valor da álcool'))
const valorgasolina= Number(input('Digite o valor da gasolina'))

const resultado = alcool_ou_gasolina(rendimentoalcool,rendimentogasolina,distancia,valoralcool,valorgasolina)

}
main()

function alcool_ou_gasolina(ra,rg,d, va, vg){
    const litros_usados_gasolina = d/rg
    const litros_usados_alcool = d/ra
    const valor_pagar_gasolina =litros_usados_gasolina * vg
    const valor_pagar_alcool =litros_usados_gasolina * va
    print ( `se você optar por alcool : $${valor_pagar_alcool.toFixed(2)}, se você optar por gasolina $ ${valor_pagar_gasolina.toFixed(2)}`)
   
}