import{input,print} from "../io_utils.js"
function main(){
const idade = Number(input('Digite a sua idade:'))
const fc =Number(input('Digite a sua frequencia cardiaca:'))
 
const calculando_porcentgem  = (((220 - idade)*100)/220)
const resultado = zona (calculando_porcentgem )

print (`Sua zona é ${resultado}`)

}
main()

function zona ( cp){
    if (50<=cp<60){
        return "Atividade moderada e seu limite de insensidade está entre [50 a 60)"
    }if (60<=cp< 70){
        return "Controle de peso e seu limite de insensidade está entre [60 a 70)"
    }if(70<=cp< 80){
        return "Aeróbica e seu limite de insensidade está entre [70 a 80)"
    }if(80<=cp< 90){
        return "Anaeróbica e seu limite de insensidade está entre [80 a 90)"
    }if(90<=cp<=100){
        return "Esforço máximo e seu limite de insensidade está entre [90 a 100]"    
}
}