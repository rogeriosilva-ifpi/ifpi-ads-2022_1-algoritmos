import {input} from "./io_utils.js"

function main(){

    const p = Number(input("digite a largura da piscina: "))
    const c = Number(input("digite o comprimento da piscina: "))
    const l = Number(input("digite a largura da piscina: "))

    function dimensoes(){
        return p * c * l
    }

    function L(){
        return dimensoes() / 1000
    }

    function capacidade(){
        return L() * 0.85
    }

    console.log(`É recomendável encher a piscina somente até ${capacidade()} litros`)

    const valor = Number(input("Informe o valor a ser pago a cada 1000 litros: "))

    const quantidade = Math.trunc(capacidade() / 1000)

    function arredondar(){
        return quantidade + 1
    }

    function custo(){
        return arredondar() * valor
    }

    console.log(`Você gastará R$ ${custo().toFixed(2)} com a piscina`)

    function repor(){
        return capacidade() * 0.1
    }

    console.log(`Será necessário mais ${repor()} litros para manter a piscina no nível ideal`)

}
main()