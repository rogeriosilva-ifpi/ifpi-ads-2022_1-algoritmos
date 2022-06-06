import fs from 'fs';
const input = fs.readFileSync('stdin', 'utf-8')
const entradas = input.split('\n')

function main(){

    const index_max = Number(entradas[0])
    organizar_e_criptografar_frase(index_max)
}

function organizar_e_criptografar_frase(limite){
    let index = 1
    let frase = entradas[index]
    
    while(index <= limite){
// primeira passada
const frase_com_primeira_mod = primeira_passada(frase)

    // segunda passada
const frase_invertida = segunda_passada(frase_com_primeira_mod)


// terceira passada

const frase_terceira_mod = terceira_passada(frase_invertida)
console.log(frase_terceira_mod)

index++
frase = entradas[index]

}
}

function primeira_passada(frase){
    let frase_retorno = ''
    let index = 0

while(index < frase.length){
   if(intervalo_aceito(frase[index])){
       const cod_caractere = frase[index].charCodeAt(0)
       frase_retorno += (String.fromCharCode(cod_caractere + 3))
    }else{
        frase_retorno += frase[index]
   }
   index ++
}
return frase_retorno

}
function intervalo_aceito(caractere){
const cod_caractere = caractere.charCodeAt(0)
return ((65 <= cod_caractere && cod_caractere <= 90) ||(97 <= cod_caractere && cod_caractere <= 122))
}


function segunda_passada(frase){
   // let frase_invertida frase.split('').reverse()
    let frase_invertida = ''
    let index = (frase.length - 1)
    while(0 <= index){
        frase_invertida += frase[index]
        index--
   }
    return frase_invertida
}


function terceira_passada(frase){

    let index_metade = (frase.length)/2
    let indice = 0
    let nova_frase = ''

     while(indice < frase.length){
         if(indice < index_metade){
             nova_frase += frase[indice]
         }else{
             const cod_caractere = frase[indice].charCodeAt(0)
             nova_frase += (String.fromCharCode(cod_caractere - 1))

         }
      indice++
     }
     return nova_frase
}


main()