import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const idade = get_number_positive('Insira a idade do usuário: ')
    const frequencia_cardiaca_atual = get_number_positive('Insira a frequencia cardiaca atual: ')

    const frequencia_cardiaca_max = calcula_frequencia_maxima(idade)

    const limites_zonas = calcula_limites_frequencia_cardiaca(frequencia_cardiaca_max)

    const zona_atual = calcula_zona_atual(limites_zonas, frequencia_cardiaca_atual)

    console.log(`Os limites para cada zona com a idade ${idade} são: `)

    for(let i = 0; i < limites_zonas.length; i = i + 3){
        if(i===12){
            console.log(`${limites_zonas[i]}: maior ou igual a ${limites_zonas[i+1]} e menor ou igual que ${limites_zonas[i+2]} `)
        }else{
            console.log(`${limites_zonas[i]}: maior ou igual a ${limites_zonas[i+1]} e menor que ${limites_zonas[i+2]} `)
        }
    }
}

const calcula_frequencia_maxima = idade => 220-idade

function calcula_limites_frequencia_cardiaca(frequencia){ //padrão: zona, min, max
    let intervalos = []
    intervalos[0] = 'Atividade moderada'
    intervalos[1] = 0.5 * frequencia
    intervalos[2] = 0.6 * frequencia
    intervalos[3] = 'Controle de peso'
    intervalos[4] = intervalos[2]
    intervalos[5] = 0.7 * frequencia
    intervalos[6] = 'Aerobica'
    intervalos[7] = intervalos[5]
    intervalos[8] = 0.8 * frequencia
    intervalos[9] = 'Anaerobica'
    intervalos[10] = intervalos[8]
    intervalos[11] = 0.9 * frequencia
    intervalos[12] = 'Esforco maximo'
    intervalos[13] = intervalos[11]
    intervalos[14] = frequencia

  return intervalos
}



function calcula_zona_atual(intervalos, frequencia_atual){
    console.log('Zona atual: ')
    if(frequencia_atual < intervalos[1] || frequencia_atual > intervalos[14]){
        console.log('Fora do intervalo da tabela!')
    }else if(frequencia_atual >= intervalos[1] && frequencia_atual < intervalos[2]){
        console.log('Controle de peso')
    }else if(frequencia_atual >= intervalos[4] & frequencia_atual < intervalos[5]){
        console.log('Controle de peso')
    }else if(frequencia_atual >= intervalos[7] & frequencia_atual < intervalos[8]){
        console.log('Aerobica')
    }else if(frequencia_atual >= intervalos[10] & frequencia_atual < intervalos[11]){
        console.log('Anaerobica')
    }else{
        console.log('Esforco maximo')
    }

}

function get_number(msg){
    let value = Number(input(msg))
    if (isNaN(value)){
        console.log('Favor digite um valor numérico')
        value = get_number(msg)
    }
    return value
}

function get_number_positive(msg){
    let number = get_number(msg)
    
    while (!(number >= 0)){
        console.log(`O número (${number}) nao é positivo. Digite um numero positivo`)
        number = get_number(msg)
    }

    return number

}
main()