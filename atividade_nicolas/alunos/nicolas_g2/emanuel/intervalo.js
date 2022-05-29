import {input} from "./io_utils.js"

function main(){

    const dat1 = input('digite a data e a hora: ')

    const separar1 = dat1.split(" ")
    const data1 = separar1[0]
    const hora1 = separar1[1]

    const separar_data1 = data1.split("/").map(Number)
    const separar_hora1 = hora1.split(":").map(Number)

    const d1 = separar_data1[0]
    const m1 = separar_data1[1]
    const a1 = separar_data1[2]

    const h1 = separar_hora1[0]
    const min1 = separar_hora1[1]
    const s1 = separar_hora1[2]

    const dat2 = input('digite a data e a hora: ')

    const separar2 = dat2.split(" ")
    const data2 = separar2[0]
    const hora2 = separar2[1]

    const separar_data2 = data2.split("/").map(Number)
    const separar_hora2 = hora2.split(":").map(Number)

    const d2 = separar_data2[0]
    const m2 = separar_data2[1]
    const a2 = separar_data2[2]

    const h2 = separar_hora2[0]
    const min2 = separar_hora2[1]
    const s2 = separar_hora2[2]

    let s3 = s2 - s1
    let min3 = min2 - min1
    let h3 = h2 - h1 

    let a3 = a2 - a1
    let m3 = m2 - m1
    let d3 = d2 - d1

    while(d3 < 0 || m3 < 0 || a3 < 0 || h3 < 0 || min3 < 0 || s3){
    if(d3 < 0){
        d3 = d3 + 30
        m3 = m3 - 1
    }else if(m3 < 0){
        m3 = m3 + 12
        a3 - 1
    }

    if(s3 < 0){
        s3 = s3 + 60
        min3 = min3 - 1
    }else if(min3){
        min3 = min3 + 60
        h3 = h3 - 1
    }else if(h3 < 0){
        h3 = h3 + 24
        d3 = d3 - 1
    }
}

    console.log(`${d3}/${m3}/${a3} ${h3}:${min3}:${s3}`)
}
main()