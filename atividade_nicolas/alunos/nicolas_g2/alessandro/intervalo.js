import prompt from 'prompt-sync'
const input = prompt()

function main() {
    // Data entry.
    console.log('Digite dois instantes no tempo no formato dd/MM/aaaa hh:mm:ss a fim de se calcular a duração entre eles.');
    // Primeiro instante (data).
    const datadia = input('Digite o dia da primeira data: ');
    const datamon = input('Digite o mês: ');
    const dataAno = input('Digite o ano: ');
    // Primeiro instante (hora).
    const hora = input('Digite a hora: ');
    const minute = input('Digite os minutos: ');
    const seconds = input('Digite os segundos: ');
    // Segundo instante (data).
    const datadia2 = input('Digite o dia da segunda data: ');
    const datamon2 = input('Digite o mês: ');
    const dataAno2 = input('Digite o ano: ');
    // Segundo instante (hora).
    const hora2 = input('Digite a hora: ');
    const minute2 = input('Digite os minutos: ');
    const seconds2 = input('Digite os segundos: ');
    // Processamento (cálculo).
    let daysdiff = Number(datadia - datadia2);
    let monthiff = Number(datamon - datamon2);
    let yeardiff = Number(dataAno - dataAno2);
    var hourdiff = Number(hora - hora2);
    var minudiff = Number(minute - minute2);
    var secodiff = Number(seconds - seconds2);
    // Saída:
    console.log(`A duração entre os dois intervalos equivale a: ${daysdiff}/${monthiff}/${yeardiff} ${hourdiff}:${minudiff}:${secodiff}`);
}

main();