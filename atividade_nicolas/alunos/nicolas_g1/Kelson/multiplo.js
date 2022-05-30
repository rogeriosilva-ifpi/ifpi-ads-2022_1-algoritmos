import { input,print } from "../io_utils.js";

function main(){
    let numb1 = Number(input('Digite um numero inteiro: '))
    let numb2 = Number(input('Digite um numero inteiro: '))
    let numeros = [numb1,numb2]

    while(maior(numb1,numb2) % menor(numb1,numb2) !== 0){
        numb1 = numb2
        numb2 = input("Digite um numero inteiro: ")
        numeros.push(numb2)
    }

    let par = 0
    let impar = 0
    let positivo = 0
    let negativos = 0   

    for (let iten of numeros){
        if(iten % 2 === 0)par++
        else impar++
        if(iten > 0) positivo++
        else negativos++    
    }
    print(`PARES: ${par}`)
    print(`IMPAR: ${impar}`)
    print(`POSITIVO: ${positivo}`)
    print(`NEGATIVO: ${negativos}`)
}
main()
function menor(v1,v2){
    if(v1<v2){
        return v1
    }
    else{
        return v2
    }
}
    function maior(v1,v2){
        if(v1>v2){
            return v1
        }
        else{
            return v2
        }
    
}