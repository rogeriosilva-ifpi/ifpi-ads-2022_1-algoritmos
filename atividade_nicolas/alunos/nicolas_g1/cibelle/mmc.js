import { input } from "../io_utils.js";
function main(){
    const [num1,num2] = (input('Número inteiro (Ex: 8 2) ')).split(' ').map(Number)
    let mmc = 2
    while (!(mmc%num1===0 && mmc%num2===0)){
        mmc++
    }
    console.log(mmc)
}main()