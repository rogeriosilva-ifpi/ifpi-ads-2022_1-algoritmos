import prompt from 'prompt-sync'
const input = prompt()

//1kg = 7000cal 22 dias úteis 4 sab e 5 dom
function main(){
    const [peso, altura] = input('Qual o seu peso e altura ?').split(' ').map(Number)
    console.log(imc(peso, altura))

}

function imc(peso, altura){
    const imc = (peso/(altura*altura)).toFixed(1)
    console.log(`Seu IMC é ${imc}`)
    if (imc < 19.8){
        const novo_peso = (19.8 * (altura*altura)).toFixed(1)
        const cal_uteis = (((novo_peso - peso)*7000)/72).toFixed(1)
        const cal_sab = ((((novo_peso - peso)*7000)/72)/2).toFixed(1)
        return `Você deve ganhar ${(novo_peso - peso).toFixed(1)} kg \nGanhando ${cal_uteis} cal em dias úteis e ${cal_sab} cal nos sábados.`
    } else if (imc > 24.9){
        const novo_peso = (24.9 * (altura*altura)).toFixed(1)
        const cal_uteis = (((peso - novo_peso)*7000)/72).toFixed(1)
        const cal_sab = ((((peso - novo_peso)*7000)/72)/2).toFixed(1)
        return `Você deve perder ${(peso - novo_peso).toFixed(1)} kg \nPerdendo ${cal_uteis} cal em dias úteis e ${cal_sab} cal nos sábados.`
    } else {
        return `Parabéns! Seu IMC está normal, você não precisa alterar sua dieta ou exercícios.`
    }
}

main()