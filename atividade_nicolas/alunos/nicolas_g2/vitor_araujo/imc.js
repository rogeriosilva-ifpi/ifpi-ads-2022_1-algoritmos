import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const altura = Number(input('Digite a altura do Joaquim: '))
    const pesoInicial = Number(input('Digite o peso do Joaquim: '))

    const imc = (pesoInicial/(altura*altura))
    let pesoPerder
    let verification = 0
    let pesoFinal = 0

    let caloriasConsumidasDiarias = 0

    if (imc >= 19.8 && imc <= 24.9){
        console.log(`\tO seu IMC é ${imc.toFixed(2)} e você está dentro da Faixa Normal (19,8, 24,9]`)
        console.log('\tNão será necessário alteração de Dietas e Exercícios')

    } else if(imc > 24.9) {

        pesoFinal = 24.9 * altura * altura
        pesoPerder = pesoInicial - pesoFinal
        console.log(`\tO seu IMC é ${imc.toFixed(2)} e você precisa emagrecer ${pesoPerder.toFixed(2)} kg`)

        caloriasConsumidasDiarias = Number(input('Digite a quantidade e calorias que você irá consumir diariamente: '))

        const qtdDeCaloriasPorDiaUtil = (pesoPerder/55) * 7000

        const qtdCaloriasPerderEmExercicio = qtdDeCaloriasPorDiaUtil + caloriasConsumidasDiarias


        console.log(`-----Resumo, para Emagrecer ele deverá perder, nos próximos 90 dias:`)
        
        console.log(`\tDias Normais: ${qtdCaloriasPerderEmExercicio.toFixed(2)} calorias`)
        console.log(`\tSábados: ${(qtdCaloriasPerderEmExercicio/2).toFixed(2)} calorias`)
        console.log(`\tDomingo: Descanso`)

    } else if (imc < 19.8){
        pesoFinal = 19.8 * altura * altura
        pesoGanhar = pesoFinal - pesoInicial
        console.log(`\tO seu IMC é ${imc} e você precisa emagrecer ${pesoGanhar} kg`)

        caloriasConsumidasDiarias = Number(input('Digite a quantidade e calorias que você irá consumir diariamente: '))

        const qtdDeCaloriasPorDiaUtil1 = (pesoGanhar/55) * 7000

        const qtdDeCaloriasAMais = qtdDeCaloriasPorDiaUtil1 + caloriasConsumidasDiarias

        console.log(`-----Resumo, para Engordar ele precisa ingerir, nos próximos 90 dias:`)
        
        console.log(`\tDias Normais: ${qtdDeCaloriasPorDiaUtil1.toFixed(2)} calorias`)
        console.log(`\tSábados: ${(qtdDeCaloriasAMais/2).toFixed(2)} calorias`)
        console.log(`\tDomingo: ${caloriasConsumidasDiarias} calorias`)
    }

} main()