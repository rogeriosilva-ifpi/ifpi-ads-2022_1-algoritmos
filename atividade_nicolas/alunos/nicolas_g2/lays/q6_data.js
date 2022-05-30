function main () {
    const data = prompt("Digite sua data de nascimento: ").split("/")
      let dia = data[0]
      let mes = data[1]
      let ano = data[2]
    const horario = prompt("Digite seu horario de nascimento: ").split(":")
      let hora = horario[0]
      let minuto = horario[1]
      let segundo = horario[2]
    const hoje = prompt("Digite a data de hoje: ").split("/")
      let dia2 = hoje[0]
      let mes2 = hoje[1]
      let ano2 = hoje[2]
    const horario_atual = prompt("Digite o horario atual: ").split(":")
      let hora2 = horario_atual[0]
      let minuto2 = horario_atual[1]
      let segundo2 = horario_atual[2]
    
      const idade_anos = ano2 - ano
      const idade_meses = idade_anos * 12 
      const idade_dias = idade_meses * 365
      const idade_horas = idade_dias * 24
      const idade_minutos = idade_horas * 60
      const idade_segundos = idade_minutos * 60
        
      console.log(`Você tem ${idade_anos} anos, ${idade_meses} meses, ${idade_dias} dia, 
      ${idade_horas} horas, ${idade_minutos} minutos e ${idade_segundos} segundos de idade.`)
    }
    
    main()