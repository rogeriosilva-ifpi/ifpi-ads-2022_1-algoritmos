import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const data = input('Digite em ordem as primeiras datas:')
    const data1 = input('Digite em ordem as segundas datas:')

    const data_splitada = data.split('/').map(Number)
    const data_splitada1 = data1.split('/').map(Number)

    const segundos0 = transformar_dias_segundos(data_splitada[0])
    const segundos1 = transformar_meses_segundos(data_splitada[1])
    const segundos2 = transformar_anos_segundos(data_splitada[2])
    const segundos3 = transformar_horas_segundos(data_splitada[3])
    const segundos4 = transformar_minutos_segundos(data_splitada[4])
    const segundos5 = transformar_segundos_segundos(data_splitada[5])

    const segundos6 = transformar_dias_segundos(data_splitada1[0])
    const segundos7 = transformar_meses_segundos(data_splitada1[1])
    const segundos8 = transformar_anos_segundos(data_splitada1[2])
    const segundos9 = transformar_horas_segundos(data_splitada1[3])
    const segundos10 = transformar_minutos_segundos(data_splitada1[4])
    const segundos11= transformar_segundos_segundos(data_splitada1[5])


    
    const total_segundos_1 = segundos0 +segundos1 + segundos2 + segundos3 + segundos4 + segundos5
    const total_segundos_2 = segundos6 +segundos7 + segundos8 + segundos9 + segundos10 + segundos11

     if(total_segundos_1>total_segundos_2){
          const subtraçao = total_segundos_1 - total_segundos_2

          const re_transformar = transformaçao_de_volta(subtraçao)
          console.log(re_transformar)
     }else if(total_segundos_1<total_segundos_2){
          const subtraçao = total_segundos_2 - total_segundos_1

          const re_transformar = transformaçao_de_volta(subtraçao)

     }
     
}
function transformar_dias_segundos(data){
     const dias_segundos = data * 86400
     return dias_segundos
}
function transformar_meses_segundos(data){
     const meses_segundos = data * 86400 * 30
     return meses_segundos
}
function transformar_anos_segundos(data){
     const anos_segundos = data * 86400 * 30 * 12
     return anos_segundos
}
function transformar_horas_segundos(data){
     const horas_segundos = data * 3600
     return horas_segundos
}
function transformar_minutos_segundos(data){
     const minutos_segundos = data * 60
     return minutos_segundos
}
function transformar_segundos_segundos(data){
     const segundos_segundos = data
     return segundos_segundos
}
function transformaçao_de_volta(subtraçao){
     let resto = 0
     const subtraçao_anos = Math.floor(subtraçao/(86400 * 30 * 12))
     resto = subtraçao % (86400 * 30 * 12)
     const subtraçao_meses = Math.floor(resto/(86400 * 30))
     resto = resto % (86400 * 30)
     const subtraçao_dias = Math.floor(resto/(86400))
     resto = resto % (86400)
     const subtraçao_horas = Math.floor(resto/(3600))
     resto = resto % (3600)
     const subtraçao_minutos = Math.floor(resto/(60))
     resto = resto % (60)
     const subtraçao_segundos = resto
     console.log(`O intervalo foi de ${subtraçao_dias}/${subtraçao_meses}/${subtraçao_anos} ${subtraçao_horas}:${subtraçao_minutos}:${subtraçao_segundos}`)

}
main()