import prompt from "prompt-sync"
const input = prompt()
//PISCINA

function main(){
    const largura = Number(input("Insira a largura da piscina em metros: "))
    const comprimento = Number(input("Insira o comprimento da piscina em metros: "))  
    const altura = Number(input("Insira a altura da piscina em metros: "))
    const pagar_valor = Number(input("Insira o valor a ser pago para cada 1000 litros de água: "))
    

    const c_cubico = (largura*100) * (comprimento*100) * (altura*100)
    const litros = c_cubico /1000
    const capacidade_maxima = litros * 0.85
    


    console.log(`Recomenda-se encher a piscinas até no máximo ${capacidade_maxima} litros!`)

    if(litros <= 1000){

        console.log(`O valor será ${pagar_valor} reais.`)

    }else if(litros > 1000){
        const c = capacidade_maxima/1000
        const valor2 = pagar_valor * c
        console.log(`O valor a ser pago pela quantidade de litros é: ${valor2}`)
    }

}
main()