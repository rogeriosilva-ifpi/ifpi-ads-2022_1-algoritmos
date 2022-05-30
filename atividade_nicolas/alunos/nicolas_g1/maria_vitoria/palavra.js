import{input,print} from "../io_utils.js"
function main(){
 var frase= (input('Digite a frase '))
 var quantidade = frase.length

while(quantidade<80 || quantidade>180){
   frase  = (input('Digite a frase '))
}
var qtt = frase.split(" ").length
print( `A frase contem ${qtt} palavras`)

}
main()
