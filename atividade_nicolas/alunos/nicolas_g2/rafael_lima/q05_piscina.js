//QUESTÃO 05

const input = require("prompt-sync")()

function main(){
    //ENTRADA
    console.clear()
    console.log("Digite as dimensões de sua piscina (em centímetros):")
    const largura = Number(input("Largura (cm): "))
    const altura = Number(input("Altura (cm): "))
    const comprimento = Number(input("Comprimento: "))
    
    //PROCESSAMENTO
    const [volume_máximo,volume_ideal] = capacidade_piscina(largura,altura,comprimento)
    console.log("")
    console.log(`Volume máximo da piscina: ${volume_máximo} litros`)
    console.log(`Volume ideal: ${volume_ideal} litros`)
    console.log("")
    console.log("Informe abaixo o valor pago para a consercionária por cada 1.000 litros de água")
    const valor_mil_litros = Number(input("Valor (R$): "))
    const [gasto_encher,gasto_mensal] = manutenção(volume_ideal,valor_mil_litros)
    console.log("")
    console.log("GASTO COM A PISCINA")
    console.log(`Para encher: R$ ${gasto_encher.toFixed(2)} reais`)
    console.log(`Para reposição mensal: R$ ${gasto_mensal.toFixed(2)} reais`)
}
main()

function capacidade_piscina (largura,altura,comprimento){
    const capacidade_máxima = (largura*altura*comprimento)/1000
    const capacidade_ideal = capacidade_máxima*0.85
    return [capacidade_máxima,capacidade_ideal]
}

function manutenção(volume_ideal,valor_mil_litros){
    const manutencao_encher = valor_mil_litros*(Math.ceil(volume_ideal/1000))
    const manutencao_mensal = valor_mil_litros*(Math.ceil((volume_ideal*0.10)/1000))
    return [manutencao_encher,manutencao_mensal]
}