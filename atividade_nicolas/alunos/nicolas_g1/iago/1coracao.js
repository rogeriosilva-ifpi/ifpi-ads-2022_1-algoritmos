import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let FCAtual = Number(input("Digite sua frequência cardíaca atual: "))
    let idade = Number(input("Digite sua idade: "))
    let zonaIdeal = calcularZonaIdeal(idade, FCAtual)
    console.log(zonaIdeal)
}

function calcularZonaIdeal(idade, FCAtual) {
    let FCMax = 220 - idade
    let FCMinZona = (FCMax * 50 / 100)
    let FCMaxZona = (FCMax * 59 / 100)
    if (FCAtual >= (FCMax * (50 / 100)) && FCAtual < (FCMax * (60 / 100))) {
        return `Atividade moderada {${(Math.ceil(FCMinZona))}, ${(Math.ceil(FCMaxZona))}))`
    } else if (FCAtual >= Math.ceil((FCMax * (60 / 100))) && FCAtual < Math.ceil((FCMax * (70 / 100)))) {
        FCMinZona = FCMax * 60 / 100
        FCMaxZona = FCMax * 69 / 100
        return `Controle de peso {${(Math.ceil(FCMinZona))}, ${(Math.ceil(FCMaxZona))}))`
    } else if (FCAtual >= Math.ceil((FCMax * (70 / 100))) && FCAtual < Math.ceil((FCMax * (80 / 100)))) {
        FCMinZona = FCMax * 70 / 100
        FCMaxZona = FCMax * 79 / 100
        return `Aeróbica {${(Math.ceil(FCMinZona))}, ${(Math.ceil(FCMaxZona))}))`
    } else if (FCAtual >= Math.ceil((FCMax * (80 / 100))) && FCAtual < Math.ceil((FCMax * (90 / 100)))) {
        FCMinZona = FCMax * 80 / 100
        FCMaxZona = FCMax * 89 / 100
        return `Anaeróbica {${(Math.ceil(FCMinZona))}, ${(Math.ceil(FCMaxZona))}))`
    } else if (FCAtual >= Math.ceil((FCMax * (90 / 100))) && FCAtual <= FCMax) {
        FCMinZona = FCMax * 90 / 100
        FCMaxZona = FCMax * 100 / 100
        return `Esforço máximo {${(Math.ceil(FCMinZona))}, ${(Math.ceil(FCMaxZona))}))`
    }
}
main()