import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const i1 = input('1º Momento (dd/MM/aaaa hh:mm:ss)').split(' ')
    const i2 = input('2º Momento (dd/MM/aaaa hh:mm:ss)').split(' ')
    console.log(calc(i1, i2))

}

function calc(i1, i2){
    let y = 0
    let m = 0
    let d = 0
    const y2 = Number(i2[0].split('/')[2])
    const y1 = Number(i1[0].split('/')[2])
    const m2 = Number(i2[0].split('/')[1])
    const m1 = Number(i1[0].split('/')[1])
    const d2 = Number(i2[0].split('/')[0])
    const d1 = Number(i1[0].split('/')[0])
    if (y2 > y1){
        if (m2 > m1){
            y = y2 - y1
            if(d2 > d1){
                m = m2 - m1
                d = d2 - d1
            } else if(d2 < d1){
                m = m2 - m1 - 1
                d = 30 - d1 + d2
            } else {
                m = m2 - m1
                d = 0
            }
        } else if (m2 < m1){
            y = y2 - y1 - 1
            if(d2 > d1){
                m = 12 - m1 + m2
                d = d2 - d1
            } else if(d2 < d1){
                m = 12 - m1 + m2 - 1
                d = 30 - d1 + d2
            } else {
                m = 12 - m1 + m2
                d = 0
            }
        } else {
            y = y2 - y1
            m = 0
            if(d2 > d1){
                d = d2 - d1
            } else if(d2 < d1){
                d = 30 - d1 + d2
            } else {
                d =0
            }
        }
    } else if(y1 > y2){
        if (m2 > m1){
            y = y1 - y2
            if(d2 > d1){
                m = m2 - m1
                d = d2 - d1
            } else if(d2 < d1){
                m = m2 - m1 - 1
                d = 30 - d1 + d2
            } else {
                m = m2 - m1
                d = 0
            }
        } else if (m2 < m1){
            y = y1 - y2 - 1
            if(d2 > d1){
                m = 12 - m1 + m2
                d = d2 - d1
            } else if(d2 < d1){
                m = 12 - m1 + m2 - 1
                d = 30 - d1 + d2
            } else {
                m = 12 - m1 + m2
                d = 0
            }
        } else {
            y = y1 - y2
            m = 0
            if(d2 > d1){
                d = d2 - d1
            } else if(d2 < d1){
                d = 30 - d1 + d2
            } else {
                d =0
            }
        }
    } else {
        y = 0
        if (m2 > m1){
            if(d2 > d1){
                m = m2 - m1
                d = d2 - d1
            } else if(d2 < d1){
                m = m2 - m1 - 1
                d = 30 - d1 + d2
            } else {
                m = m2 - m1
                d = 0
            }
        } else if (m2 < m1){
            if(d2 > d1){
                m = 12 - m1 + m2
                d = d2 - d1
            } else if(d2 < d1){
                m = 12 - m1 + m2 - 1
                d = 30 - d1 + d2
            } else {
                m = 12 - m1 + m2
                d = 0
            }
        } else {
            m = 0
            if(d2 > d1){
                d = d2 - d1
            } else if(d2 < d1){
                d = 30 - d1 + d2
            } else {
                d =0
            }
        }
    }   
    let h = 0
    let min = 0
    let s = 0
    const h2 = Number(i2[1].split(':')[0])
    const h1 = Number(i1[1].split(':')[0])
    const min2 = Number(i2[1].split(':')[1])
    const min1 = Number(i1[1].split(':')[1])
    const s2 = Number(i2[1].split(':')[2])
    const s1 = Number(i1[1].split(':')[2])
    if (h2 > h1){
        if (min2 > min1){
            h = h2 - h1
            if(min2 > min1){
                min = min2 - min1
                s = s2 - s1
            } else if(min2 < min1){
                min = min2 - min1 - 1
                s = 60 - s1 + s2
            } else {
                min = min2 - min1
                s = 0
            }
        } else if (min2 < min1){
            h = h2 - h1 - 1
            if(min2 > min1){
                min = 60 - min1 + min2
                s = s2 - s1
            } else if(d2 < d1){
                min = 60 - m1 + m2 - 1
                s = 60 - s1 + s2
            } else {
                min = 12 - m1 + m2
                s = 0
            }
        } else {
            h = h2 - h1
            min = 0
            if(s2 > s1){
                s = s2 - s1
            } else if(d2 < d1){
                s = 60 - s1 + s2
            } else {
                s = 0
            }
        }
    } else if(h1 > h2){
        if (min2 > min1){
            h = h1 - h2
            if(min2 > min1){
                min = min2 - min1
                s = s2 - s1
            } else if(s2 < s1){
                min = min2 - min1 - 1
                s = 60 - s1 + s2
            } else {
                min = min2 - min1
                s = 0
            }
        } else if (min2 < min1){
            h = h1 - h2 - 1
            if(s2 > s1){
                m = 12 - min1 + min2
                s = s2 - s1
            } else if(s2 < s1){
                m = 12 - min1 + min2 - 1
                s = 60 - s1 + s2
            } else {
                m = 12 - min1 + min2
                s = 0
            }
        } else {
            h = h1 - h2
            min = 0
            if(s2 > s1){
                s = s2 - s1
            } else if(s2 < s1){
                s = 60 - s1 + s2
            } else {
                s = 0
            }
        }
    } else {
        y = 0
        if (min2 > min1){
            if(s2 > s1){
                min = min2 - min1
                s = s2 - s1
            } else if(s2 < s1){
                min = min2 - min1 - 1
                s = 60 - s1 + s2
            } else {
                min = m2 - m1
                d = 0
            }
        } else if (min2 < min1){
            if(min2 > min1){
                min = 12 - m1 + m2
                s = s2 - s1
            } else if(m2 < m1){
                min = 12 - m1 + m2 - 1
                s = 60 - s1 + s2
            } else {
                min = 12 - m1 + m2
                s = 0
            }
        } else {
            min = 0
            if(s2 > s1){
                s = s2 - s1
            } else if(d2 < d1){
                s = 60 - s1 + s2
            } else {
                s = 0
            }
        }
    }

    return `${d}/${m}/${y} ${h}:${min}:${s}`
}

main()