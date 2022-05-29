import {input} from "./io_utils.js"

function main(){

    const p = Number(input('Digite o preço do litro da gasolina: '))

    function petrobras(){
        return p * 0.36
    }

    function icms(){
        return p * 0.27
    }

    function etanol(){
        return p * 0.13
    }

    function cide(){
        return p * 0.1
    }

    function dist(){
        return p * 0.14
    }

    console.log(`Petrobras: R$ ${petrobras().toFixed(2)}`)
    console.log(`ICMS: R$ ${icms().toFixed(2)}`)
    console.log(`Etanol onidro: R$ ${etanol().toFixed(2)}`)
    console.log(`Cide, PIS/Pasep e confins: R$ ${cide().toFixed(2)}`)
    console.log(`Distribuição e revenda: R$ ${dist().toFixed(2)}`)

    const gasolina = p * 0.73

    const reajuste = Number(input('Digite o percentual do reajuste: '))

    const porcent = reajuste / 100

    const aumento = gasolina * porcent

    function novo_valor(){
        return p + aumento
    }

    console.log(`Novo preço da gasolina: R$ ${novo_valor().toFixed(2)}`)

}
main()