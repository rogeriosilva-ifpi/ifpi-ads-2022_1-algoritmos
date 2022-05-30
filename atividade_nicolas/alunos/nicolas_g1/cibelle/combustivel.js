import { input } from "../io_utils.js";
function main(){
    const [rendalcoolkm,rendimentoalcool] = (input('Rendimento com álcool (km/l): ')).split('/').map(Number)
    const [rendgasokm,rendgasol] =  (input('Rendimento com gasolina (km/l): ')).split('/').map(Number)
    const distancia = Number(input('Distância a ser percorrida (km): '))
    const [valoraalcool,valorgasolina] = input('Valor do litro de álcool e de gasolina (7.90 6.10): ').split(' ').map(Number)
    console.log(calcularcombustivel(rendalcoolkm,distancia,rendimentoalcool,valoraalcool,rendgasokm,rendgasol,valorgasolina))
}
function calcularcombustivel(rakm,dis,ral,va,rgkm,rgl,vg){
    let gastoalcool,gastogaso
    if (dis>rakm && dis>rakm){
        gastoalcool= (dis/rakm)*va*ral
        gastogaso= (dis/rgkm)*vg*rgl
    } else {
        gastoalcool= (rakm/dis)*va*ral
        gastogaso= (rgkm/dis)*vg*rgl
    }
    let recomendado
    if (gastoalcool>gastogaso){
        recomendado = 'gasolina'
        return (`O gasto com gasolina é de R$${gastogaso}\nO gasto com álcool é de R$${gastoalcool}\nRecomendo o uso de ${recomendado}`)
    } else {
        recomendado = 'álcool'
        return (`O gasto com gasolina é de R$${gastogaso}\nO gasto com álcool é de R$${gastoalcool}\nRecomendo o uso de ${recomendado}`)
    }
}
main()