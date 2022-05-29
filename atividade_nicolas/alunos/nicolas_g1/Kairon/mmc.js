import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){
    const valores = input("Informe o valor de A e de B: ").split(" ").map(Number)
    const [A,B] = valores

    console.log(`O valor do mmc será ${calcularMMC(A,B)}`)

    function calcularMMC(A,B){
    let resto, x, y
      x = A
      y = B
      while(resto != 0){
        resto = x % y
        x = y
        y = resto
      }
      return (A * B) / x
    }
}
main()