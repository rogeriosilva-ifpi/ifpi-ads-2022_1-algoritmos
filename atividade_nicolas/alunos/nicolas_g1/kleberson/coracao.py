idade = int(input('Informe a idade do usuário: '))
fc_atual = int(input('Informe a sua frequência cardíaca atual: '))

fc_max = 220 - idade

intensidade_moderada1 = fc_max * (50 / 100)
intensidade_moderada2 = fc_max * (60 / 100)

intensidade_controle_de_peso1 = fc_max * (60 /100)
intensidade_controle_de_peso2 = fc_max * (70 /100)

intensidade_aerobica1 = fc_max * (70 / 100)
intensidade_aerobica2 = fc_max * (80 / 100)

intensidade_anaerobica1 = fc_max * (80 / 100)
intensidade_anaerobica2 = fc_max * (90 / 100)

intensidade_esforco_max1 = fc_max * (90/100)
intensidade_esforco_max2 = fc_max 

atividade_moderada = 60
controle_de_peso = 70
aerobica = 80
anaerobica = 90
esforco_maximo = 100

if fc_atual <= intensidade_moderada1 and fc_atual <= intensidade_moderada2:
    print('Zona da Frequência Cardíaca atual {} - moderada\nLimites da FC de acordo com a idade informada:  {}(%) - {}(%) da frequência máxima atual'.format(fc_atual, 50, atividade_moderada))

if fc_atual >= intensidade_controle_de_peso1 and fc_atual <= intensidade_controle_de_peso2:
    print('Zona da Frequência Cardíaca atual {} - controle de peso\nLimites da FC de acordo com a idade informada:  {}(%) - {}(%) da frequência máxima atual'.format(fc_atual, 60, controle_de_peso)) 

if fc_atual >= intensidade_aerobica1 and fc_atual <= intensidade_aerobica2:
    print('Zona da Frequência Cardíaca atual {} - aeróbica\nLimites da FC de acordo com a idade informada:  {}(%) - {}(%) da frequência máxima atual'.format(fc_atual, 70, aerobica)) 

if fc_atual >= intensidade_anaerobica1 and fc_atual <= intensidade_anaerobica2:
    print('Zona da Frequência Cardíaca atual {} - anaeróbica\nLimites da FC de acordo com a idade informada:  {}(%) - {}(%) da frequência máxima atual'.format(fc_atual, 80, anaerobica))

if fc_atual >= intensidade_esforco_max1 and fc_atual >= intensidade_esforco_max2:
    print('Zona da Frequência Cardíaca atual {} - esforço máximo\nLimites da FC de acordo com a idade informada:  {}(%) - {}(%) da frequência máxima atual'.format(fc_atual, 90, esforco_maximo))
         