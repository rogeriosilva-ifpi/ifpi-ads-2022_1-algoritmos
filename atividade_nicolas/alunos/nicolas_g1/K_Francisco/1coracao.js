import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const idade = Number(input("Quantos anos você tem? "))
    const fc_atual = Number(input("Qual seu FC atual? "))
    const fcmax = (220-idade)
    const zona_atual = (fc_atual*100)/fcmax
    const resultado = tabela(zona_atual)
    console.log(`Sua zona de Fc atual é ${resultado}`)

    console.log('-------------------------------------')
    console.log('         SUA  TABELA DE FC           ')
    console.log('-------------------------------------')
    console.log('  Zonas          |     intensidade   ')
    console.log(` Atividade moderada |  De ${(50*fcmax)/100} ate ${(59*fcmax)/100} `)
    console.log(` Controle do peso   |  De ${(60*fcmax)/100} ate ${(69*fcmax)/100} `)
    console.log(` Aerobica           |  De ${(70*fcmax)/100} ate ${(79*fcmax)/100} `)
    console.log(` Anaerobica         |  De ${(80*fcmax)/100} ate ${(89*fcmax)/100} `)
    console.log(` Esforço maximo     |  De ${(90*fcmax)/100} ate ${(100*fcmax)/100} `)


}

function tabela(za){
    if(za === 50 || za < 60){
        return ('atividade moderada')
    } else if (za === 60 || za < 70){
        return ('controle de peso')
    } else if (za === 70 || za < 80){
        return('aerobica')

    } else if (za === 80 || za < 90){
        return('anaerobica')

    } else if (za === 90 || za <= 100){
        return('Esforço maximo')
    }
}
 
main()