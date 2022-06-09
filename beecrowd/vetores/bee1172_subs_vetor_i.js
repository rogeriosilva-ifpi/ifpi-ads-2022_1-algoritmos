import { input } from "../../io_utils.js"

function main(){
    const X = new Array(10)

    for(let i = 0;i < X.length ; i++){
        X[i] = Number(input("Valores: "))
    }

    const vetor_substituido = substituir_valores(X)

    console.log(vetor_substituido)
}
function substituir_valores(vetor){
    for(let numero in vetor){
        if(vetor[numero] === 0 || vetor[numero] < 0){
            vetor[numero] = 1
        }
    }
    return vetor
}

main()

