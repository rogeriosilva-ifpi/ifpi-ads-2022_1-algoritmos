momento_inicio = input('Hora inicial: ').split(':')
momento_final = input('Hora final: ').split(':')

hora_inicio = int(momento_inicio[0])
minuto_inicio = int(momento_inicio[1])

hora_final = int(momento_final[0])
minuto_final = int(momento_final[1])

horas = hora_final - hora_inicio
minutos = minuto_final - minuto_inicio

if hora_inicio >= 0 and hora_inicio <= 23:
    if minuto_inicio >= 0 and minuto_final <= 60:
        print('A duração é de {} hora(s) e de {} minutos'.format(horas, minutos))

