import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const momento_inicio = input('que horas comecou em hh/mm ?')
    const [hi,mi] = momento_inicio.split("/").map(Number)
    const momento_final = input('que horas terminou em hh/mm ?')
    const [hf,mf] = momento_final.split("/").map(Number)
    const diferenca = [(hf*60)+mf - (hi*60)+mi]
    const horas = diferenca/60
    const minutos = diferenca%60
    console.log(`O intervalo entre os dois horarios foi de ${horas} horas e ${minutos} minutros!!`)
}

main()