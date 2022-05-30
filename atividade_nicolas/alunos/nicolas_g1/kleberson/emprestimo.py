renda_mesnal = int(input('Informe o valor da sua renda mensal: '))
valor_emprestimo = int(input('Informe o valor do emprestimo: '))
prazo = int(input('Informe o prazo: '))
selic = 12.75
prazo_em_dias =  prazo * 30
nova_selic = 0 

iof = (0.38 * valor_emprestimo) + (0.00082 * prazo_em_dias) 

taxa_juros = prazo  * nova_selic
juros_simples = valor_emprestimo * taxa_juros
parcela = (juros_simples / prazo) * 0.4

if prazo <= 6:
    nova_selic = selic * 0.5
    print('Valor do IOF: {}'.format(iof))
    print('Valor do juros a pagar: '.format(taxa_juros))
    print('Valor total a pagar: {}'.format(iof))
    print('Valor da parcela mensal: {}x de {} R$'.format(prazo, parcela))
    print('Valor do IOF: {}.format(iof)'.format)

if prazo <= 12:
    nova_selic = selic * 0.75
    print('Valor do IOF: {}'.format(iof))
    print('Valor do juros a pagar: '.format(taxa_juros))
    print('Valor total a pagar: {}'.format(iof))
    print('Valor da parcela mensal: {}x de {} R$'.format(prazo, parcela))
    print('Valor do IOF: {}'.format)

if prazo >=12 and prazo <= 18:
    nova_selic = selic
    print('Valor do IOF: {}'.format(iof))
    print('Valor do juros a pagar: '.format(taxa_juros))
    print('Valor total a pagar: {}'.format(iof))
    print('Valor da parcela mensal: {}x de {} R$'.format(prazo, parcela))
    print('Valor do IOF: {}'.format)

if prazo > 18:
    nova_selic = selic * 1.3
    print('Valor do IOF: {}'.format(iof))
    print('Valor do juros a pagar: '.format(taxa_juros))
    print('Valor total a pagar: {}'.format(iof))
    print('Valor da parcela mensal: {}x de {} R$'.format(prazo, parcela))
    print('Valor do IOF: {}.format(iof)'.format)

if parcela in renda_mesnal:
    print('Empréstimo aprovado')
else:
    print('Empréstimo negado')