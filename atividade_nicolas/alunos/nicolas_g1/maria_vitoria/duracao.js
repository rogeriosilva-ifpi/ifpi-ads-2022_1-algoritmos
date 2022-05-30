import{input,print} from "../io_utils.js"
function main(){
 const monento_inicio = (input('Digite o momento inicio ex:(hh/mm)')).split("/").map(Number) 
    const h1 = monento_inicio[0]
    const m1 = monento_inicio[1]
const monento_final = (input('Digite o momento final ex:(hh/mm)')).split("/").map(Number) 
    const h2 = monento_final[0]
    const m2 = monento_final[1]

const resultado = internvalo_entre_momentos( h1,h2,m1,m2)
print (resultado)
}
main()

function internvalo_entre_momentos( h1,h2,m1,m2){
 const tempo1 = (h1*60)+ m1 
 const tempo2 = (h2*60)+m2
 

 const sub = Math.trunc((tempo2-tempo1)/60)
 const  resto_sub = ((tempo2-tempo1)%60)
 const transf = ((resto_sub * 30)/5)
print (resto_sub)
 print(`O intervalo teve duração de ${sub} horas e ${resto_sub} minutos.`)
}