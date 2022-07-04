import { input } from '../../io_utils.js';

function main(){
    let [largura, comprimento, percentual] = input('Entrada ').split(' ').map(Number)

    while (largura !== 0){

        let area_casa = largura * comprimento
        let area_terreno = (area_casa / percentual) * 100
        let lado_terreno = Math.trunc(Math.sqrt(area_terreno))

        console.log(lado_terreno);

        [largura, comprimento, percentual] = input('Entrada ').split(' ').map(Number)
    }


}


main()