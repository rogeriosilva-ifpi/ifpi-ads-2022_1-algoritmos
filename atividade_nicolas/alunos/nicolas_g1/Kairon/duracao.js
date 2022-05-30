import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){
    const momentos = input("Informe o momento de início e o de fim (formato 24h(hh/mm)): ").split(" ")
    const inicio = momentos[0]
    const fim = momentos[1]
    const [horaI, minutoI] = inicio.split(":").map(Number)
    const [horaF, minutoF] = fim.split(":").map(Number)

    const horaT = horaF - horaI
    const minutoT = minutoF - minutoI
     
    console.log(`O intervalo entre os dois momentos tem ${horaT}:${minutoT}`)

}
main()