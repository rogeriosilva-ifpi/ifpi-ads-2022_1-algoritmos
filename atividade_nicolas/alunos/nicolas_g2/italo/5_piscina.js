import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const [c, l, p] = input("Digite o comprimento, largura e profundidade: ").split(" ").map(Number)
    const valor_por_litro = Number(input("Qual valor por 1000 litros em sua cidade? "))
    const volume = ((c * l * p) / 1000).toFixed(2)
    console.log(`A capacidade maxima é ${volume} e deve ser enchida até ${volume*0.85}`)
    console.log(`È recomendado encher a piscina até ${volume*0.85} litros`)
    console.log(`Você gastará R$${valor_por_litro*volume} pra encher completa ou gastar R$${valor_por_litro*(volume*0.85)} para o valor recomendado`)


}
main()