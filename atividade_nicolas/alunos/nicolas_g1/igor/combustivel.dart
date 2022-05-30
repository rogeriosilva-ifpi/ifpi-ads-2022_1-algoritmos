import '../io_utils.dart';
import 'prova_utils.dart';

void main(List<String> args) {
  var rendAlc = getNumber("Informe o rendimento usando alcool: ");
  var rendGas = getNumber("Informe o rendimento usando gasolina: ");

  var distancia = getNumber("Insira a distancia a ser percorrida: ");

  var precAlc = getNumber("Valor do litro de alcool: ");
  var precGas = getNumber("Valor do litro de gasolina: ");

  var gastoTotalAlc = precAlc * gasto(distancia, rendAlc);
  var gastoTotalGas = precGas * gasto(distancia, rendGas);

  print("\n");

  print("Valor se usar gasolina: $gastoTotalAlc");
  print("Valor se usar alcool: $gastoTotalGas");
}

gasto(num distancia, num rend) {
  return distancia / rend;
}