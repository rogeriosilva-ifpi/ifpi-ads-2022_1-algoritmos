import { input } from "../io_utils.js";
function main(){
    const frase = input('Frase: ')

    if (frase.length>=80 && frase.length<=180){
        const palavras = frase.split(' ')
        let count
        for (let palavra of palavras){
            count+=1
        }console.log(count) 
    } else {
        console.log('Informe uma frase com no mínimo 80 caracteres e no máximo 180')
    }


}main()