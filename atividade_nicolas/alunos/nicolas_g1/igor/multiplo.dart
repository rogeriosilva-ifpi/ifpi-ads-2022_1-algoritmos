import 'dart:math';

import '../io_utils.dart';
import 'prova_utils.dart';

void main(List<String> args) {

  var num1 = getNumber("Digite um numero: ");
  var num2 = getNumber("Digite um numero: ");

  var listaint = [num1, num2];
  
  while (maior(num1, num2) % menor(num1, num2) != 0) {
    num1 = num2;
    num2 = getNumber("Digite um numero: ");

    listaint.add(num2);
  }

  var pares = 0;
  var impares = 0;
  var positivos = 0;
  var negativos = 0;

  for (var num in listaint) {
    if(ehPositivo(num)) positivos++;
    if(ehNegativo(num)) negativos++;
    if(ehPar(num)) pares++;
    if(ehImpar(num)) impares++;
  }

  print("Positivos: $positivos");
  print("Negativos: $negativos");
  print("Pares: $pares");
  print("Impares: $impares");

}

bool ehPositivo(n1){
  return n1 > 0;
}

ehNegativo(n1){
  return !ehPositivo(n1);
}

bool ehPar(num n1){
  return n1 % 2 ==0;
}

bool ehImpar(num n1){
  return !ehPar(n1);
}

num maior(n1, n2){
  return max(n1, n2);
}

num menor(n1, n2){
  return min(n1, n2);
}