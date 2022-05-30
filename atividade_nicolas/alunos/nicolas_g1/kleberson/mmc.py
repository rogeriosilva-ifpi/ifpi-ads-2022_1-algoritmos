a = int(input('Valor de A: '))
b = int(input('Valor de A: '))
mmc = a * b / 2
mmc_de_a_b = 0

while a>0 and b>0:
    if mmc % 2 == 0:
        mmc_de_a_b = mmc

    else:
        print(mmc_de_a_b) 
