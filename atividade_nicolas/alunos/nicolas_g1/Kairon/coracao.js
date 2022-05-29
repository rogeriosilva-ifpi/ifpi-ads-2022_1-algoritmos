import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){
    console.log("VAMOS CALCULAR A FREQUÊNCIA CARDÍACA MÁXIMA")
    const idade = Number(input("Informe a sua idade: "))
    const frequenciaAtual = Number(input("Informe sua frequência atual: "))
    //processamaneto
    const frequenciaFC = 220 - idade
    const atvModerada0 = frequenciaFC * 0.5
    const  atvModerada1 = frequenciaFC * 0.59

    const controlePeso0 = frequenciaFC * 0.6
    const controlePeso1 = frequenciaFC * 0.69

    const aerobica0 = frequenciaFC * 0.7
    const aerobica1 = frequenciaFC * 0.79

    const anaerobica0 = frequenciaFC * 0.8
    const anaerobica1 = frequenciaFC * 0.89

    const esforcoMax0 = frequenciaFC * 0.9
    const esforcoMax1 = frequenciaFC * 1


     console.log(`Atividade moderada: [${atvModerada0}, ${atvModerada1})`)
     console.log(`controle de peso: [${controlePeso0} , ${controlePeso1})`)
     console.log(`Aeróbica: [${aerobica0} , ${aerobica1})`)
     console.log(`Anaeróbica: [${anaerobica0}, ${anaerobica1})`)
     console.log(`Esforço máximo: [${esforcoMax0}, ${esforcoMax1}]`)




}
main()