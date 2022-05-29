import prompt from 'prompt-sync'
const input = prompt()

function main(){
  //entrada
  const frase = input('Digite a frase: ').split(' ')
  
  //processamento
  let tamanho_par = 0
  let tamanho_impar = 0
  let numero_caracteres = 0
  let espacos = 0
  
  for(let palavra of frase)
  {
    //N° de caracteres
      for(let letra of palavra)
      {
        numero_caracteres++
        
        if(letra === ' ')
        {
          espacos++
        }
      }
      
      if(palavra_par(palavra)){
        tamanho_par++
      } else {
        tamanho_impar++
  }
  }
    numero_caracteres = numero_caracteres - espacos
    
    //saída
    console.log(`\nNúmero de caracteres: ${numero_caracteres}`)
    console.log(`\nPalavras pares: ${tamanho_par}`)
    console.log(`Palavras ímpares: ${tamanho_impar}`)
  }
  main()

//Checa palavras pares
function palavra_par(palavra){
  let letras = 0
  for(let letra of palavra){
    letras++
  }
  
  return letras%2 === 0
}