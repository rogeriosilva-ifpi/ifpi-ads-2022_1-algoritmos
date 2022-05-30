function main () {
    const gasolina = Number(prompt("Digite o valor da gasolina: "))
    
    const d_r = gasolina * 14/100
    const cida = d_r * 10/100
    const etanol = cida * 13/100
    const icms = etanol * 27/100
    const petrobras = gasolina - icms
    
    
    console.log(`Distribuição e revenda: ${d_r}`)
    console.log(`Cida, PIS: ${cida}`)
    console.log(`Etanol: ${etanol}`)
    console.log(`ICMS: ${icms}`)
    console.log(`Petrobras: ${petrobras}`)
    
    }
    
    main ()
    