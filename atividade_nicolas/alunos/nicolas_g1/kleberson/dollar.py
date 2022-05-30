cotacao_atual_dolar = 5.08
qtd_dolar_para_comprar = int(input('Informe a quantidade de dólar a ser comprado: '))
iof = qtd_dolar_para_comprar * 0.0011
valor_a_pagar_em_reais = iof * 5.08 

print('O valor a ser pago em reais é: {} R$'.format(valor_a_pagar_em_reais))
print(iof)

#valor do dolar a 5.08 -- comprar 200 dólares
#vou pagar 1000 e alguma coisa