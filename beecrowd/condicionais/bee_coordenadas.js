import prompt from 'prompt-sync'

const input = prompt()

function main(){
    const [x, y] = input('Digite as coordenadas: ').split(' ').map(Number)
    let resultado
    
    if (x === 0 && y === 0){
        resultado = 'Origem'
    }else if (y === 0){
        resultado = 'Eixo X'   
    }else if (x === 0){
        resultado = 'Eixo Y'
    }else if (x > 0 && y > 0){
        resultado = 'Q1'
    }else if (x < 0 && y > 0){
        resultado = 'Q2'
    }else if (x < 0 && y < 0){
        resultado = 'Q3'
    }else{
        resultado = 'Q4'
    }

    console.log(resultado)

}

main()