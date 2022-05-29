import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const instante1 = input('Primeiro momento: ')
    const [dd1, MM1, aa1, hh1, mm1, ss1] = instante1.split('/').map(Number)
    const instante2 = input('Segundo momento: ')
    const [dd2, MM2, aa2, hh2, mm2, ss2]  = instante1.split('/').map(Number)

    
}
main()
