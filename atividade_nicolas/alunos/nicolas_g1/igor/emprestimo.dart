import '../io_utils.dart';
import 'prova_utils.dart';

void main(List<String> args) {
  num rendaMensal = getNumber("Insira sua renda mensal: R\$ ");
  num valorEmprestimo = getNumberOnRange("Insira o valor do emprestimo (min: 1 salário minimo): ", 1212, double.maxFinite.toInt());
  int qtdParcelas = getNumberOnRange("Insira o numero de parcelas(2-24): ", 2, 24).toInt();

  double valorIOF = calcularIOFEmprestimo(valorEmprestimo, qtdParcelas);

  double subTotalEmprestimo = valorEmprestimo + valorIOF;
  
  double taxaJuros = calcularTaxaDeJuros(qtdParcelas);
  double jurosEmprestimo = taxaJuros * subTotalEmprestimo;

  double valorTotal = subTotalEmprestimo + jurosEmprestimo;
  double vlrParcelas = valorTotal / qtdParcelas;


  if(!(vlrParcelas > (0.4 * rendaMensal))){
    print("EMPRESTIMO APROVADO:");
    print("-> Valor do IOF: R\$ ${valorIOF.toStringAsFixed(2)}");
    print("-> Valor do juros a pagar: R\$ ${jurosEmprestimo.toStringAsFixed(2)}");
    print("-> Valor total a pagar: R\$ ${valorTotal.toStringAsFixed(2)}");
    print("-> Valor da parcela mensal: ${qtdParcelas}x de ${vlrParcelas.toStringAsFixed(2)}");
  } else {
    print("EMPRESTIMO REPROVADO");
  }
    
}

double calcularTaxaDeJuros(int qtdParcelas) {

  const taxaSelic = 12.75 / 100;
  
  if(qtdParcelas <= 6){
    return taxaSelic * 0.5;
  } else
  if(qtdParcelas <= 12){
    return taxaSelic * 0.75;
    
  } else
  if(qtdParcelas <= 18){
    return taxaSelic * 1.0;
    
  } else
  if(qtdParcelas <= 24){
    return taxaSelic * 1.3;
    
  }
  return -1;
}

double calcularIOFEmprestimo(valorEmprestimo, qtdParcelas) {

  const IOF = 0.38 / 100;
  const IOF_DIA = 0.0082 / 100;
  var dias = qtdParcelas * 30;

  var IOFTotal = (IOF * valorEmprestimo) + (IOF_DIA * qtdParcelas * dias);

  return IOFTotal;
}