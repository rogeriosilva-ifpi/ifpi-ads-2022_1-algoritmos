import {input} from './utils.js'

function main(){
    const momento_inicial = input('hh/mm: ')
    const [hr, mm] = momento_inicial.split('/')
    const momento_final = input('hh/mm: ' )
    const [hr_2, mm_2] = momento_final.split('/')
}
main()
function intervalo(hr, mm, hr_2, mm_2){
    let dif_hr = hr - hr_2
    let dif_mm = mm - mm_2
    if(hr > 23 && mm > 60){
        console.log('erro!')
    }
}