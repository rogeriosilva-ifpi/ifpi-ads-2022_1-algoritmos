import prompt from "prompt-sync"
const input = prompt()
/*IMC
1kg ===7000 calorias
dietas e exercicios iguais durante 5 dias, 
no sabado metade dessa dieta e dos exercicios, no domingo só descanso.*/
function main(){
    const peso = Number(input("Peso em kilogramas de Joaquim: "))
    const altura = Number(input("Altura de Joaquim em metros: "))
    const altura_no_formato = altura/100
    const IMC = peso / (altura_no_formato**2)
    if (19.8 < IMC && IMC < 24.9){
        console.log("Seu IMC está na faixa normal, mantenha-o!")
    } else if (IMC > 24.9){
        const perder_x_kg = IMC - 24.9
        const result = perder_x_kg * (altura_no_formato**2)
        console.log("Joaquim você precisa perder peso!")
        console.log(`Você tem que perder ${result.toFixed(2)} kilogramas!`)
        

    } else {
        const ganhar_x_kg = 19.8 - IMC
        const result = ganhar_x_kg * (altura_no_formato**2)
        console.log("Joaquim você precisa ganhar peso!")
        console.log(`Você tem que ganhar ${result.toFixed(2)} kilogramas!`)
    }
}


function quantas_calorias(){
    const calorias = Number(input("Insira a qauntidade de calorias pretendidas por dia: "))



}

function gasto_calorico(){


}
main()