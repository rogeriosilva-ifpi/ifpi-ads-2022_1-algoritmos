import '../io_utils.dart';

void main(List<String> args) {

  
  var cotDollar = double.parse(input("Cotação atual do Dollar: R\$ "));
  var quantity = double.parse(input("Quantos dólares deseja comprar: \$ "));

  var subTotalValue = cotDollar * quantity;
  var IOFTotal = calcularIOF(subTotalValue);
  var totalValue = subTotalValue + IOFTotal;

  print("Valor bruto: R\$ ${subTotalValue.toStringAsFixed(2)}");
  print("Impostos a pagar: R\$ ${IOFTotal.toStringAsFixed(2)}");
  print("Valor total: R\$ ${totalValue.toStringAsFixed(2)}");
}

double calcularIOF(num valor){
  const IOF = 1.1 / 100;
  return valor * IOF;
}