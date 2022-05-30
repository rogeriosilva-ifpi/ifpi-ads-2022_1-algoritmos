import prompt  from 'prompt-sync';
const input = prompt()

function main() {
    const idade = input('Digite sua idade:')
    const frequencia_cardiaca_atual = input('Digite sua frequência cardíaca atual:')

    const fc_max = 220-idade
    const intensidade = (frequencia_cardiaca_atual*100)/fc_max
    const zona = get_zona(intensidade)

    const limites_fc = 

    console.log(`Zona: ${zona}`)
}

function get_zona(intensidade) {
    
    if(intensidade>50 && intensidade<=60) {
        return 'Ativintensidade moderada'
    } else if(intensidade>60 && intensidade<=70) {
        return 'Controle de peso'
    } else if(intensidade>70 && intensidade<=80) {
        return 'Aeróbica'
    } else if(intensidade>80 && intensidade<=90) {
        return 'anaeróbica'
    } else if(intensidade>90 && intensidade<100) {
        return 'Esforço Máximo'
    }
}




main()